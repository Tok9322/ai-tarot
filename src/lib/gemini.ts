import type { ReadingResponse } from '@/types/tarot';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

/** 試行するモデルの優先順位（新しいモデルから順に試行） */
const MODELS = [
  'gemini-3-flash',      // メイン: 最新・日本語精度が高い
  'gemini-2.5-flash',    // フォールバック1: 安定版
  'gemini-2.0-flash',    // フォールバック2: 2026年6月廃止予定
];

async function callGemini(
  apiKey: string,
  prompt: string,
  model: string,
): Promise<ReadingResponse> {
  const url = `${GEMINI_API_URL}/${model}:generateContent?key=${apiKey}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.9,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(`Gemini API error (${res.status}) [${model}]: ${err.slice(0, 200)}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error(`Gemini returned empty response [${model}]`);

  const parsed = JSON.parse(text);

  return {
    reading: String(parsed.reading || ''),
    summary: String(parsed.summary || ''),
    advice: String(parsed.advice || ''),
  };
}

/**
 * 複数モデルにフォールバックしながらGemini APIを呼び出す
 */
export async function generateReading(
  apiKey: string,
  prompt: string,
): Promise<ReadingResponse> {
  let lastError: Error | null = null;

  for (const model of MODELS) {
    try {
      console.log(`Trying model: ${model}`);
      const result = await callGemini(apiKey, prompt, model);
      console.log(`Success with model: ${model}`);
      return result;
    } catch (error) {
      lastError = error as Error;
      console.warn(`Model ${model} failed:`, (error as Error).message.slice(0, 100));
      // 429エラー（レート制限）の場合は次のモデルを試す
      continue;
    }
  }

  throw lastError || new Error('All models failed');
}
