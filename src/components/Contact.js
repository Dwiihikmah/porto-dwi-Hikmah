import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [containerRef, isVisible] = useScrollAnimation();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aksi kirim formulir fungsional di sini (opsional)
    console.log(formState);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id='contact' className='py-20 lg:py-28 bg-[var(--bg-primary)] transition-colors' ref={containerRef}>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
          
          {/* Kolom Kiri: Info Hubungi Saya */}
          <div className={`lg:col-span-5 space-y-8 scroll-animate ${isVisible ? 'visible' : ''}`}>
            <div>
              <h2 className='text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 transition-colors'>
                Mari <span className='text-[var(--accent-blue)]'>Berkolaborasi</span>
              </h2>
              <p className='text-[var(--text-secondary)] text-lg leading-relaxed transition-colors'>
                Mulai proyek baru Anda atau diskusikan peluang kerja sama bersama saya. Saya selalu terbuka untuk ide-ide baru yang berdampak.
              </p>
            </div>

            <div className='space-y-6'>
              <a href='tel:081343067916' className='flex items-center gap-4 p-4 rounded-xl card-glass card-hover transition-all duration-300'>
                <div className='w-12 h-12 rounded-lg bg-rose-500/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400 flex items-center justify-center flex-shrink-0'>
                  <FiPhone size={22} />
                </div>
                <div>
                  <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide transition-colors'>Telepon</p>
                  <p className='font-semibold text-[var(--text-primary)] text-sm sm:text-base transition-colors'>0813-4306-7916</p>
                </div>
              </a>

              <a href='mailto:dwihikmahrmdni@gmail.com' className='flex items-center gap-4 p-4 rounded-xl card-glass card-hover transition-all duration-300'>
                <div className='w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400 flex items-center justify-center flex-shrink-0'>
                  <FiMail size={22} />
                </div>
                <div>
                  <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide transition-colors'>Email</p>
                  <p className='font-semibold text-[var(--text-primary)] text-sm sm:text-base transition-colors break-all'>dwihikmahrmdni@gmail.com</p>
                </div>
              </a>

              <div className='flex items-center gap-4 p-4 rounded-xl card-glass transition-all duration-300'>
                <div className='w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 flex items-center justify-center flex-shrink-0'>
                  <FiMapPin size={22} />
                </div>
                <div>
                  <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide transition-colors'>Lokasi</p>
                  <p className='font-semibold text-[var(--text-primary)] text-sm sm:text-base transition-colors'>Kendari, Sulawesi Tenggara</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak Interaktif */}
          <div className={`lg:col-span-7 scroll-animate stagger-1 ${isVisible ? 'visible' : ''}`}>
            <form onSubmit={handleSubmit} className='card-glass p-8 lg:p-10 rounded-2xl space-y-6 shadow-xl'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-[var(--text-primary)] transition-colors'>Nama Lengkap</label>
                  <input 
                    type='text' 
                    name='name'
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder='Nama Anda'
                    className='w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all duration-300 placeholder-[var(--text-tertiary)] text-sm'
                  />
                </div>
                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-[var(--text-primary)] transition-colors'>Alamat Email</label>
                  <input 
                    type='email' 
                    name='email'
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder='email@domain.com'
                    className='w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all duration-300 placeholder-[var(--text-tertiary)] text-sm'
                  />
                </div>
              </div>
              
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-[var(--text-primary)] transition-colors'>Subjek</label>
                <input 
                  type='text' 
                  name='subject'
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder='Judul pesan'
                  className='w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all duration-300 placeholder-[var(--text-tertiary)] text-sm'
                />
              </div>

              <div className='space-y-2'>
                <label className='text-sm font-semibold text-[var(--text-primary)] transition-colors'>Pesan Anda</label>
                <textarea 
                  name='message'
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows='5'
                  placeholder='Tulis pesan Anda di sini...'
                  className='w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] focus:ring-2 focus:ring-[var(--accent-blue)]/20 transition-all duration-300 placeholder-[var(--text-tertiary)] text-sm resize-none'
                ></textarea>
              </div>

              <button 
                type='submit' 
                className='contact-submit-btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg'
              >
                Kirim Pesan
                <FiSend size={18} className='submit-icon transition-transform duration-300' />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
