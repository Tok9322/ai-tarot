'use client';

import { useState, useCallback } from 'react';
import type { ReadingCategory, DrawnCard, ReadingResponse } from '@/types/tarot';
import CategorySelector from '@/components/CategorySelector';
import CardDeck from '@/components/CardDeck';
import ReadingResult from '@/components/ReadingResult';
import ShareButtons from '@/components/ShareButtons';

export default function ThreeCardPage() {
  const [category, setCategory] = useState<ReadingCategory>('general');
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [reading, setReading] = useState<ReadingResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showReset, setShowReset] = useState(false);

  const handleComplete = useCallback(async (cards: DrawnCard[]) => {
    setDrawnCards(cards);
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/reading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          spreadType: 'three-card',
          category,
          drawnCards: cards.map(c => ({
            cardId: c.card.id,
            orientation: c.orientation,
            position: c.position,
          })),
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data: ReadingResponse = await res.json();
      setReading(data);
      setShowReset(true);
    } catch {
      setError('鑑定結果の取得に失敗しました。');
      setShowReset(true);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  const handleReset = () => {
    setDrawnCards([]);
    setReading(null);
    setError(null);
    setShowReset(false);
  };

  return (
    <div className="flex flex-col items-center gap-8 py-4">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-amber-300">3枚引き</h1>
        <p className="text-purple-400/70 text-sm">
          過去・現在・未来の流れから、あなたの道を読み解きます
        </p>
      </div>

      {/* カテゴリ選択 */}
      <CategorySelector selected={category} onChange={setCategory} />

      {/* カードデッキ */}
      {!showReset && (
        <CardDeck spreadType="three-card" onComplete={handleComplete} />
      )}

      {/* 鑑定結果 */}
      <ReadingResult
        drawnCards={drawnCards}
        reading={reading}
        isLoading={isLoading}
        error={error}
      />

      {/* シェアボタン */}
      {reading && (
        <ShareButtons
          summary={reading.summary}
          url={typeof window !== 'undefined' ? window.location.href : ''}
        />
      )}

      {/* もう一度占う */}
      {showReset && !isLoading && (
        <button
          onClick={handleReset}
          className="mt-4 px-6 py-3 bg-purple-600/20 border border-purple-500/40 text-purple-300 rounded-xl hover:bg-purple-600/30 transition-colors"
        >
          もう一度占う
        </button>
      )}
    </div>
  );
}
