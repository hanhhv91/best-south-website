"use client";

import Link from 'next/link';
import { useState } from 'react';

const languageOptions = [
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
];

export default function Header() {
  const [language, setLanguage] = useState('vi');

  return (
    <header className="bg-white border-b border-border-light sticky top-0 z-50 shadow-sm">
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 h-20">
        <div className="flex items-center gap-6">
          <div className="text-lg font-black tracking-tighter text-slate-gray uppercase">Best South Co., Ltd.</div>
          <div className="hidden lg:flex items-center gap-6 text-sm uppercase tracking-[0.18em] font-semibold">
            <Link href="/" className="text-navy border-b-2 border-primary pb-1">Products</Link>
            <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Industrials</Link>
            <Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors duration-200">R&amp;D</Link>
            <Link href="/news" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Certifications</Link>
            <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Technical Support</Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4 min-w-[240px]">
          <div className="relative hidden xl:block w-[280px]">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
            <input
              className="w-full rounded-none border border-border-light bg-surface-container px-10 py-3 text-xs font-label-caps uppercase text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="SEARCH CATALOG"
              type="text"
            />
          </div>

          <div className="hidden lg:flex items-center gap-2 rounded-md border border-border-light bg-surface-container px-3 py-2 text-sm font-semibold">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLanguage(option.code)}
                className={`transition-colors ${language === option.code ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}>
                {option.label}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] hover:bg-primary-container transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
