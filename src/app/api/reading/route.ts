import { NextResponse } from 'next/server';
import type { ReadingRequest, DrawnCard, SpreadType, ReadingCategory } from '@/types/tarot';
import { getCardById } from '@/lib/tarot';
import { buildReadingPrompt } from '@/lib/prompts';
import { generateReading } from '@/lib/gemini';

const VALID_SPREAD_TYPES: SpreadType[] = ['one-oracle', 'three-card'];
const VALID_CATEGORIES: ReadingCategory[] = ['general', 'love', 'work', 'money'];

export async function POST(request: Request) {
  try {
    const body: ReadingRequest = await request.json();

    // バリデーション
    if (!VALID_SPREAD_TYPES.includes(body.spreadType)) {
      return NextResponse.json({ error: 'Invalid spreadType' }, { status: 400 });
    }
    if (!VALID_CATEGORIES.includes(body.category)) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
    }

    const expectedCards = body.spreadType === 'one-oracle' ? 1 : 3;
    if (!body.drawnCards || body.drawnCards.length !== expectedCards) {
      return NextResponse.json(
        { error: `Expected ${expectedCards} cards for ${body.spreadType}` },
        { status: 400 },
      );
    }

    // カードデータを復元
    const drawnCards: DrawnCard[] = body.drawnCards.map(dc => {
      const card = getCardById(dc.cardId);
      if (!card) throw new Error(`Card not found: ${dc.cardId}`);
      return {
        card,
        orientation: dc.orientation,
        position: dc.position,
      };
    });

    // プロンプト構築
    const prompt = buildReadingPrompt(body.spreadType, body.category, drawnCards);

    // Gemini API呼び出し
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const reading = await generateReading(apiKey, prompt);

    return NextResponse.json(reading);
  } catch (error) {
    console.error('Reading API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate reading' },
      { status: 500 },
    );
  }
}
