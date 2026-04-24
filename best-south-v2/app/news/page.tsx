export default function News() {
  return (
    <div className="min-h-screen py-section-padding">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-12">
          <h1 className="font-h1 text-h1 text-center text-navy mb-6">Tin tức và sự kiện</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bài viết 1 */}
          <div className="bg-white border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/news1.jpg" alt="Dự án mới hoàn thành" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">DỰ ÁN</div>
            </div>
            <div className="p-6">
              <div className="font-label-caps text-primary mb-2">15 THÁNG 4, 2024</div>
              <h3 className="font-h3 text-h3 text-navy mb-3">Dự án tòa nhà văn phòng cao cấp hoàn thành</h3>
              <p className="font-body-md text-on-surface-variant mb-4">
                Best South vừa chính thức hoàn thành dự án tòa nhà văn phòng 25 tầng tại trung tâm thành phố Hồ Chí Minh.
              </p>
              <button className="text-primary font-label-caps flex items-center gap-2 hover:gap-4 transition-all uppercase">
                Đọc thêm <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Bài viết 2 */}
          <div className="bg-white border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/news2.jpg" alt="Công nghệ xanh" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">CÔNG NGHỆ</div>
            </div>
            <div className="p-6">
              <div className="font-label-caps text-primary mb-2">10 THÁNG 4, 2024</div>
              <h3 className="font-h3 text-h3 text-navy mb-3">Áp dụng công nghệ xây dựng xanh</h3>
              <p className="font-body-md text-on-surface-variant mb-4">
                Best South tiên phong áp dụng các công nghệ xây dựng xanh, tiết kiệm năng lượng và thân thiện môi trường.
              </p>
              <button className="text-primary font-label-caps flex items-center gap-2 hover:gap-4 transition-all uppercase">
                Đọc thêm <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Bài viết 3 */}
          <div className="bg-white border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/news3.jpg" alt="Giải thưởng" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">GIẢI THƯỞNG</div>
            </div>
            <div className="p-6">
              <div className="font-label-caps text-primary mb-2">5 THÁNG 4, 2024</div>
              <h3 className="font-h3 text-h3 text-navy mb-3">Nhận giải thưởng công ty xây dựng xuất sắc</h3>
              <p className="font-body-md text-on-surface-variant mb-4">
                Best South vinh dự nhận giải thưởng "Công ty xây dựng xuất sắc năm 2024" từ Bộ Xây dựng.
              </p>
              <button className="text-primary font-label-caps flex items-center gap-2 hover:gap-4 transition-all uppercase">
                Đọc thêm <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Bài viết 4 */}
          <div className="bg-white border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/news4.jpg" alt="Đối tác mới" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">ĐỐI TÁC</div>
            </div>
            <div className="p-6">
              <div className="font-label-caps text-primary mb-2">28 THÁNG 3, 2024</div>
              <h3 className="font-h3 text-h3 text-navy mb-3">Ký kết hợp tác với đối tác quốc tế</h3>
              <p className="font-body-md text-on-surface-variant mb-4">
                Best South ký kết thỏa thuận hợp tác chiến lược với tập đoàn xây dựng hàng đầu châu Âu.
              </p>
              <button className="text-primary font-label-caps flex items-center gap-2 hover:gap-4 transition-all uppercase">
                Đọc thêm <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Bài viết 5 */}
          <div className="bg-white border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/news5.jpg" alt="Đào tạo" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">ĐÀO TẠO</div>
            </div>
            <div className="p-6">
              <div className="font-label-caps text-primary mb-2">20 THÁNG 3, 2024</div>
              <h3 className="font-h3 text-h3 text-navy mb-3">Chương trình đào tạo kỹ năng cho nhân viên</h3>
              <p className="font-body-md text-on-surface-variant mb-4">
                Khởi động chương trình đào tạo nâng cao kỹ năng chuyên môn cho hơn 500 nhân viên kỹ thuật.
              </p>
              <button className="text-primary font-label-caps flex items-center gap-2 hover:gap-4 transition-all uppercase">
                Đọc thêm <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Bài viết 6 */}
          <div className="bg-white border border-border-light overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/news6.jpg" alt="CSR" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">CSR</div>
            </div>
            <div className="p-6">
              <div className="font-label-caps text-primary mb-2">15 THÁNG 3, 2024</div>
              <h3 className="font-h3 text-h3 text-navy mb-3">Hoạt động trách nhiệm xã hội</h3>
              <p className="font-body-md text-on-surface-variant mb-4">
                Best South tham gia xây dựng trường học và cơ sở hạ tầng cho các vùng khó khăn.
              </p>
              <button className="text-primary font-label-caps flex items-center gap-2 hover:gap-4 transition-all uppercase">
                Đọc thêm <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 bg-surface-container p-12 lg:p-20 text-center">
          <h2 className="font-h2 text-h2 text-navy mb-6">Theo dõi tin tức mới nhất</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Đăng ký nhận bản tin để cập nhật các dự án, công nghệ và tin tức mới nhất từ Best South.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary text-white px-8 py-3 font-label-caps hover:bg-primary-container transition-all uppercase whitespace-nowrap">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}