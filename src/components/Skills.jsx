import { skills } from '../data/skills';

function Skills(){
    return (
        <section className="section">
            <div className="section-header">
                <p className="section-label">
                    MY SKILLS
                </p>
                <h2>Technologies I work with</h2>
            </div>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div className="skill-card" key={skill.name}>
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;