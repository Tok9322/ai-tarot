'use client';

import type { TarotCardData, CardOrientation } from '@/types/tarot';

interface TarotCardProps {
  card: TarotCardData | null;
  orientation?: CardOrientation;
  isFlipped: boolean;
  onClick?: () => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-20 h-32',
  md: 'w-28 h-44',
  lg: 'w-36 h-56',
};

export default function TarotCard({
  card,
  orientation = 'upright',
  isFlipped,
  onClick,
  disabled = false,
  size = 'md',
}: TarotCardProps) {
  return (
    <div
      className={`perspective-1000 ${sizeClasses[size]} cursor-pointer select-none ${disabled ? 'pointer-events-none opacity-60' : ''}`}
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* 裏面 */}
        <div className="absolute inset-0 backface-hidden rounded-xl border-2 border-amber-500/50 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 shadow-lg shadow-purple-900/30 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-2 rounded-lg border border-amber-500/30">
            <div className="absolute inset-2 rounded-md border border-amber-500/20 flex items-center justify-center">
              <div className="text-amber-400/60 text-3xl">&#10022;</div>
            </div>
          </div>
          {/* 装飾パターン */}
          <div className="absolute top-3 left-3 text-amber-500/20 text-xs">&#10022;</div>
          <div className="absolute top-3 right-3 text-amber-500/20 text-xs">&#10022;</div>
          <div className="absolute bottom-3 left-3 text-amber-500/20 text-xs">&#10022;</div>
          <div className="absolute bottom-3 right-3 text-amber-500/20 text-xs">&#10022;</div>
        </div>

        {/* 表面 */}
        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl border-2 border-amber-400/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg shadow-amber-900/20 flex flex-col items-center justify-between p-2 overflow-hidden ${orientation === 'reversed' ? 'rotate-180' : ''}`}
        >
          {card && (
            <>
              <div className="text-amber-400/80 text-[10px] font-medium tracking-wider">
                {card.number}
              </div>
              <div className="flex-1 flex items-center justify-center px-1">
                <div className="text-center">
                  <div className="text-3xl mb-1">
                    {getCardEmoji(card.id)}
                  </div>
                  <div className="text-amber-100 text-xs font-bold leading-tight">
                    {card.name}
                  </div>
                  <div className="text-amber-400/60 text-[9px] mt-0.5">
                    {card.nameEn}
                  </div>
                </div>
              </div>
              <div className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${orientation === 'upright' ? 'bg-amber-500/20 text-amber-300' : 'bg-purple-500/20 text-purple-300'}`}>
                {orientation === 'upright' ? '正位置' : '逆位置'}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function getCardEmoji(id: number): string {
  const emojis: Record<number, string> = {
    0: '🃏', 1: '🪄', 2: '🌙', 3: '👑', 4: '🏛️',
    5: '📿', 6: '💕', 7: '⚔️', 8: '🦁', 9: '🏮',
    10: '🎡', 11: '⚖️', 12: '🔮', 13: '💀', 14: '🏺',
    15: '😈', 16: '🗼', 17: '⭐', 18: '🌑', 19: '☀️',
    20: '📯', 21: '🌍',
  };
  return emojis[id] || '✨';
}
