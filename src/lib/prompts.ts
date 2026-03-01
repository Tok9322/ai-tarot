import type { SpreadType, ReadingCategory, DrawnCard } from '@/types/tarot';

const CATEGORY_LABELS: Record<ReadingCategory, string> = {
  general: '総合運',
  love: '恋愛運',
  work: '仕事運',
  money: '金運',
};

const POSITION_LABELS: Record<string, string> = {
  past: '過去',
  present: '現在',
  future: '未来',
};

export function buildReadingPrompt(
  spreadType: SpreadType,
  category: ReadingCategory,
  drawnCards: DrawnCard[],
): string {
  const categoryLabel = CATEGORY_LABELS[category];

  const cardsDescription = drawnCards.map(({ card, orientation, position }) => {
    const posLabel = position ? `【${POSITION_LABELS[position]}】` : '';
    const oriLabel = orientation === 'upright' ? '正位置' : '逆位置';
    const meaning = orientation === 'upright' ? card.uprightMeaning : card.reversedMeaning;
    const keywords = orientation === 'upright'
      ? card.uprightKeywords.join('、')
      : card.reversedKeywords.join('、');
    return `${posLabel}${card.name}（${card.nameEn}）— ${oriLabel}\nキーワード: ${keywords}\n基本的な意味: ${meaning}`;
  }).join('\n\n');

  const spreadLabel = spreadType === 'one-oracle'
    ? 'ワンオラクル（1枚引き）'
    : '3枚引き（過去・現在・未来）';

  return `あなたはプロのタロット占い師です。以下のカード情報に基づいて、${categoryLabel}の鑑定文を生成してください。

【スプレッド】${spreadLabel}
【カテゴリ】${categoryLabel}

【引いたカード】
${cardsDescription}

【生成ルール】
- 温かく前向きなトーンで書いてください
- 具体的な行動のアドバイスを含めてください
- 断定しすぎず「〜かもしれません」「〜しそうです」のような表現を使ってください
- ${spreadType === 'three-card' ? '過去→現在→未来の流れでストーリーを組み立ててください' : 'カードの意味を深く掘り下げてください'}
- 占いはエンターテイメントであることを念頭に、楽しんでもらえる内容にしてください
- 相談者に寄り添う優しい言葉遣いを心がけてください

以下のJSON形式で回答してください（他のテキストは含めないでください）:
{
  "reading": "鑑定文（200〜400文字）",
  "summary": "一言まとめ（30文字以内、SNSシェア用）",
  "advice": "具体的なアドバイス（1〜2文）"
}`;
}
