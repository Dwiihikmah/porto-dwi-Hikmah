import { FiCalendar, FiDatabase, FiCpu } from 'react-icons/fi';
import { useScrollAnimationGroup } from '../hooks/useScrollAnimation';

export default function Training() {
  const [refs, visibleStates] = useScrollAnimationGroup(2);

  const trainings = [
    {
      title: "Database Design & Programming with SQL",
      issuer: "Fresh Graduate Academy (Kominfo)",
      date: "Jul 2022 - Agu 2022",
      description: "Pelatihan intensif tentang desain database dan pemrograman SQL",
      icon: FiDatabase,
      iconClass: "bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-500/50"
    },
    {
      title: "Pengoperasian Tools Generative AI untuk Konten Digital dan Bisnis",
      issuer: "Project Based Learning (BPVP Kendari)",
      date: "Okt 2025",
      description: "Pelatihan penggunaan AI tools untuk pembuatan konten digital dan bisnis",
      icon: FiCpu,
      iconClass: "bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:border-purple-500/50"
    },
  ];

  return (
    <section id='training' className='py-20 lg:py-28 bg-[var(--bg-primary)] transition-colors'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 transition-colors'>
            <span className='text-[var(--accent-blue)]'>Pelatihan</span>
          </h2>
          <p className='text-[var(--text-secondary)] text-lg'>Sertifikasi profesional dan pengembangan keterampilan.</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {trainings.map((training, idx) => {
            const IconComponent = training.icon;
            return (
              <div 
                key={idx}
                ref={(el) => refs.current[idx] = el}
                className={`card-glass p-7 lg:p-8 rounded-2xl transition-all duration-300 card-hover subtle-glow scroll-animate flex flex-col justify-between ${
                  training.glowClass
                } ${visibleStates[idx] ? 'visible' : ''}`}
              >
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${training.iconClass}`}>
                      <IconComponent size={24} />
                    </div>
                    <span className='px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-[var(--accent-blue)] border border-blue-500/10'>
                      {training.issuer.includes("Kominfo") ? "Kominfo" : "BPVP Kendari"}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className='text-xl font-bold text-[var(--text-primary)] mb-2 transition-colors line-clamp-2'>{training.title}</h3>
                    <p className='text-sm text-[var(--text-tertiary)] font-medium mb-3 transition-colors'>{training.issuer}</p>
                    <p className='text-[var(--text-secondary)] text-sm leading-relaxed transition-colors'>{training.description}</p>
                  </div>
                </div>

                <div className='flex items-center gap-2 text-[var(--accent-blue)] font-semibold text-xs mt-6 pt-4 border-t border-[var(--border-color)]/25 transition-colors'>
                  <FiCalendar size={14} />
                  <span>{training.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
