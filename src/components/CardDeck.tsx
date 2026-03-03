'use client';

import { useState, useCallback } from 'react';
import type { TarotCardData, DrawnCard, SpreadType } from '@/types/tarot';
import { shuffleDeck, drawOneCard, drawThreeCards } from '@/lib/tarot';
import { MAJOR_ARCANA } from '@/data/major-arcana';
import TarotCard from './TarotCard';

interface CardDeckProps {
  spreadType: SpreadType;
  onComplete: (drawnCards: DrawnCard[]) => void;
}

type Phase = 'ready' | 'shuffling' | 'selecting' | 'done';

const DISPLAY_CARD_COUNT = 7;

export default function CardDeck({ spreadType, onComplete }: CardDeckProps) {
  const [phase, setPhase] = useState<Phase>('ready');
  const [deck, setDeck] = useState<TarotCardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<DrawnCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(new Set());
  const requiredCards = spreadType === 'one-oracle' ? 1 : 3;

  const handleShuffle = useCallback(() => {
    setPhase('shuffling');
    setSelectedCards([]);
    setFlippedIndices(new Set());

    // シャッフル演出の後にカードを表示
    setTimeout(() => {
      const shuffled = shuffleDeck(MAJOR_ARCANA);
      setDeck(shuffled);
      setPhase('selecting');
    }, 800);
  }, []);

  const handleCardSelect = useCallback((index: number) => {
    if (phase !== 'selecting' || flippedIndices.has(index)) return;
    if (selectedCards.length >= requiredCards) return;

    const newFlipped = new Set(flippedIndices);
    newFlipped.add(index);
    setFlippedIndices(newFlipped);

    const card = deck[index];
    const positions = ['past', 'present', 'future'] as const;
    const drawn: DrawnCard = {
      card,
      orientation: Math.random() < 0.5 ? 'upright' : 'reversed',
      position: spreadType === 'three-card' ? positions[selectedCards.length] : undefined,
    };

    const newSelected = [...selectedCards, drawn];
    setSelectedCards(newSelected);

    if (newSelected.length >= requiredCards) {
      setTimeout(() => {
        setPhase('done');
        onComplete(newSelected);
      }, 1000);
    }
  }, [phase, deck, selectedCards, flippedIndices, requiredCards, spreadType, onComplete]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* 準備状態 */}
      {phase === 'ready' && (
        <button
          onClick={handleShuffle}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">カードをシャッフルする</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>
      )}

      {/* シャッフル演出 */}
      {phase === 'shuffling' && (
        <div className="flex items-center gap-2 py-8">
          <div className="animate-bounce delay-0">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect x="10" y="4" width="28" height="40" rx="3" stroke="#d4a853" strokeWidth="1.5" fill="rgba(139,92,246,0.15)" /><path d="M24 14l2.5 5 5.5 0.8-4 3.9 0.9 5.3-4.9-2.6-4.9 2.6 0.9-5.3-4-3.9 5.5-0.8z" fill="#d4a853" opacity="0.9" /></svg>
          </div>
          <div className="animate-bounce" style={{ animationDelay: '0.1s' }}>
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect x="10" y="4" width="28" height="40" rx="3" stroke="#d4a853" strokeWidth="1.5" fill="rgba(139,92,246,0.15)" /><path d="M24 14l2.5 5 5.5 0.8-4 3.9 0.9 5.3-4.9-2.6-4.9 2.6 0.9-5.3-4-3.9 5.5-0.8z" fill="#d4a853" opacity="0.9" /></svg>
          </div>
          <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect x="10" y="4" width="28" height="40" rx="3" stroke="#d4a853" strokeWidth="1.5" fill="rgba(139,92,246,0.15)" /><path d="M24 14l2.5 5 5.5 0.8-4 3.9 0.9 5.3-4.9-2.6-4.9 2.6 0.9-5.3-4-3.9 5.5-0.8z" fill="#d4a853" opacity="0.9" /></svg>
          </div>
          <p className="ml-4 text-purple-300 animate-pulse text-lg">
            シャッフル中...
          </p>
        </div>
      )}

      {/* カード選択 */}
      {(phase === 'selecting' || phase === 'done') && (
        <div>
          <p className="text-center text-purple-300 mb-4 text-sm">
            {phase === 'selecting'
              ? `カードを${requiredCards}枚選んでください（残り${requiredCards - selectedCards.length}枚）`
              : 'カードが揃いました！'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {deck.slice(0, DISPLAY_CARD_COUNT).map((card, index) => (
              <TarotCard
                key={card.id}
                card={flippedIndices.has(index) ? card : null}
                orientation={
                  selectedCards.find(sc => sc.card.id === card.id)?.orientation
                }
                isFlipped={flippedIndices.has(index)}
                onClick={() => handleCardSelect(index)}
                disabled={phase === 'done' && !flippedIndices.has(index)}
                size="md"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
