'use client';

import { useState } from 'react';
import { getTwitterShareUrl, getLineShareUrl, copyToClipboard } from '@/lib/share';

interface ShareButtonsProps {
  summary: string;
  url: string;
}

export default function ShareButtons({ summary, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareText = `${summary}\nAIタロット占いで占ってみよう`;

  const handleCopy = async () => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      <a
        href={getTwitterShareUrl(shareText, url)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-black/50 border border-gray-700 rounded-full text-sm text-white hover:bg-gray-800 transition-colors"
      >
        <span>𝕏</span>
        <span>でシェア</span>
      </a>

      <a
        href={getLineShareUrl(shareText, url)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-[#06C755]/20 border border-[#06C755]/50 rounded-full text-sm text-[#06C755] hover:bg-[#06C755]/30 transition-colors"
      >
        <span>LINE</span>
        <span>でシェア</span>
      </a>

      <button
        onClick={handleCopy}
        className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-purple-700/50 rounded-full text-sm text-purple-300 hover:bg-purple-900/30 transition-colors"
      >
        <span>{copied ? '✓' : '🔗'}</span>
        <span>{copied ? 'コピーしました' : 'URLをコピー'}</span>
      </button>
    </div>
  );
}
