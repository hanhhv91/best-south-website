import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-gray">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(0,52,111,0.35),_transparent_45%),_linear-gradient(180deg,_rgba(0,52,111,0.85),_rgba(0,52,111,0.65))]">
        <img
          src="/hero-construction.jpg"
          alt="Industrial production facility"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <div className="max-w-3xl text-white">
            <span className="font-label-caps tracking-[0.32em] text-primary-fixed-dim mb-4 inline-block">ISO 9001:2015 CERTIFIED</span>
            <h1 className="font-h1 text-h1 mb-6">Engineering-Grade Adhesives for Global Industrial Standards</h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mb-10">
              Precision-formulated polymer solutions for construction, automotive, and assembly. Tested for extreme durability and mechanical stability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 font-semibold uppercase tracking-[0.16em] hover:bg-primary-container transition-colors"
              >
                View Technical Solutions
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-white/30 bg-white/10 px-8 py-4 font-semibold uppercase tracking-[0.16em] hover:bg-white/20 transition-colors"
              >
                SDS Database
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="font-h2 text-h2 text-navy">Core Product Categories</h2>
              <div className="mt-4 h-1 w-20 bg-primary"></div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-border-light bg-white shadow-sm">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/adhesives-category.jpg"
                  alt="Industrial Adhesives"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-navy px-4 py-2 text-xs uppercase tracking-[0.16em] text-white">
                  POLY-S SERIES
                </div>
              </div>
              <div className="px-8 py-10">
                <h3 className="font-h3 text-h3 mb-4">Industrial Adhesives</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  High-performance bonding agents designed for structural integrity in high-stress environments.
                </p>
                <div className="grid gap-3 border-t border-border-light pt-6 text-sm text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Tensile Strength</span>
                    <span>45 MPa</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cure Time</span>
                    <span>15–30 Minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Temperature Resistance</span>
                    <span>-40°C to 180°C</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-primary">
                  <span>Specification Sheet</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border-light bg-white shadow-sm">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/resins-category.jpg"
                  alt="Advanced Resins"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-navy px-4 py-2 text-xs uppercase tracking-[0.16em] text-white">
                  RESIN-X GRADE
                </div>
              </div>
              <div className="px-8 py-10">
                <h3 className="font-h3 text-h3 mb-4">Advanced Resins</h3>
                <p className="font-body-md text-on-surface-variant mb-6">
                  Specialized polymer resins for casting, coating, and composite reinforcement.
                </p>
                <div className="grid gap-3 border-t border-border-light pt-6 text-sm text-on-surface-variant">
                  <div className="flex justify-between">
                    <span>Viscosity</span>
                    <span>500–12,000 mPa·s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chemical Resistance</span>
                    <span>ASTM D543 Level 5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shore Hardness</span>
                    <span>85D (Post-Cure)</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-primary">
                  <span>Technical TDS</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-primary font-label-caps tracking-[0.32em] uppercase">CAPABILITIES</span>
            <h2 className="font-h2 text-h2 mt-4 mb-6">High-Volume Production &amp; R&D Excellence</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mb-10">
              Our state-of-the-art facility spans 45,000 sq. meters, housing high-precision reactors and automated packaging lines to ensure consistent quality at scale.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl bg-surface-gray p-6">
                <div className="text-4xl font-bold text-navy">25k+</div>
                <div className="font-label-caps text-on-surface-variant uppercase mt-2">TONS ANNUAL CAPACITY</div>
              </div>
              <div className="rounded-xl bg-surface-gray p-6">
                <div className="text-4xl font-bold text-navy">12</div>
                <div className="font-label-caps text-on-surface-variant uppercase mt-2">GLOBAL R&D LABS</div>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center justify-center rounded-none border border-primary bg-primary text-white px-8 py-4 font-semibold uppercase tracking-[0.16em] hover:bg-primary-container transition-colors"
            >
              Explore Our Facility
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl bg-navy p-6 shadow-xl">
            <img src="/factory-floor.jpg" alt="High-volume production facility" className="w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-h2 text-h2 mb-4">Uncompromising Quality Compliance</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-14">
            Every batch undergoes a 14-point technical validation process in our ISO-certified laboratories before shipment.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl border border-border-light bg-white p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <p className="mt-4 font-label-caps uppercase">ISO 9001:2015</p>
            </div>
            <div className="rounded-xl border border-border-light bg-white p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
              <p className="mt-4 font-label-caps uppercase">ASTM TESTED</p>
            </div>
            <div className="rounded-xl border border-border-light bg-white p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              <p className="mt-4 font-label-caps uppercase">REACH COMPLIANT</p>
            </div>
            <div className="rounded-xl border border-border-light bg-white p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              <p className="mt-4 font-label-caps uppercase">UL CERTIFIED</p>
            </div>
            <div className="rounded-xl border border-border-light bg-white p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
              <p className="mt-4 font-label-caps uppercase">IATA LOGISTICS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
            <div>
              <span className="text-primary font-label-caps tracking-[0.32em] uppercase">SECTORS</span>
              <h2 className="font-h2 text-h2 mt-4">Global Industries Served</h2>
            </div>
            <div className="max-w-lg text-primary-fixed-dim">
              Tailored chemical formulations for the world's most demanding engineering projects.
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-[#00234d] p-8 border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">directions_car</span>
              <h3 className="font-h3 text-h3 mb-4">Automotive</h3>
              <p className="font-body-md text-primary-fixed-dim opacity-80">Lightweight bonding for structural chassis components and interior assembly.</p>
            </div>
            <div className="rounded-xl bg-[#00234d] p-8 border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">business</span>
              <h3 className="font-h3 text-h3 mb-4">Construction</h3>
              <p className="font-body-md text-primary-fixed-dim opacity-80">Weather-resistant resins for high-rise glass bonding and infrastructure reinforcement.</p>
            </div>
            <div className="rounded-xl bg-[#00234d] p-8 border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">precision_manufacturing</span>
              <h3 className="font-h3 text-h3 mb-4">Assembly</h3>
              <p className="font-body-md text-primary-fixed-dim opacity-80">High-speed automated adhesive application for electronics and consumer goods.</p>
            </div>
            <div className="rounded-xl bg-[#00234d] p-8 border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">rocket_launch</span>
              <h3 className="font-h3 text-h3 mb-4">Aerospace</h3>
              <p className="font-body-md text-primary-fixed-dim opacity-80">Specialized polymers capable of maintaining bond strength in extreme environments.</p>
            </div>
            <div className="rounded-xl bg-[#00234d] p-8 border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">bolt</span>
              <h3 className="font-h3 text-h3 mb-4">Energy</h3>
              <p className="font-body-md text-primary-fixed-dim opacity-80">Composite resins for wind turbine blades and electrical insulation.</p>
            </div>
            <div className="rounded-xl bg-[#00234d] p-8 border border-white/10">
              <span className="material-symbols-outlined text-4xl mb-6">medical_services</span>
              <h3 className="font-h3 text-h3 mb-4">Medical</h3>
              <p className="font-body-md text-primary-fixed-dim opacity-80">Bio-compatible bonding agents for medical device manufacturing and surgical tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr,_0.9fr] items-center rounded-xl border border-border-light bg-surface-container p-8 lg:p-12">
            <div>
              <h2 className="font-h2 text-h2 text-navy mb-6">Partner with Best South for Superior Polymer Performance</h2>
              <p className="font-body-lg text-on-surface-variant mb-8">Consult with our engineering team to develop custom adhesive formulations tailored to your specific manufacturing requirements.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 font-semibold uppercase tracking-[0.16em] hover:bg-primary-container transition-colors"
                >
                  Request Technical Quotation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 font-semibold uppercase tracking-[0.16em] hover:bg-primary hover:text-white transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-navy p-8 text-white">
              <span className="text-primary font-label-caps tracking-[0.3em] uppercase">CAPABILITIES</span>
              <h3 className="font-h3 text-h3 mt-5 mb-4">High-Volume Production &amp; R&D Excellence</h3>
              <p className="font-body-md text-primary-fixed-dim mb-8">Our state-of-the-art facility spans 45,000 sq. meters, housing high-precision reactors and automated packaging lines to ensure consistent quality at scale.</p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                  <div className="text-4xl font-bold">25k+</div>
                  <div className="font-label-caps text-primary-fixed-dim uppercase mt-2">TONS ANNUAL CAPACITY</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                  <div className="text-4xl font-bold">12</div>
                  <div className="font-label-caps text-primary-fixed-dim uppercase mt-2">GLOBAL R&D LABS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
