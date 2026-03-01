import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 mt-auto">
      <div className="max-w-2xl mx-auto text-center space-y-3">
        <p className="text-purple-500/60 text-xs">
          ※ この占いはAIによるエンターテイメントです。結果を鵜呑みにせず、参考程度にお楽しみください。
        </p>
        <div className="flex justify-center gap-4 text-xs text-purple-600/60">
          <Link href="/privacy" className="hover:text-purple-400 transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="hover:text-purple-400 transition-colors">
            利用規約
          </Link>
        </div>
        <p className="text-purple-700/40 text-xs">
          &copy; 2026 AI Tarot
        </p>
      </div>
    </footer>
  );
}
