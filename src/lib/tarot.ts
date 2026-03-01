import { MAJOR_ARCANA } from '@/data/major-arcana';
import type { TarotCardData, CardOrientation, DrawnCard, ThreeCardPosition } from '@/types/tarot';

/**
 * Fisher-Yatesアルゴリズムで配列をシャッフル
 */
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 正位置 or 逆位置をランダムに決定
 */
function randomOrientation(): CardOrientation {
  return Math.random() < 0.5 ? 'upright' : 'reversed';
}

/**
 * カードデッキをシャッフルして返す
 */
export function shuffleDeck(cards: TarotCardData[] = MAJOR_ARCANA): TarotCardData[] {
  return shuffle(cards);
}

/**
 * ワンオラクル用: 1枚引く
 */
export function drawOneCard(deck: TarotCardData[]): DrawnCard {
  const card = deck[0];
  return {
    card,
    orientation: randomOrientation(),
  };
}

/**
 * 3枚引き用: 3枚引く（過去・現在・未来）
 */
export function drawThreeCards(deck: TarotCardData[]): DrawnCard[] {
  const positions: ThreeCardPosition[] = ['past', 'present', 'future'];
  return deck.slice(0, 3).map((card, index) => ({
    card,
    orientation: randomOrientation(),
    position: positions[index],
  }));
}

/**
 * カードIDからカードデータを取得
 */
export function getCardById(cardId: number): TarotCardData | undefined {
  return MAJOR_ARCANA.find(card => card.id === cardId);
}
