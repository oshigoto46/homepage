"use client";

import { useState } from "react";

export default function Home() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* ヘッダー */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <div className="text-lg font-bold">AnyMind</div>
        <nav className="relative">
          <ul className="flex space-x-6">
            <li
              className="relative group"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="hover:text-blue-500">Solutions</button>
              {/* ドロップダウンメニュー */}
              {isSolutionsOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    ブランド向けソリューション
                    <span className="float-right">→</span>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    パブリッシャー向けソリューション
                    <span className="float-right">→</span>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    クリエイター向けソリューション
                    <span className="float-right">→</span>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Resources
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hover:text-blue-500">日本語</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">お問い合わせ</button>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">MAKE EVERY BUSINESS BORDERLESS</h1>
        <p className="text-lg text-gray-600 mb-8">あらゆるビジネスをデジタル化する</p>
        <div className="flex justify-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
