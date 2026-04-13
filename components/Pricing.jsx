import { Check } from "lucide-react";

const F_SANS = "var(--font-sans), Open Sans, sans-serif";
const GOLD = "var(--color-gold)";
const PRIMARY = "var(--color-primary)";

const units = [
  {
    type: "Luxe 2 BHK",
    size: "1250 Sq.ft.",
    price: "₹ 1.57 Cr* Onwards",
    oldPrice: null,
    btnText: "Enquire Now",
    features: [
      "Area: 1250 Sq.ft.",
      "Offers: On Request",
      "Gated Community Living",
    ],
    isPopular: false,
  },
  {
    type: "Premium 3 BHK",
    size: "1650 Sq.ft.",
    price: "₹ On Request",
    oldPrice: null,
    btnText: "Enquire Now",
    features: [
      "Area: 1650 Sq.ft.",
      "Offers: On Request",
      "Premium Finishes",
    ],
    isPopular: true,
  },
  {
    type: "Luxe 4 BHK",
    size: "2000 Sq.ft.",
    price: "₹ On Request",
    oldPrice: null,
    btnText: "Enquire Now",
    features: [
      "Area: 2000 Sq.ft.",
      "Offers: On Request",
      "Exclusive Residences",
    ],
    isPopular: false,
  },
];

const Pricing = ({ setIsOpen }) => {
  return (
    <section
      id="pricing"
      className="py-10 sm:py-14 px-4 md:px-8 relative overflow-hidden"
      style={{ background: "var(--color-bg-muted)" }}
    >
      {/* Decorative background element */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
          filter: "blur(40px)"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-gold-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)',
            fontFamily: 'var(--font-jost), Montserrat, sans-serif',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-gold-light)', marginBottom: '10px',
          }}>
            PREMIUM RESIDENCES
          </span>
          <h2
            className="mb-4"
            style={{ fontFamily: 'var(--font-jost), Montserrat, sans-serif', color: '#111827', fontSize: '26px', fontWeight: '800', letterSpacing: '-0.01em' }}
          >
            Configuration &amp; <span style={{ color: 'var(--color-gold)' }}>Price</span>
          </h2>

          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px', margin: '8px auto 12px' }} />

          {/* <p
            className="max-w-2xl mx-auto text-gray-500"
            style={{ fontFamily: F_SANS, fontSize: '14px' }}
          >
            Forest living residences crafted for discerning homebuyers on Dwarka Expressway — Gurugram&apos;s most coveted address.
          </p> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {units.map((unit, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className={`group pricing-card relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-500 ${unit.isPopular ? "lg:scale-105 z-20" : "z-10"}`}
              style={{ borderColor: GOLD }}
            >
              {/* Popular Badge */}
              {unit.isPopular && (
                <div
                  className="absolute top-4 right-6 px-3 py-1 rounded-full text-white text-[9px] font-bold tracking-widest uppercase z-30"
                  style={{ background: GOLD }}
                >
                  Most Preferred
                </div>
              )}

              {/* Card Header */}
              <div className="relative p-7 pb-4 border-b border-gray-50 pt-12">
                <div
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${PRIMARY} 0%, transparent 100%)` }}
                />
                <h3
                  className="text-xl font-bold mb-1 relative z-10"
                  style={{ fontFamily: F_SANS, color: PRIMARY, letterSpacing: "0.02em" }}
                >
                  {unit.type}
                </h3>
                {unit.subtitle && (
                  <p className="text-[15px] text-gray-500 relative z-10 mb-2 leading-tight" style={{ fontFamily: F_SANS }}>
                    {unit.subtitle}
                  </p>
                )}
                {!unit.subtitle && (
                  <div className="flex items-center gap-2 relative z-10">
                    <span className="text-gray-400 text-[11px] uppercase tracking-wider" style={{ fontFamily: F_SANS }}>Size:</span>
                    <p className="text-sm font-semibold" style={{ fontFamily: F_SANS, color: PRIMARY }}>
                      {unit.size}
                    </p>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-7 pt-6">
                <div className="mb-6">
                  <span className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-medium block mb-1" style={{ fontFamily: F_SANS }}>Starting At</span>
                  <div className="flex items-center gap-2 sm:gap-3 flex-nowrap whitespace-nowrap">
                    {unit.oldPrice && (
                      <span className="text-sm sm:text-lg line-through font-medium opacity-60" style={{ fontFamily: F_SANS, color: GOLD }}>
                        {unit.oldPrice}
                      </span>
                    )}
                    <p className="text-lg sm:text-2xl font-bold" style={{ fontFamily: F_SANS, color: GOLD }}>
                      {unit.price}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {unit.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-amber-50">
                        <Check size={12} strokeWidth={3} style={{ color: GOLD }} />
                      </div>
                      <span className="text-gray-700 font-medium text-[14px]" style={{ fontFamily: F_SANS }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="btn-gold w-full py-3 text-sm tracking-widest uppercase transition-all duration-300"
                  style={{ borderRadius: "1rem" }}
                >
                  {unit.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        {/* <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-400 text-sm italic" style={{ fontFamily: F_SANS }}>
            * Government taxes & other charges extra as applicable. Prices subject to change without notice.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
