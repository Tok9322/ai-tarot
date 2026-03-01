import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🔮</span>
          <span className="text-lg font-bold bg-gradient-to-r from-amber-300 to-purple-300 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:to-purple-200 transition-all">
            AI Tarot
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/one-oracle" className="text-purple-400 hover:text-purple-200 transition-colors">
            ワンオラクル
          </Link>
          <Link href="/three-card" className="text-purple-400 hover:text-purple-200 transition-colors">
            3枚引き
          </Link>
        </nav>
      </div>
    </header>
  );
}
