'use client';

import type { ReadingCategory } from '@/types/tarot';

interface CategorySelectorProps {
  selected: ReadingCategory;
  onChange: (category: ReadingCategory) => void;
}

const CATEGORIES: { value: ReadingCategory; label: string; icon: string }[] = [
  { value: 'general', label: '総合運', icon: '✨' },
  { value: 'love', label: '恋愛運', icon: '💕' },
  { value: 'work', label: '仕事運', icon: '💼' },
  { value: 'money', label: '金運', icon: '💰' },
];

export default function CategorySelector({ selected, onChange }: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {CATEGORIES.map(({ value, label, icon }) => (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            selected === value
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30 scale-105'
              : 'bg-white/5 text-purple-300 border border-purple-700/50 hover:bg-purple-900/30 hover:border-purple-500/50'
          }`}
        >
          <span>{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
