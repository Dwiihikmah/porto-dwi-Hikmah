import { FiArrowRight, FiMail, FiPhone, FiBriefcase, FiDownload } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const [containerRef, isVisible] = useScrollAnimation();

  return (
    <section ref={containerRef} className='relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] pt-16 transition-colors'>
      {/* Decorative Blur Blobs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none z-0'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/5 rounded-full filter blur-3xl opacity-30 animate-pulse'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-500/5 rounded-full filter blur-3xl opacity-30 animate-pulse' style={{ animationDelay: '3s' }}></div>
      </div>

      <div className='relative max-w-6xl mx-auto px-6 z-10 py-6 w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
          
          {/* Kolom Kiri: Teks & Tombol (Left Aligned) */}
          <div className={`lg:col-span-7 space-y-5 text-center lg:text-left scroll-animate ${isVisible ? 'visible' : ''}`}>
            <span className='inline-block text-sm font-extrabold text-[var(--accent-blue)] tracking-wider uppercase mb-1'>
              👋 Halo, Saya
            </span>
            
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[var(--text-primary)] transition-colors'>
              Dwi Hikmah <br />
              <span className='gradient-text-primary block sm:inline-block'>Ramadhani</span>
            </h1>

            <p className='text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed transition-colors max-w-xl mx-auto lg:mx-0'>
              Pranata Komputer & Profesional IT yang berfokus pada pengembangan sistem dan solusi digital untuk bisnis modern.
            </p>

            {/* Tombol CTA */}
            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2'>
              <a href='#contact' className='bg-[var(--accent-blue)] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[var(--accent-blue-dark)] transition-all duration-300 inline-flex items-center justify-center gap-2 btn-glow text-base subtle-glow'>
                Hubungi Saya
                <FiArrowRight size={18} />
              </a>
              <a href='#projects' className='border border-[var(--border-color)] text-[var(--text-primary)] px-8 py-3 rounded-xl font-semibold hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all duration-300 inline-flex items-center justify-center gap-2 text-base card-hover subtle-glow bg-transparent'>
                Lihat Proyek
                <FiBriefcase size={18} />
              </a>
            </div>

            {/* Social Icons & Download */}
            <div className='flex justify-center lg:justify-start gap-4 pt-3'>
              <a href='mailto:dwihikmahrmdni@gmail.com' className='w-12 h-12 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--card-hover)] transition-all duration-300 card-hover subtle-glow border border-[var(--border-color)]/20'>
                <FiMail size={20} />
              </a>
              <a href='tel:081343067916' className='w-12 h-12 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--card-hover)] transition-all duration-300 card-hover subtle-glow border border-[var(--border-color)]/20'>
                <FiPhone size={20} />
              </a>
              <a 
                href='/cv/CV Dwi Hikmah Ramadhani.pdf' 
                download='CV Dwi Hikmah Ramadhani.pdf'
                className='w-12 h-12 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--card-hover)] transition-all duration-300 card-hover subtle-glow border border-[var(--border-color)]/20'
                title='Unduh CV'
              >
                <FiDownload size={20} />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Profil Futuristik & Interaktif */}
          <div className={`lg:col-span-5 flex justify-center items-center scroll-animate stagger-1 ${isVisible ? 'visible' : ''}`}>
            <div className='relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center'>
              
              {/* Glowing Blob (Efek Cahaya 3D) */}
              <div className='absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/30 dark:to-purple-500/30 rounded-full blur-3xl animate-pulse pointer-events-none'></div>
              
              {/* Wadah Foto Profil Melengkung Kustom */}
              <div className='profile-image-container relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden border border-blue-500/30 shadow-2xl flex items-center justify-center z-10'>
                <img 
                  src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000' 
                  alt='Dwi Hikmah Ramadhani' 
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
