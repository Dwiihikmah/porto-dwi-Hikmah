import { FiCalendar, FiMapPin, FiAward, FiBook } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const [containerRef, isVisible] = useScrollAnimation();

  const achievements = [
    "Lulus dengan predikat Cumlaude (IPK 3.54)",
    "Menyelesaikan tugas akhir / skripsi terkait sistem informasi digital"
  ];

  const courses = [
    "Web Development", "Database Design", "System Analysis", "UI/UX", "Data Structures"
  ];

  return (
    <section id='education' className='relative py-20 lg:py-24 bg-[var(--bg-primary)] transition-colors overflow-hidden'>
      {/* Subtle Blurry Gradient Blob */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 dark:from-cyan-500/10 dark:to-purple-500/10 rounded-full blur-3xl pointer-events-none z-0'></div>

      <div className='relative max-w-4xl mx-auto px-6 z-10'>
        {/* Megah & Modern Section Header */}
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'visible' : ''}`} style={{ animationDelay: isVisible ? '0s' : 'unset' }}>
          <span className='inline-block px-3 py-1 rounded-full text-xs font-extrabold text-[var(--accent-blue)] bg-[var(--accent-blue)]/10 tracking-widest uppercase mb-3'>
            MY JOURNEY
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-3 transition-colors'>
            Riwayat <span className='text-[var(--accent-blue)]'>Pendidikan</span>
          </h2>
          <p className='text-[var(--text-secondary)] text-sm max-w-md mx-auto'>
            Jejak akademis dan fokus studi formal yang telah saya tempuh.
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className={`card-glass p-8 lg:p-10 rounded-2xl border transition-all duration-300 card-hover subtle-glow scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          {/* Header Section */}
          <div className='flex flex-col sm:flex-row items-start gap-6 mb-8'>
            <div className='w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg'>
              <i className='fa-solid fa-graduation-cap text-white text-2xl'></i>
            </div>
            
            <div className='flex-grow'>
              <h3 className='text-xl font-bold text-[var(--text-primary)] transition-colors'>Sarjana Teknik (S.T)</h3>
              <p className='text-[var(--accent-blue)] font-semibold text-lg transition-colors'>Teknik Informatika</p>
              <p className='text-[var(--text-secondary)] transition-colors mt-1'>Universitas Halu Oleo</p>
            </div>

            {/* IPK Box */}
            <div className='bg-[var(--bg-secondary)] border border-[var(--border-color)] px-6 py-4 rounded-xl text-center transition-colors'>
              <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-1'>IPK</p>
              <div className='text-3xl font-bold gradient-text-primary'>3.54</div>
              <p className='text-[var(--text-tertiary)] text-xs'>/ 4.00</p>
            </div>
          </div>

          {/* Meta Info */}
          <div className='flex flex-wrap gap-6 mb-8 text-[var(--text-secondary)] text-sm transition-colors'>
            <div className='flex items-center gap-2'>
              <FiCalendar className='text-[var(--accent-blue)]' />
              <span>2020 - 2025</span>
            </div>
            <div className='flex items-center gap-2'>
              <FiMapPin className='text-[var(--accent-blue)]' />
              <span>Kendari, Sulawesi Tenggara</span>
            </div>
          </div>

          <hr className='border-[var(--border-color)]/50 mb-8' />

          {/* Details Section */}
          <div className='grid md:grid-cols-2 gap-10'>
            <div>
              <h4 className='text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2 transition-colors'>
                <FiAward className='text-[var(--accent-blue)]' /> Pencapaian
              </h4>
              <ul className='space-y-3'>
                {achievements.map((item, i) => (
                  <li key={i} className='flex gap-3 text-[var(--text-secondary)] text-sm transition-colors'>
                    <span className='text-[var(--accent-blue)] mt-1'>●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className='text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2 transition-colors'>
                <FiBook className='text-[var(--accent-blue)]' /> Mata Kuliah Relevan
              </h4>
              <div className='flex flex-wrap gap-2'>
                {courses.map((course, i) => (
                  <span key={i} className='px-3 py-1 bg-[var(--bg-secondary)] text-[var(--text-primary)] text-xs font-medium rounded-full border border-[var(--border-color)] transition-colors'>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
