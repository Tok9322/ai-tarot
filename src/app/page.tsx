import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-10 py-8">
      {/* ヒーロー */}
      <div className="text-center space-y-4">
        <div className="text-6xl">🔮</div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-300 via-purple-300 to-amber-300 bg-clip-text text-transparent">
          AI タロット占い
        </h1>
        <p className="text-purple-300/80 text-sm max-w-md mx-auto leading-relaxed">
          AIがあなたのためにタロットカードをリーディングします。
          <br />
          心を落ち着けて、カードに問いかけてみましょう。
        </p>
      </div>

      {/* スプレッド選択 */}
      <div className="w-full max-w-md space-y-4">
        <h2 className="text-center text-purple-400 text-sm font-medium">
          占い方を選んでください
        </h2>

        <Link
          href="/one-oracle"
          className="group block w-full p-6 bg-white/5 border border-purple-700/40 rounded-2xl hover:bg-purple-900/20 hover:border-purple-500/50 transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="group-hover:scale-110 transition-transform">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* カード本体 */}
                <rect x="10" y="4" width="28" height="40" rx="3" stroke="#d4a853" strokeWidth="1.5" fill="rgba(139,92,246,0.15)" />
                <rect x="13" y="7" width="22" height="34" rx="1.5" stroke="#a78bfa" strokeWidth="0.7" fill="none" />
                {/* 中央の星 */}
                <path d="M24 14l2.5 5 5.5 0.8-4 3.9 0.9 5.3-4.9-2.6-4.9 2.6 0.9-5.3-4-3.9 5.5-0.8z" fill="#d4a853" opacity="0.9" />
                {/* 下部の装飾 */}
                <circle cx="24" cy="34" r="2" stroke="#a78bfa" strokeWidth="0.7" fill="none" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300">ワンオラクル</h3>
              <p className="text-purple-400/70 text-sm mt-1">
                1枚のカードからメッセージを受け取ります
              </p>
              <span className="inline-block mt-2 text-xs text-green-400/80 bg-green-400/10 px-2 py-0.5 rounded-full">
                無料
              </span>
            </div>
          </div>
        </Link>

        <Link
          href="/three-card"
          className="group block w-full p-6 bg-white/5 border border-purple-700/40 rounded-2xl hover:bg-purple-900/20 hover:border-purple-500/50 transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="group-hover:scale-110 transition-transform">
              <svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 左のカード */}
                <g transform="rotate(-15, 20, 28)">
                  <rect x="8" y="6" width="22" height="32" rx="2.5" stroke="#a78bfa" strokeWidth="1.2" fill="rgba(139,92,246,0.12)" />
                  <path d="M19 16l1.5 3 3.3 0.5-2.4 2.3 0.6 3.2-3-1.6-3 1.6 0.6-3.2-2.4-2.3 3.3-0.5z" fill="#a78bfa" opacity="0.7" />
                </g>
                {/* 中央のカード（前面） */}
                <g>
                  <rect x="17" y="4" width="22" height="32" rx="2.5" stroke="#d4a853" strokeWidth="1.5" fill="rgba(139,92,246,0.2)" />
                  <path d="M28 13l1.8 3.6 4 0.6-2.9 2.8 0.7 3.8-3.6-1.9-3.6 1.9 0.7-3.8-2.9-2.8 4-0.6z" fill="#d4a853" opacity="0.9" />
                </g>
                {/* 右のカード */}
                <g transform="rotate(15, 36, 28)">
                  <rect x="26" y="6" width="22" height="32" rx="2.5" stroke="#a78bfa" strokeWidth="1.2" fill="rgba(139,92,246,0.12)" />
                  <path d="M37 16l1.5 3 3.3 0.5-2.4 2.3 0.6 3.2-3-1.6-3 1.6 0.6-3.2-2.4-2.3 3.3-0.5z" fill="#a78bfa" opacity="0.7" />
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-300">3枚引き</h3>
              <p className="text-purple-400/70 text-sm mt-1">
                過去・現在・未来の流れを読み解きます
              </p>
              <span className="inline-block mt-2 text-xs text-green-400/80 bg-green-400/10 px-2 py-0.5 rounded-full">
                無料
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* 安心表示 */}
      <div className="text-center space-y-2 max-w-sm">
        <div className="flex justify-center gap-6 text-xs text-purple-500/60">
          <span>🔒 個人情報不要</span>
          <span>⚡ 即座に結果表示</span>
          <span>🆓 完全無料</span>
        </div>
      </div>
    </div>
  );
}
