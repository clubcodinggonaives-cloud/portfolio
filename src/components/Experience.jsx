const experiences = [
    {
      id: 1,
      role: "Web Developer",
      company: "Freelance",
      period: "2025 - Present",
      description:
        "Developing modern and responsive web applications using React, JavaScript, HTML, CSS, and backend technologies.",
    },
    {
      id: 2,
      role: "Web Development Trainer",
      company: "Coding Club Gonaïves",
      period: "2026 - Present",
      description:
        "Teaching web development fundamentals including HTML, CSS, JavaScript, and React while helping learners build practical projects.",
    },
    {
      id: 3,
      role: "Responsible Web Development",
      company: "CIENTO-Immobilier",
      period: "2026 - Present",
      description:
        "Working on web solutions and digital products, with a focus on modern interfaces and practical business applications.",
    },
  ];
  
  function Experience() {
    return (
      <section className="section" id="experience">
        <div className="section-header">
          <p className="section-label">MY JOURNEY</p>
  
          <h2>Experience</h2>
        </div>
  
        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.id}
            >
              <div className="experience-date">
                {experience.period}
              </div>
  
              <div className="experience-content">
                <h3>{experience.role}</h3>
  
                <h4>{experience.company}</h4>
  
                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }
  
  export default Experience;