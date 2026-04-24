export default function Services() {
  return (
    <div className="min-h-screen py-section-padding">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-12">
          <h1 className="font-h1 text-h1 text-center text-navy mb-6">Dịch vụ của chúng tôi</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dịch vụ 1 */}
          <div className="bg-white border border-border-light group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/residential-service.jpg" alt="Xây dựng dân dụng" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">DÂN DỤNG</div>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
              <h3 className="font-h3 text-h3 mb-4">Xây dựng Dân dụng</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Chúng tôi cung cấp dịch vụ thi công các công trình dân dụng như nhà ở, chung cư, biệt thự với chất lượng cao và tiến độ đảm bảo.
              </p>
              <ul className="font-body-md text-on-surface-variant list-disc list-inside space-y-2 mb-6">
                <li>Thiết kế và thi công nhà ở</li>
                <li>Xây dựng chung cư cao tầng</li>
                <li>Renovation và cải tạo</li>
                <li>Bảo hành và bảo trì</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 font-label-caps hover:bg-primary-container transition-all uppercase">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Dịch vụ 2 */}
          <div className="bg-white border border-border-light group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/commercial-service.jpg" alt="Xây dựng thương mại" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">THƯƠNG MẠI</div>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>business</span>
              <h3 className="font-h3 text-h3 mb-4">Xây dựng Thương mại</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Phát triển các dự án thương mại quy mô lớn như văn phòng, trung tâm mua sắm, khách sạn với tiêu chuẩn quốc tế.
              </p>
              <ul className="font-body-md text-on-surface-variant list-disc list-inside space-y-2 mb-6">
                <li>Tòa nhà văn phòng</li>
                <li>Trung tâm thương mại</li>
                <li>Khách sạn và resort</li>
                <li>Cơ sở hạ tầng</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 font-label-caps hover:bg-primary-container transition-all uppercase">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Dịch vụ 3 */}
          <div className="bg-white border border-border-light group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/consulting-service.jpg" alt="Tư vấn và thiết kế" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">TƯ VẤN</div>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>design_services</span>
              <h3 className="font-h3 text-h3 mb-4">Tư vấn và Thiết kế</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Dịch vụ tư vấn chuyên nghiệp và thiết kế kiến trúc hiện đại, đáp ứng mọi nhu cầu của khách hàng.
              </p>
              <ul className="font-body-md text-on-surface-variant list-disc list-inside space-y-2 mb-6">
                <li>Thiết kế kiến trúc</li>
                <li>Tư vấn kỹ thuật</li>
                <li>Quản lý dự án</li>
                <li>Giám sát thi công</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 font-label-caps hover:bg-primary-container transition-all uppercase">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Dịch vụ 4 */}
          <div className="bg-white border border-border-light group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/green-service.jpg" alt="Xây dựng xanh" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">XANH</div>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>eco</span>
              <h3 className="font-h3 text-h3 mb-4">Xây dựng Xanh</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Áp dụng công nghệ xây dựng xanh, thân thiện môi trường và tiết kiệm năng lượng.
              </p>
              <ul className="font-body-md text-on-surface-variant list-disc list-inside space-y-2 mb-6">
                <li>Chứng nhận xanh</li>
                <li>Vật liệu thân thiện</li>
                <li>Hệ thống năng lượng tái tạo</li>
                <li>Thiết kế bền vững</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 font-label-caps hover:bg-primary-container transition-all uppercase">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Dịch vụ 5 */}
          <div className="bg-white border border-border-light group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/electrical-service.jpg" alt="Điện nước và cơ điện" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">ĐIỆN NƯỚC</div>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>electrical_services</span>
              <h3 className="font-h3 text-h3 mb-4">Điện nước và Cơ điện</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Lắp đặt và bảo trì hệ thống điện, nước và cơ điện cho các công trình dân dụng và công nghiệp.
              </p>
              <ul className="font-body-md text-on-surface-variant list-disc list-inside space-y-2 mb-6">
                <li>Hệ thống điện</li>
                <li>Hệ thống cấp thoát nước</li>
                <li>Điều hòa và thông gió</li>
                <li>An ninh và phòng cháy</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 font-label-caps hover:bg-primary-container transition-all uppercase">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Dịch vụ 6 */}
          <div className="bg-white border border-border-light group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/project-management.jpg" alt="Quản lý dự án" />
              <div className="absolute top-4 right-4 bg-navy text-white font-label-caps px-3 py-1">QUẢN LÝ</div>
            </div>
            <div className="p-8">
              <span className="material-symbols-outlined text-4xl text-primary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>manage_accounts</span>
              <h3 className="font-h3 text-h3 mb-4">Quản lý Dự án</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Dịch vụ quản lý dự án toàn diện từ khâu lập kế hoạch đến bàn giao công trình.
              </p>
              <ul className="font-body-md text-on-surface-variant list-disc list-inside space-y-2 mb-6">
                <li>Lập kế hoạch dự án</li>
                <li>Phân bổ nguồn lực</li>
                <li>Kiểm soát chất lượng</li>
                <li>Báo cáo tiến độ</li>
              </ul>
              <button className="w-full bg-primary text-white py-3 font-label-caps hover:bg-primary-container transition-all uppercase">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-surface-container p-12 lg:p-20 text-center">
          <h2 className="font-h2 text-h2 text-navy mb-6">Cần hỗ trợ cho dự án của bạn?</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và cung cấp giải pháp phù hợp nhất cho mọi nhu cầu xây dựng của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-primary text-white px-8 py-4 font-label-caps hover:bg-primary-container transition-all uppercase">
              Liên hệ tư vấn
            </a>
            <a href="/about" className="bg-white border-2 border-primary text-primary px-8 py-4 font-label-caps hover:bg-primary hover:text-white transition-all uppercase">
              Về chúng tôi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}