import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import couplePhoto from './assets/chucho.png'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const weddingDate = new Date('2026-02-28T12:30:00')
    const timer = setInterval(() => {
      const now = new Date()
      const diff = weddingDate - now
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-ivory)]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a
            href="#inicio"
            className="font-title text-2xl text-[var(--color-charcoal)]"
          >
            D & P
          </a>
          <div className="hidden md:flex items-center gap-10">
            {['Inicio', 'Celebración', 'Lugar', 'Alojamiento'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.2em] text-[var(--color-taupe)] hover:text-[var(--color-terracotta)] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="inicio"
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Photo */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <img
              src={couplePhoto}
              alt="David y Patricia"
              className="w-64 md:w-72 mx-auto"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[var(--color-taupe)] text-xs uppercase tracking-[0.4em] mb-4">
              Nos casamos
            </p>
            <h1 className="font-title text-5xl md:text-7xl lg:text-8xl text-[var(--color-charcoal)]">
              David & Patricia
            </h1>
          </motion.div>

          {/* Date */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-[var(--color-charcoal-light)] font-light tracking-wide">
              28 de febrero de 2026
            </p>
            <p className="mt-2 text-[var(--color-taupe)] text-sm tracking-widest uppercase">
              Málaga
            </p>
          </motion.div>

          {/* Countdown */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-center items-center gap-6 md:gap-10">
              {[
                { value: timeLeft.days, label: 'días' },
                { value: timeLeft.hours, label: 'horas' },
                { value: timeLeft.minutes, label: 'min' },
                { value: timeLeft.seconds, label: 'seg' },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <motion.div
                    className="text-center"
                    key={`${item.label}-${item.value}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <span className="font-title text-4xl md:text-5xl text-[var(--color-terracotta)]">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[var(--color-taupe)]">
                      {item.label}
                    </p>
                  </motion.div>
                  {i < 3 && (
                    <span className="font-title text-2xl md:text-3xl text-[var(--color-taupe)]/40 mx-2 md:mx-4">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Celebration / Details */}
      <section id="celebración" className="py-24 px-6 bg-[var(--color-cream)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src="/2.webp"
                alt="Ilustración banquete"
                className="w-full max-w-md mx-auto"
                onError={(e) => {
                  e.target.src = '/svg/table.svg'
                  e.target.onError = () => {
                    e.target.src = '/table-illustration.avif'
                  }
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="text-[var(--color-terracotta)] text-xs uppercase tracking-[0.4em] mb-4">
                La Celebración
              </p>
              <h2 className="font-title text-4xl md:text-5xl text-[var(--color-charcoal)] mb-8">
                Detalles del día
              </h2>

              <div className="space-y-8">
                <div>
                  <p className="text-lg font-medium text-[var(--color-charcoal)] mb-2">
                    Ceremonia y Banquete
                  </p>
                  <p className="text-[var(--color-taupe)]">
                    Todo el evento tendrá lugar en la finca.
                    <br />
                    Os citamos a las{' '}
                    <span className="text-[var(--color-terracotta)] font-medium">
                      12:30h
                    </span>
                  </p>
                  <p className="text-sm text-[var(--color-taupe)]/70 mt-1">
                    (Hora exacta en la invitación)
                  </p>
                </div>

                <div>
                  <p className="text-lg font-medium text-[var(--color-charcoal)] mb-2">
                    Dress Code
                  </p>
                  <p className="text-[var(--color-taupe)]">
                    Elegante pero cómodo
                    <br />
                    ¡Preparaos para bailar!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="lugar" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="text-[var(--color-terracotta)] text-xs uppercase tracking-[0.4em] mb-4">
                Ubicación
              </p>
              <h2 className="font-title text-4xl md:text-5xl text-[var(--color-charcoal)] mb-8">
                La Finca
              </h2>

              <p className="text-[var(--color-taupe)] mb-8 leading-relaxed">
                La ceremonia, el cóctel y el banquete serán en el mismo lugar
                para vuestra comodidad.
              </p>

              <a
                href="https://maps.app.goo.gl/oWzhrRkqyAhqSDCBA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[var(--color-charcoal)] border-b-2 border-[var(--color-terracotta)] pb-1 hover:text-[var(--color-terracotta)] transition-colors"
              >
                <span className="text-sm uppercase tracking-widest">
                  Cómo llegar
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Transport */}
              <div className="mt-12 pt-8 border-t border-[var(--color-sand)]">
                <p className="text-lg font-medium text-[var(--color-charcoal)] mb-2">
                  🚌 Bus de la boda
                </p>
                <p className="text-[var(--color-taupe)] text-sm">
                  Habrá autobús desde el Hotel Rinconsol.
                  <br />
                  Horarios en la invitación.
                </p>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src="/4.webp"
                alt="Ilustración lugar"
                className="w-full max-w-md mx-auto"
                onError={(e) => {
                  e.target.src = '/svg/location.svg'
                  e.target.onError = () => {
                    e.target.src = '/table.avif'
                  }
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section id="alojamiento" className="py-24 px-6 bg-[var(--color-cream)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src="11.webp"
                alt="Ilustración hotel"
                className="w-full max-w-sm mx-auto"
                onError={(e) => {
                  e.target.src = '/door.avif'
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="text-[var(--color-terracotta)] text-xs uppercase tracking-[0.4em] mb-4">
                Alojamiento
              </p>
              <h2 className="font-title text-4xl md:text-5xl text-[var(--color-charcoal)] mb-6">
                Hotel Rinconsol
              </h2>
              <p className="text-[var(--color-taupe)] mb-10">
                Hemos reservado 15 habitaciones con descuento especial. El bus
                de la boda pasará por el hotel.
              </p>

              {/* Code */}
              <div className="mb-10">
                <p className="text-[var(--color-taupe)]/60 text-xs uppercase tracking-widest mb-3">
                  Código de descuento
                </p>
                <div className="inline-block border border-[var(--color-sand)] px-6 py-3 rounded">
                  <code className="font-title text-2xl md:text-3xl text-[var(--color-terracotta)]">
                    DAVIDYPATRI
                  </code>
                </div>
              </div>

              {/* Info */}
              <div className="grid grid-cols-2 gap-6 text-sm mb-10">
                <div>
                  <p className="text-[var(--color-taupe)]/60 text-xs uppercase tracking-wider mb-2">
                    Importante
                  </p>
                  <ul className="text-[var(--color-taupe)] space-y-1">
                    <li>· Solo en web del hotel</li>
                    <li>· Cancelación gratuita</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[var(--color-taupe)]/60 text-xs uppercase tracking-wider mb-2">
                    Fechas
                  </p>
                  <ul className="text-[var(--color-taupe)] space-y-1">
                    <li>· Estancias 23-28 Feb</li>
                    <li>· Código hasta 2 Ene</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://www.hotelrinconsol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[var(--color-charcoal)] border-b-2 border-[var(--color-terracotta)] pb-1 hover:text-[var(--color-terracotta)] transition-colors"
              >
                <span className="text-sm uppercase tracking-widest">
                  Reservar
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final message */}
      <section className="py-24 px-6 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.img
            src="/ring.avif"
            alt=""
            className="w-32 md:w-40 mx-auto mb-8 opacity-80"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.8, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onError={(e) => {
              e.target.src = '/svg/ring.svg'
              e.target.onError = () => {
                e.target.src = '/ring.avif'
              }
            }}
          />
          <h2 className="font-title text-3xl md:text-4xl text-[var(--color-charcoal)] mb-6">
            Os esperamos
          </h2>
          <p className="text-[var(--color-taupe)] mb-8">
            para compartir este día tan especial
          </p>
          <p className="font-title text-2xl text-[var(--color-terracotta)]">
            David & Patricia
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[var(--color-ivory)] border-t border-[var(--color-sand)]">
        <p className="text-xs text-[var(--color-taupe)] tracking-widest">
          28 · 02 · 2026
        </p>
      </footer>
    </div>
  )
}

export default App
