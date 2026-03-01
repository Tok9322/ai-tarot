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
            <div className="text-4xl group-hover:scale-110 transition-transform">
              🃏
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
            <div className="text-4xl group-hover:scale-110 transition-transform">
              🎴
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
