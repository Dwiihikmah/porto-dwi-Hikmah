import { FiMapPin, FiPhone, FiMail, FiAward } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [containerRef, isVisible] = useScrollAnimation();
  
  return (
    <section id='about' className='py-24 lg:py-32 bg-[var(--bg-primary)] transition-colors'>
      <div className='max-w-6xl mx-auto px-6' ref={containerRef}>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
          
          {/* Sisi Kiri: Bio Narasi */}
          <div className={`lg:col-span-5 space-y-6 scroll-animate ${isVisible ? 'visible' : ''}`}>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-1.5 h-10 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full'></div>
              <h2 className='text-4xl lg:text-5xl font-bold text-[var(--text-primary)] transition-colors'>
                Tentang Saya
              </h2>
            </div>
            <div className='space-y-6 text-[var(--text-secondary)] text-base leading-[1.8] text-justify md:text-left'>
              <p className='transition-colors'>
                Lulusan S1 Teknik Informatika dengan pengalaman praktis dalam pengolahan data, pengelolaan informasi, dan implementasi berbagai sistem digital.
              </p>
              <p className='transition-colors'>
                Memiliki pemahaman mendalam tentang basis data, sistem informasi, dan teknologi jaringan. Terbiasa melakukan dokumentasi, manajemen data, dan penyusunan laporan teknis.
              </p>
              <p className='transition-colors'>
                Saya dikenal karena perhatian terhadap detail, kemampuan komunikasi yang baik, dan kecepatan dalam belajar hal-hal baru. Selalu siap beradaptasi dengan lingkungan kerja yang dinamis.
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Asymmetric Bento Grid */}
          <div className='lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full'>
            
            {/* Card 1: Pendidikan (Span 2 Kolom) */}
            <div className={`col-span-1 sm:col-span-2 card-glass p-6 rounded-2xl transition-all duration-300 card-hover subtle-glow scroll-animate stagger-1 flex items-center gap-5 hover:shadow-lg ${
              isVisible ? 'visible' : ''
            }`}>
              <div className='w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400'>
                <FiAward size={28} />
              </div>
              <div>
                <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-1 transition-colors'>
                  Pendidikan
                </p>
                <p className='text-lg font-bold text-[var(--text-primary)] transition-colors'>
                  S1 Teknik Informatika
                </p>
              </div>
            </div>

            {/* Card 2: Email (Span 2 Kolom) */}
            <a 
              href='mailto:dwihikmahrmdni@gmail.com' 
              className={`col-span-1 sm:col-span-2 card-glass p-6 rounded-2xl transition-all duration-300 card-hover subtle-glow scroll-animate stagger-2 flex items-center gap-5 hover:shadow-lg ${
                isVisible ? 'visible' : ''
              }`}
            >
              <div className='w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400'>
                <FiMail size={28} />
              </div>
              <div className='min-w-0 flex-1'>
                <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-1 transition-colors'>
                  Email
                </p>
                <p className='text-sm sm:text-base md:text-lg font-bold text-[var(--text-primary)] transition-colors truncate block'>
                  dwihikmahrmdni@gmail.com
                </p>
              </div>
            </a>

            {/* Card 3: Lokasi (1 Kolom) */}
            <div className={`col-span-1 card-glass p-6 rounded-2xl transition-all duration-300 card-hover subtle-glow scroll-animate stagger-3 flex flex-col justify-between min-h-[140px] hover:shadow-lg ${
              isVisible ? 'visible' : ''
            }`}>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400'>
                <FiMapPin size={24} />
              </div>
              <div className='mt-4'>
                <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-1 transition-colors'>
                  Lokasi
                </p>
                <p className='text-base font-bold text-[var(--text-primary)] transition-colors'>
                  Kendari, Sultra
                </p>
              </div>
            </div>

            {/* Card 4: Telepon (1 Kolom) */}
            <a 
              href='tel:081343067916' 
              className={`col-span-1 card-glass p-6 rounded-2xl transition-all duration-300 card-hover subtle-glow scroll-animate stagger-4 flex flex-col justify-between min-h-[140px] hover:shadow-lg ${
                isVisible ? 'visible' : ''
              }`}
            >
              <div className='w-12 h-12 rounded-xl flex items-center justify-center bg-rose-500/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400'>
                <FiPhone size={24} />
              </div>
              <div className='mt-4'>
                <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-1 transition-colors'>
                  Telepon
                </p>
                <p className='text-base font-bold text-[var(--text-primary)] transition-colors'>
                  0813-4306-7916
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
