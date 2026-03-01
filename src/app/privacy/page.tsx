import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <div className="prose prose-invert prose-purple max-w-none py-8">
      <h1 className="text-2xl font-bold text-amber-300">プライバシーポリシー</h1>

      <div className="space-y-6 text-purple-200/80 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-purple-200">1. 個人情報の取得について</h2>
          <p>
            当サービス「AI タロット占い」は、ユーザーの個人情報（氏名、メールアドレス、生年月日、住所等）を一切取得しません。
            占いの利用にあたり、個人情報の入力は不要です。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">2. Cookie・ローカルストレージについて</h2>
          <p>
            当サービスは、Cookie およびブラウザのローカルストレージを使用しません。
            ユーザーの行動履歴や占い結果をブラウザに保存することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">3. アクセス解析について</h2>
          <p>
            当サービスでは、サービス改善のためにアクセス解析ツールを導入する場合があります。
            その際は、個人を特定しない形で統計的なデータを収集します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">4. 第三者への提供</h2>
          <p>
            当サービスは、ユーザーに関する情報を第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">5. AI による占い結果について</h2>
          <p>
            占い結果はAI（人工知能）によって生成されます。占い結果は入力に基づく自動生成であり、
            当サービスが結果の内容をサーバーに記録・保存することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">6. ポリシーの変更</h2>
          <p>
            本ポリシーの内容は、法令の変更やサービス内容の変更に伴い、予告なく変更される場合があります。
          </p>
        </section>

        <p className="text-purple-500/60 text-xs mt-8">
          制定日: 2026年3月1日
        </p>
      </div>
    </div>
  );
}
