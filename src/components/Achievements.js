import { FiAward, FiDatabase, FiCpu } from 'react-icons/fi';
import { useScrollAnimationGroup } from '../hooks/useScrollAnimation';

export default function Achievements() {
  const [refs, visibleStates] = useScrollAnimationGroup(3);

  const achievements = [
    {
      title: "IPK Cumlaude",
      description: "Menyelesaikan S1 Teknik Informatika dengan IPK 3.54/4.00",
      icon: FiAward,
      iconBg: "bg-gradient-to-br from-yellow-500/10 to-amber-500/10 text-yellow-600 dark:from-yellow-500/20 dark:to-amber-500/20 dark:text-yellow-400",
      glowClass: "hover:shadow-[0_15px_40px_rgba(234,179,8,0.25)] hover:border-yellow-500/50"
    },
    {
      title: "Sertifikasi SQL",
      description: "Lulus sertifikasi Database Design & Programming with SQL dari Kominfo",
      icon: FiDatabase,
      iconBg: "bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:from-blue-500/20 dark:to-indigo-500/20 dark:text-blue-400",
      glowClass: "hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)] hover:border-blue-500/50"
    },
    {
      title: "AI Tools Certification",
      description: "Menyelesaikan pelatihan pengoperasian Tools Generative AI dari BPVP Kendari",
      icon: FiCpu,
      iconBg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 text-purple-600 dark:from-purple-500/20 dark:to-pink-500/20 dark:text-purple-400",
      glowClass: "hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)] hover:border-purple-500/50"
    },
  ];

  return (
    <section id='achievements' className='py-20 lg:py-28 bg-[var(--bg-secondary)] transition-colors'>
      <div className='max-w-5xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 transition-colors'>
            <span className='text-[var(--accent-blue)]'>Pencapaian</span>
          </h2>
          <p className='text-[var(--text-secondary)] text-lg'>Prestasi dan sertifikasi profesional.</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {achievements.map((achievement, idx) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={idx}
                ref={(el) => refs.current[idx] = el}
                className={`card-glass p-8 rounded-2xl transition-all duration-300 card-hover subtle-glow text-center scroll-animate flex flex-col justify-between items-center min-h-[300px] ${
                  achievement.glowClass
                } ${visibleStates[idx] ? 'visible' : ''}`}
              >
                <div className='flex flex-col items-center gap-4 w-full'>
                  {/* Wadah Ikon Gradasi Pastel */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${achievement.iconBg}`}>
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-[var(--text-primary)] mb-2 transition-colors'>{achievement.title}</h3>
                    <p className='text-[var(--text-secondary)] text-sm leading-relaxed transition-colors'>{achievement.description}</p>
                  </div>
                </div>
                
                {/* Verified Badge */}
                <div className='mt-6 w-full flex justify-center'>
                  <span className='inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400 border border-green-500/20'>
                    ✓ Terverifikasi
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
