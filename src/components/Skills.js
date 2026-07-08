import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const allSkills = [
  { name: "Python", category: "Programming", icon: "devicon-python-plain colored", bg: "bg-blue-100/70" },
  { name: "PHP", category: "Programming", icon: "devicon-php-plain colored", bg: "bg-purple-100/70" },
  { name: "MySQL", category: "Programming", icon: "devicon-mysql-plain colored", bg: "bg-blue-100/70" },
  { name: "Figma", category: "Tools", icon: "devicon-figma-plain colored", bg: "bg-pink-100/70" },
  { name: "Excel", category: "Tools", icon: "fa-solid fa-table text-[#107c41]", bg: "bg-emerald-100/70" },
  { name: "Photoshop", category: "Tools", icon: "devicon-photoshop-plain colored", bg: "bg-blue-100/70" },
  { name: "CorelDraw", category: "Tools", icon: "fa-solid fa-pen-nib text-[#1c6434]", bg: "bg-orange-100/70" },
  { name: "Komunikatif", category: "Soft Skills", icon: "fa-solid fa-comments text-slate-700", bg: "bg-yellow-100/70" },
  { name: "Teliti", category: "Soft Skills", icon: "fa-solid fa-magnifying-glass text-slate-700", bg: "bg-indigo-100/70" },
  { name: "Manajemen Waktu", category: "Soft Skills", icon: "fa-solid fa-clock text-slate-700", bg: "bg-emerald-100/70" },
];

export default function Skills() {
  const [filter, setFilter] = useState('All Skills');
  const [containerRef, isVisible] = useScrollAnimation();

  const categories = ['All Skills', 'Programming', 'Tools', 'Soft Skills'];

  const filteredSkills = filter === 'All Skills' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === filter);

  return (
    <section id='skills' className='py-20 lg:py-28 bg-[var(--bg-primary)] transition-colors' ref={containerRef}>
      <div className='max-w-5xl mx-auto px-6'>
        <h2 className='text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-12 text-center transition-colors'>Kemampuan</h2>

        {/* Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-3 mb-16'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg' 
                  : 'bg-transparent border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-blue)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {filteredSkills.map((skill, idx) => (
            <div 
              key={idx}
              className={`card-glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl scroll-animate ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className={`w-14 h-14 ${skill.bg} rounded-xl flex items-center justify-center`}>
                {skill.icon.startsWith('devicon') ? (
                  <i className={`${skill.icon} colored text-2xl`}></i>
                ) : (
                  <i className={`${skill.icon} text-2xl text-slate-700`}></i>
                )}
              </div>
              <p className='font-bold text-[var(--text-primary)] text-sm'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
