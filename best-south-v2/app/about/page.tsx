export default function About() {
  return (
    <div className="min-h-screen py-section-padding">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-12">
          <h1 className="font-h1 text-h1 text-center text-navy mb-6">Giới thiệu về Best South</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-16 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10"></div>
          <img className="relative z-10 w-full h-96 object-cover shadow-xl" src="/company-overview.jpg" alt="Tổng quan công ty Best South" />
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-navy/20 translate-x-4 translate-y-4"></div>
        </div>

        {/* Lịch sử công ty */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-label-caps tracking-widest block mb-4">LỊCH SỬ</span>
              <h2 className="font-h2 text-h2 text-navy mb-6">Hành trình Phát triển 15 Năm</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Thành lập từ năm 2009, Best South đã trải qua hơn 15 năm phát triển không ngừng. Chúng tôi bắt đầu với một đội ngũ nhỏ nhưng đầy nhiệt huyết, và dần trở thành một trong những công ty xây dựng hàng đầu tại Việt Nam.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Qua các năm, chúng tôi đã hoàn thành hàng trăm dự án lớn nhỏ, từ nhà ở dân dụng đến các tòa nhà thương mại cao cấp, góp phần vào sự phát triển đô thị của đất nước.
              </p>
            </div>
            <div className="relative">
              <img className="w-full h-auto shadow-xl" src="/company-history.jpg" alt="Lịch sử phát triển" />
            </div>
          </div>
        </section>

        {/* Sứ mệnh và tầm nhìn */}
        <section className="mb-16 bg-surface-gray py-section-padding -mx-8 px-8">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-navy mb-4">Sứ mệnh & Tầm nhìn</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>target</span>
                <h3 className="font-h3 text-h3 text-navy mb-4">Sứ mệnh</h3>
                <p className="font-body-md text-on-surface-variant">
                  Mang đến các giải pháp xây dựng chất lượng cao, bền vững và đáp ứng tối đa nhu cầu của khách hàng. Chúng tôi cam kết xây dựng không chỉ công trình mà còn xây dựng niềm tin và tương lai bền vững.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
                <h3 className="font-h3 text-h3 text-navy mb-4">Tầm nhìn</h3>
                <p className="font-body-md text-on-surface-variant">
                  Trở thành công ty xây dựng hàng đầu khu vực Đông Nam Á, dẫn dắt xu hướng phát triển bền vững và ứng dụng công nghệ tiên tiến trong ngành xây dựng.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thống kê */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-h2 font-h2 text-navy mb-2">1000+</div>
              <div className="font-label-caps text-outline">DỰ ÁN HOÀN THÀNH</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-h2 text-navy mb-2">15</div>
              <div className="font-label-caps text-outline">NĂM KINH NGHIỆM</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-h2 text-navy mb-2">500+</div>
              <div className="font-label-caps text-outline">NHÂN VIÊN</div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-h2 text-navy mb-2">50+</div>
              <div className="font-label-caps text-outline">GIẢI THƯỞNG</div>
            </div>
          </div>
        </section>

        {/* Đội ngũ lãnh đạo */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-h2 text-h2 text-navy mb-4">Đội ngũ Lãnh đạo</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-surface-container rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary">person</span>
              </div>
              <h3 className="font-h3 text-h3 text-navy mb-2">Nguyễn Văn A</h3>
              <p className="font-label-caps text-primary mb-4">TỔNG GIÁM ĐỐC</p>
              <p className="font-body-md text-on-surface-variant">Với hơn 20 năm kinh nghiệm trong ngành xây dựng, ông Nguyễn Văn A dẫn dắt Best South đạt được nhiều thành tựu quan trọng.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-surface-container rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary">person</span>
              </div>
              <h3 className="font-h3 text-h3 text-navy mb-2">Trần Thị B</h3>
              <p className="font-label-caps text-primary mb-4">PHÓ TỔNG GIÁM ĐỐC</p>
              <p className="font-body-md text-on-surface-variant">Chị Trần Thị B chuyên về quản lý dự án và đảm bảo chất lượng công trình, góp phần quan trọng vào sự thành công của công ty.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 bg-surface-container rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary">person</span>
              </div>
              <h3 className="font-h3 text-h3 text-navy mb-2">Lê Văn C</h3>
              <p className="font-label-caps text-primary mb-4">GIÁM ĐỐC KỸ THUẬT</p>
              <p className="font-body-md text-on-surface-variant">Ông Lê Văn C là chuyên gia hàng đầu về công nghệ xây dựng, luôn cập nhật và áp dụng các phương pháp tiên tiến nhất.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}