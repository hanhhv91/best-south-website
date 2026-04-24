'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen py-section-padding">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-12">
          <h1 className="font-h1 text-h1 text-center text-navy mb-6">Liên hệ với chúng tôi</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form liên hệ */}
          <div className="bg-white p-8 border border-border-light shadow-lg">
            <div className="mb-8">
              <span className="text-primary font-label-caps tracking-widest block mb-4">LIÊN HỆ</span>
              <h2 className="font-h2 text-h2 text-navy mb-6">Gửi tin nhắn</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-label-caps text-outline mb-2">Họ và tên</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-label-caps text-outline mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-label-caps text-outline mb-2">Số điện thoại</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-label-caps text-outline mb-2">Nội dung</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 font-label-caps text-lg hover:bg-primary-container transition-all uppercase"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ */}
          <div className="space-y-8">
            <div className="bg-surface-gray p-8 border border-border-light">
              <h2 className="font-h2 text-h2 text-navy mb-8">Thông tin liên hệ</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary mt-1">location_on</span>
                  <div>
                    <h3 className="font-h3 text-h3 text-navy mb-2">Địa chỉ</h3>
                    <p className="font-body-md text-on-surface-variant">123 Đường ABC, Quận 1, TP.HCM, Việt Nam</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary mt-1">phone</span>
                  <div>
                    <h3 className="font-h3 text-h3 text-navy mb-2">Điện thoại</h3>
                    <p className="font-body-md text-on-surface-variant">(028) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary mt-1">email</span>
                  <div>
                    <h3 className="font-h3 text-h3 text-navy mb-2">Email</h3>
                    <p className="font-body-md text-on-surface-variant">info@bestsouth.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary mt-1">schedule</span>
                  <div>
                    <h3 className="font-h3 text-h3 text-navy mb-2">Giờ làm việc</h3>
                    <p className="font-body-md text-on-surface-variant">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                    <p className="font-body-md text-on-surface-variant">Thứ 7: 8:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-surface-container h-80 border border-border-light flex items-center justify-center shadow-lg">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-primary mb-4">map</span>
                <h3 className="font-h3 text-h3 text-navy mb-2">Bản đồ vị trí</h3>
                <p className="font-body-md text-on-surface-variant">Placeholder - Thay thế bằng Google Maps embed</p>
              </div>
            </div>

            {/* Quick contact */}
            <div className="bg-primary text-white p-8 text-center">
              <h3 className="font-h3 text-h3 mb-4">Cần hỗ trợ khẩn cấp?</h3>
              <p className="font-body-md text-primary-fixed mb-6">Gọi hotline để được tư vấn ngay lập tức</p>
              <a href="tel:+842812345678" className="bg-white text-primary px-8 py-3 font-label-caps hover:bg-primary-fixed hover:text-white transition-all uppercase inline-block">
                Gọi ngay: (028) 1234-5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}