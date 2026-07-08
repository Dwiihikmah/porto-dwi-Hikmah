import { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { useScrollAnimationGroup } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [refs, visibleStates] = useScrollAnimationGroup(7);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Sistem Inventaris Gudang",
      description: "SoGud adalah sistem informasi manajemen gudang berbasis web yang digunakan untuk mengelola data inventaris, transaksi bahan masuk dan keluar, stok kejuruan, serta verifikasi transaksi melalui dashboard yang interaktif dan mudah digunakan.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "AdminLTE", "Chart.js"],
      category: "Web App",
      image: "/images/Sistem Inventaris Gudang.jpeg",
      github: "#",
      demo: "#"
    },
    {
      title: "Sistem E-Cuti",
      description: "E-Cuti merupakan sistem informasi pengajuan cuti pegawai berbasis web yang memudahkan pengelolaan data pegawai, proses pengajuan dan persetujuan cuti, serta pemantauan statistik cuti melalui dashboard interaktif.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "AdminLTE", "Chart.js"],
      category: "Web App",
      image: "/images/Sistem E-Cuti.jpeg",
      github: "#",
      demo: "#"
    },
    {
      title: "Sistem Tata Kelola Perjalanan Dinas",
      description: "SITANGKAS adalah aplikasi berbasis web yang dikembangkan untuk mengelola administrasi perjalanan dinas pegawai secara terintegrasi. Sistem ini memudahkan pengelolaan data pegawai, pencatatan perjalanan dinas, serta penyajian statistik perjalanan.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "AdminLTE", "JavaScript", "Chart.js"],
      category: "Web App",
      image: "/images/Sistem Tata Kelola Perjalanan Dinas.jpeg",
      github: "#",
      demo: "#"
    },
    {
      title: "Sistem Kenaikan Gaji Berkala",
      description: "SmartKGB adalah aplikasi berbasis web yang dirancang untuk membantu pengelolaan administrasi Kenaikan Gaji Berkala (KGB) pegawai secara digital. Menyediakan riwayat kenaikan gaji dan notifikasi otomatis.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "AdminLTE", "JavaScript"],
      category: "Web App",
      image: "/images/Sistem Kenaikan Gaji Berkala.jpeg",
      github: "#",
      demo: "#"
    },
    {
      title: "Sistem Prediksi Persediaan Stok Obat",
      description: "PharmaTrack adalah aplikasi berbasis web untuk mengelola data obat sekaligus memprediksi kebutuhan stok di periode mendatang menggunakan algoritma Holt-Winters Exponential Smoothing.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "AdminLTE", "JavaScript", "Chart.js"],
      category: "Web App",
      image: "/images/Sistem Prediksi Persediaan Stok Obat.jpeg",
      github: "#",
      demo: "#"
    },
    {
      title: "Layanan Administrasi Kepegawaian",
      description: "Sistem Administrasi Digital Kepegawaian berbasis Google Apps Script untuk pengajuan online dengan multi-step form terintegrasi Google Sheets guna pencatatan transparan.",
      technologies: ["Google Apps Script", "HTML", "CSS", "JavaScript", "Google Sheets"],
      category: "Web App",
      image: "/images/Layanan Administrasi Kepegawaian.jpeg",
      github: "#",
      demo: "#"
    },
    {
      title: "Sistem Surat Keluar Digital",
      description: "Aplikasi berbasis Google Apps Script untuk pengelolaan administrasi surat keluar elektronik dengan penomoran surat otomatis terintegrasi Google Sheets.",
      technologies: ["Google Apps Script", "HTML", "CSS", "JavaScript", "Google Sheets"],
      category: "Web App",
      image: "/images/Sistem Surat Keluar Digital.jpeg",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id='projects' className='py-20 lg:py-28 bg-[var(--bg-secondary)] transition-colors'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 transition-colors'>
            <span className='text-[var(--accent-blue)]'>Proyek</span>
          </h2>
          <p className='text-[var(--text-secondary)] text-lg'>Kumpulan proyek yang telah saya kembangkan.</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {projects.map((project, idx) => (
            <div 
              key={idx}
              ref={(el) => refs.current[idx] = el}
              onClick={() => setSelectedProject(project)}
              className={`project-card card-glass rounded-2xl overflow-hidden transition-all duration-300 card-hover subtle-glow scroll-animate flex flex-col cursor-pointer ${
                visibleStates[idx] ? 'visible' : ''
              }`}
            >
              {/* Wadah Gambar */}
              <div className='relative aspect-video w-full overflow-hidden bg-white dark:bg-[#1a1f35]'>
                {/* Badge Overlay */}
                <span className='absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 shadow-md'>
                  {project.category}
                </span>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='project-image w-full h-full object-contain object-top transition-transform duration-500 ease-in-out'
                />
              </div>
              
              {/* Bagian Bawah Card (Konten & Teks) */}
              <div className='px-7 pb-7 pt-4 space-y-4 flex flex-col justify-between flex-1 min-h-[280px]'>
                <div className='space-y-2'>
                  <h3 className='text-xl font-bold text-[var(--text-primary)] transition-colors line-clamp-2 mt-0'>{project.title}</h3>
                  <p className='text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 transition-colors'>{project.description}</p>
                  
                  <div className='flex flex-wrap gap-2 pt-2'>
                    {project.technologies.map((tech, i) => (
                      <span key={i} className='tech-pill text-xs px-2.5 py-1 rounded-md font-medium border transition-colors'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Links */}
                <div className='flex items-center gap-4 pt-4 border-t border-[var(--border-color)]/20 mt-4' onClick={(e) => e.stopPropagation()}>
                  <a 
                    href={project.github} 
                    className='flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors font-semibold'
                  >
                    <FiGithub size={16} /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    className='flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-colors font-semibold'
                  >
                    <FiExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Project Detail Popup Modal */}
      {selectedProject && (
        <div 
          className='fixed inset-0 w-screen h-screen z-[999999] flex items-center justify-center bg-black/65 backdrop-blur-[10px] p-4 animate-fade-in'
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className='bg-white dark:bg-[#0a0e27] border border-[var(--border-color)]/20 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative animate-scale-up flex flex-col max-h-[90vh]'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button 
              onClick={() => setSelectedProject(null)}
              className='absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90'
            >
              <FiX size={20} />
            </button>

            <div className='overflow-y-auto w-full'>
              {/* Gambar Proyek */}
              <div className='relative aspect-video w-full bg-white dark:bg-[#1a1f35] border-b border-[var(--border-color)]/10'>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className='w-full h-full object-contain object-top'
                />
              </div>

              {/* Konten */}
              <div className='p-6 sm:p-8 space-y-5'>
                <div>
                  <span className='inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 shadow-sm mb-3'>
                    {selectedProject.category}
                  </span>
                  <h3 className='text-2xl sm:text-3xl font-bold text-[var(--text-primary)] transition-colors'>{selectedProject.title}</h3>
                </div>

                <p className='text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed transition-colors whitespace-pre-line'>
                  {selectedProject.description}
                </p>

                {/* Tech Tags */}
                <div className='space-y-2'>
                  <p className='text-xs text-[var(--text-tertiary)] font-bold uppercase tracking-wider'>Teknologi yang digunakan</p>
                  <div className='flex flex-wrap gap-2'>
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className='tech-pill text-xs px-3 py-1.5 rounded-lg font-medium border transition-colors'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol Aksi */}
                <div className='flex items-center gap-4 pt-6 border-t border-[var(--border-color)]/25'>
                  <a 
                    href={selectedProject.github} 
                    className='flex-1 sm:flex-none bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] px-6 py-3 rounded-xl font-semibold hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm card-hover'
                  >
                    <FiGithub size={18} /> View Code
                  </a>
                  <a 
                    href={selectedProject.demo} 
                    className='flex-1 sm:flex-none bg-[var(--accent-blue)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--accent-blue-dark)] transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm btn-glow'
                  >
                    <FiExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
