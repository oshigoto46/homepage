"use client";

export default function ForBrands() {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* 左側: タイトルと説明 */}
        <div>
          <p className="text-gray-500 mb-2">Solution /</p>
          <h1 className="text-4xl font-bold mb-4">For BRANDS</h1>
          <p className="text-lg text-gray-600">
            生産・マーケティング・EC構築・物流・海外展開までを一気通貫で支援します。
            ブランドビジネスにおけるバリューチェーンのデジタル化を実現します。
          </p>
        </div>

        {/* 右側: ソリューションリンクグリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="#dx"
            className="flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg font-medium">DX推進</span>
            <span>↓</span>
          </a>
          <a
            href="#production"
            className="flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg font-medium">生産・商品企画</span>
            <span>↓</span>
          </a>
          <a
            href="#ec"
            className="flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg font-medium">EC構築・運用</span>
            <span>↓</span>
          </a>
          <a
            href="#logistics"
            className="flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg font-medium">オンライン流通</span>
            <span>↓</span>
          </a>
          <a
            href="#influencer"
            className="flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg font-medium">インフルエンサーマーケティング</span>
            <span>↓</span>
          </a>
          <a
            href="#marketing"
            className="flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg font-medium">デジタルマーケティング</span>
            <span>↓</span>
          </a>
          <a
            href="#cross-border"
            className="flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg font-medium">越境物流</span>
            <span>↓</span>
          </a>
          <a
            href="#overseas"
            className="flex justify-between items-center px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            <span className="text-lg font-medium">海外展開</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}