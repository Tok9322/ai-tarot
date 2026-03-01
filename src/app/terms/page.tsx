import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約',
};

export default function TermsPage() {
  return (
    <div className="prose prose-invert prose-purple max-w-none py-8">
      <h1 className="text-2xl font-bold text-amber-300">利用規約</h1>

      <div className="space-y-6 text-purple-200/80 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-purple-200">1. サービスの性質</h2>
          <p>
            当サービス「AI タロット占い」は、AI（人工知能）を活用したエンターテイメントサービスです。
            占い結果は娯楽を目的として提供されるものであり、医療、法律、金融等の専門的なアドバイスに代わるものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">2. 免責事項</h2>
          <p>
            当サービスの占い結果に基づいて行われたいかなる行動についても、当サービスは責任を負いません。
            重要な判断を行う際は、必ず専門家にご相談ください。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">3. AI生成コンテンツについて</h2>
          <p>
            占い結果はAIによって自動的に生成されます。生成される内容は毎回異なり、
            正確性や再現性を保証するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">4. 利用料金</h2>
          <p>
            当サービスの基本機能は無料でご利用いただけます。
            将来的に有料サービスを提供する場合は、事前に明示いたします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">5. 禁止事項</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>当サービスの不正利用やAPIへの過度なアクセス</li>
            <li>当サービスのコンテンツの無断転載や商用利用</li>
            <li>その他、当サービスの運営を妨害する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">6. サービスの変更・終了</h2>
          <p>
            当サービスは、予告なくサービス内容の変更や終了を行う場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-purple-200">7. 規約の変更</h2>
          <p>
            本規約は、法令の変更やサービス内容の変更に伴い、予告なく変更される場合があります。
          </p>
        </section>

        <p className="text-purple-500/60 text-xs mt-8">
          制定日: 2026年3月1日
        </p>
      </div>
    </div>
  );
}
