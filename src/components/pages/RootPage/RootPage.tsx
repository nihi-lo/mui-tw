const RootPage: React.FC = () => {
  return (
    <div className="bg-content1 text-foreground rounded-md px-8 py-4 shadow-md">
      <div className="flex gap-2 pb-4">
        <div className="size-6 rounded-full bg-amber-300"></div>
        最終更新日 2025/3/18 2:29
      </div>
      <div>
        <h2 className="border-divider border-b pb-1 text-2xl font-semibold">概要</h2>
        <p className="my-4">
          エンジニアであれば誰もが、無料で利用できるサーバを求めていると思います。 この記事では、
          <code className="rounded-md bg-zinc-500/40 px-1.5 py-0.5">tempura create</code>
          を使用して24GB RAM + 4CPU +{" "}
          <code className="rounded-md bg-zinc-500/40 px-1.5 py-0.5">200GBストレージ</code>
          のUbuntuサーバを手にいれる方法を詳しく解説していきます。
        </p>
        <p className="my-4">
          無料で利用できるパブリッククラウドとしてAWS,
          GCPも存在しますが、どちらも無料枠は1年間限定で、期限が切れると有料プランに移行してしまいます。しかしOCIについては期限の制限なしに無料枠を提供してくれています。
        </p>
        <h2 className="border-divider my-4 mt-16 border-b pb-1 text-2xl font-semibold">
          ドメインモデリングの難しさ
        </h2>
        <p className="mt-4">
          最後の方に来てしまいましたが、このDDDのプロセスの一番最初であるドメインエキスパートとのドメインモデリングが本当に難しいのです。サービスがToDoアプリなどのシンプルなCRUD操作で完結するレベルのものであれば大丈夫でしょうが、そうは問屋がおろさないのが世の常です。ドメインモデリングで登場した概念をユビキタス言語として統一し、ブラッシュアップしてドメインオブジェクトに落とし込んでいきます。またユースケース分析もこのドメインモデリングで登場した単語を中心にして記述していくので、まさにドメインモデリングこそDDDのプロセスの中で最も心血注ぐべき作業であると言っても過言ではありません。しかし、最初から完璧なドメインモデリングを行うことは難しいです。なぜでしょうか？その答えのひとつが松岡さんの質問箱にあります。
        </p>
      </div>
    </div>
  );
};

export { RootPage };
