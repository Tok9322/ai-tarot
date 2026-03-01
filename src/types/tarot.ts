/** タロットカードの向き */
export type CardOrientation = 'upright' | 'reversed';

/** スプレッドの種類 */
export type SpreadType = 'one-oracle' | 'three-card';

/** 占いカテゴリ */
export type ReadingCategory = 'general' | 'love' | 'work' | 'money';

/** 3枚引きのポジション */
export type ThreeCardPosition = 'past' | 'present' | 'future';

/** カードのマスターデータ（1枚分） */
export interface TarotCardData {
  id: number;
  name: string;
  nameEn: string;
  number: string;
  uprightKeywords: string[];
  reversedKeywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
}

/** ユーザーが引いたカード（1枚分） */
export interface DrawnCard {
  card: TarotCardData;
  orientation: CardOrientation;
  position?: ThreeCardPosition;
}

/** API リクエスト */
export interface ReadingRequest {
  spreadType: SpreadType;
  category: ReadingCategory;
  drawnCards: {
    cardId: number;
    orientation: CardOrientation;
    position?: ThreeCardPosition;
  }[];
}

/** API レスポンス */
export interface ReadingResponse {
  reading: string;
  summary: string;
  advice: string;
}
