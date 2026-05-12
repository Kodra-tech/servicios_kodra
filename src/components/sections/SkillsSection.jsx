/**
 * @file SkillsSection.jsx
 * @description Muestra las tecnologías y herramientas utilizadas en los proyectos.
 */

export default function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="section-inner">
        <div className="section-label reveal">Ecosistema Tecnológico</div>
        <h2 className="section-title reveal">Tecnologías</h2>
        <div className="skills-grid">
          <div className="skill-pill featured reveal">Next.js</div>
          <div className="skill-pill featured reveal">React</div>
          <div className="skill-pill featured reveal">JavaScript</div>
          <div className="skill-pill featured reveal">Node.js</div>
          <div className="skill-pill featured reveal">PostgreSQL</div>
          <div className="skill-pill reveal">HTML5 / CSS3</div>
          <div className="skill-pill reveal">Vercel</div>
          <div className="skill-pill reveal">Git / GitHub</div>
          <div className="skill-pill reveal">APIs REST</div>
          <div className="skill-pill reveal">Diseño Adaptativo</div>
          <div className="skill-pill reveal">SEO Técnico</div>
        </div>
      </div>
    </section>
  );
}
