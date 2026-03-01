'use client';

import Image from 'next/image';
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

const CARD_IMAGES: Record<number, string> = {
  0: '00-fool', 1: '01-magician', 2: '02-high-priestess',
  3: '03-empress', 4: '04-emperor', 5: '05-hierophant',
  6: '06-lovers', 7: '07-chariot', 8: '08-strength',
  9: '09-hermit', 10: '10-wheel-of-fortune', 11: '11-justice',
  12: '12-hanged-man', 13: '13-death', 14: '14-temperance',
  15: '15-devil', 16: '16-tower', 17: '17-star',
  18: '18-moon', 19: '19-sun', 20: '20-judgement',
  21: '21-world',
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
          <div className="absolute top-3 left-3 text-amber-500/20 text-xs">&#10022;</div>
          <div className="absolute top-3 right-3 text-amber-500/20 text-xs">&#10022;</div>
          <div className="absolute bottom-3 left-3 text-amber-500/20 text-xs">&#10022;</div>
          <div className="absolute bottom-3 right-3 text-amber-500/20 text-xs">&#10022;</div>
        </div>

        {/* 表面 */}
        <div
          className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl border-2 border-amber-400/60 bg-slate-900 shadow-lg shadow-amber-900/20 overflow-hidden ${orientation === 'reversed' ? 'rotate-180' : ''}`}
        >
          {card && (
            <div className="relative w-full h-full">
              <Image
                src={`/images/cards/${CARD_IMAGES[card.id]}.webp`}
                alt={`${card.name} - ${card.nameEn}`}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 144px, 144px"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 rounded-b-xl">
                <div className="text-amber-100 text-xs font-bold text-center leading-tight">
                  {card.name}
                </div>
                <div className="text-amber-400/70 text-[9px] text-center">
                  {card.nameEn}
                </div>
              </div>
              <div className={`absolute top-1.5 right-1.5 text-[9px] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm ${orientation === 'upright' ? 'bg-amber-500/30 text-amber-200' : 'bg-purple-500/30 text-purple-200'}`}>
                {orientation === 'upright' ? '正位置' : '逆位置'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
