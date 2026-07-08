import { FiCode, FiCamera, FiHardDrive } from 'react-icons/fi';
import { useScrollAnimationGroup } from '../hooks/useScrollAnimation';

export default function Experience() {
  const [refs, visibleStates] = useScrollAnimationGroup(3);

  const experiences = [
    {
      title: "Pranata Komputer",
      company: "Balai Pelatihan Vokasi dan Produktivitas Kendari",
      period: "Des 2025 - Jun 2026",
      icon: FiCode,
      description: [
        "Mengembangkan dan membangun sistem website instansi pemerintahan",
        "Mengelola pemeliharaan website dan sistem informasi",
        "Implementasi fitur baru dan integrasi sistem",
        "Digitalisasi dokumen dan pengarsipan berkas administrasi"
      ]
    },
    {
      title: "Marketing Komunikasi",
      company: "Hotel Sahid Azizah Syariah Kendari",
      period: "Nov 2025 - Des 2025",
      icon: FiCamera,
      description: [
        "Merancang konten kreatif untuk promosi digital",
        "Mengelola produksi konten multimedia",
        "Publikasi di berbagai platform media sosial",
        "Video editing dan fotografi produk"
      ]
    },
    {
      title: "IT Support",
      company: "PT Damai Jaya Lestari",
      period: "Jan 2023 - Feb 2023",
      icon: FiHardDrive,
      description: [
        "Pengolahan data menggunakan Microsoft Excel",
        "Troubleshooting perangkat keras dan lunak",
        "Instalasi dan pembaruan software",
        "Dukungan teknis operasional"
      ]
    }
  ];

  return (
    <section id='experience' className='py-20 lg:py-28 bg-[var(--bg-secondary)] transition-colors'>
      <div className='max-w-4xl mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 transition-colors'>
            <span className='text-[var(--accent-blue)]'>Pengalaman</span> Kerja
          </h2>
          <p className='text-[var(--text-secondary)] text-lg'>Riwayat profesional dan kontribusi di bidang IT.</p>
        </div>
        
        <div className='timeline-container'>
          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <div 
                key={idx}
                ref={(el) => refs.current[idx] = el}
                className={`timeline-item scroll-animate ${visibleStates[idx] ? 'visible' : ''}`}
              >
                <div className='timeline-dot'></div>
                
                <div 
                  className={`card-glass p-7 lg:p-8 rounded-xl transition-all duration-300 card-hover subtle-glow w-full`}
                >
                  <div className='flex flex-col md:flex-row md:items-start gap-5 mb-6'>
                    <div className='flex items-start gap-5 flex-1'>
                      <div className='w-12 h-12 icon-neon rounded-lg flex items-center justify-center flex-shrink-0'>
                        <IconComponent size={24} className='text-[var(--accent-blue)]' />
                      </div>
                      <div>
                        <h3 className='text-xl font-bold text-[var(--text-primary)] transition-colors'>{exp.title}</h3>
                        <p className='text-[var(--text-secondary)] font-medium text-sm mt-1 transition-colors'>{exp.company}</p>
                      </div>
                    </div>
                    <div className='md:text-right md:ml-auto pl-[68px] md:pl-0'>
                      <p className='text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-1 transition-colors'>Periode</p>
                      <p className='font-semibold text-[var(--text-primary)] transition-colors whitespace-nowrap'>{exp.period}</p>
                    </div>
                  </div>
                  
                  <ul className='space-y-3 ml-1'>
                    {exp.description.map((desc, i) => (
                      <li key={i} className='flex gap-3 text-[var(--text-secondary)] transition-colors'>
                        <span className='text-[var(--accent-blue)] font-semibold flex-shrink-0 mt-1'>•</span>
                        <span className='text-sm'>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
