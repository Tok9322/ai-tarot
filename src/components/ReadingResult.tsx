'use client';

import type { DrawnCard, ReadingResponse } from '@/types/tarot';

interface ReadingResultProps {
  drawnCards: DrawnCard[];
  reading: ReadingResponse | null;
  isLoading: boolean;
  error?: string | null;
}

export default function ReadingResult({ drawnCards, reading, isLoading, error }: ReadingResultProps) {
  if (error) {
    return (
      <div className="mt-8 p-6 bg-red-900/20 border border-red-700/50 rounded-2xl text-center">
        <p className="text-red-300">{error}</p>
        <p className="text-red-400/60 text-sm mt-2">もう一度お試しください</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="mt-8 p-8 bg-white/5 border border-purple-700/30 rounded-2xl text-center">
        <div className="animate-pulse space-y-4">
          <div className="text-4xl animate-spin-slow">🔮</div>
          <p className="text-purple-300 text-lg">カードの声を聴いています...</p>
          <div className="space-y-2 max-w-md mx-auto">
            <div className="h-3 bg-purple-700/30 rounded-full" />
            <div className="h-3 bg-purple-700/30 rounded-full w-4/5 mx-auto" />
            <div className="h-3 bg-purple-700/30 rounded-full w-3/5 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  if (!reading) return null;

  return (
    <div className="mt-8 space-y-6">
      {/* 引いたカードのサマリー */}
      <div className="flex flex-wrap justify-center gap-4">
        {drawnCards.map(({ card, orientation, position }) => (
          <div
            key={card.id}
            className="text-center bg-white/5 border border-purple-700/30 rounded-xl px-4 py-3"
          >
            {position && (
              <div className="text-purple-400/60 text-xs mb-1">
                {{ past: '過去', present: '現在', future: '未来' }[position]}
              </div>
            )}
            <div className="text-lg font-bold text-amber-300">{card.name}</div>
            <div className={`text-xs mt-1 px-2 py-0.5 rounded-full inline-block ${
              orientation === 'upright'
                ? 'bg-amber-500/20 text-amber-300'
                : 'bg-purple-500/20 text-purple-300'
            }`}>
              {orientation === 'upright' ? '正位置' : '逆位置'}
            </div>
          </div>
        ))}
      </div>

      {/* 鑑定文 */}
      <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-600/30 rounded-2xl p-6 space-y-4">
        <h3 className="text-amber-400 font-bold text-lg text-center">鑑定結果</h3>
        <p className="text-purple-100 leading-relaxed text-sm whitespace-pre-wrap">
          {reading.reading}
        </p>

        {/* アドバイス */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-4">
          <h4 className="text-amber-400 font-bold text-sm mb-1">アドバイス</h4>
          <p className="text-amber-100/90 text-sm">{reading.advice}</p>
        </div>
      </div>
    </div>
  );
}
