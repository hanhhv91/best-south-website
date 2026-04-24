import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-gray border-t-2 border-border-light">
      <div className="max-w-[1280px] mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-xs">
          <div className="text-lg font-bold text-slate-gray uppercase mb-4">Best South Co., Ltd.</div>
          <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
            © 2024 Best South Co., Ltd. Chuyên nghiệp trong xây dựng và phát triển bền vững. Phân phối toàn cầu và xuất sắc kỹ thuật trong lĩnh vực xây dựng.
          </p>
          <div className="flex gap-4">
            <a className="text-outline hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
            <a className="text-outline hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-outline hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-navy">TÀI NGUYÊN</span>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">Dịch vụ</Link>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">Dự án</Link>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">Chứng nhận</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-navy">HOẠT ĐỘNG</span>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">Tuyển dụng</Link>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">Chính sách</Link>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors underline underline-offset-4 text-primary" href="/contact">Hỗ trợ</Link>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <span className="font-label-caps text-navy">TRỤ SỞ CHÍNH</span>
            <address className="not-italic font-body-md text-on-surface-variant leading-loose">
              123 Đường ABC, Quận 1<br/>
              TP.HCM, Việt Nam
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}