

import { Progress } from "@/components/ui/progress";
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5 & CSS3", value: 98 },
        { name: "JavaScript (ES6+)", value: 85 },
        { name: "React.js", value: 95 },
        { name: "Tailwind CSS", value: 85 }
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", value: 90 },
        { name: "Express.js", value: 85 },
        { name: "RESTful APIs", value: 80 },
        { name: "PHP Laravel", value: 76 }
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", value: 75 },
        { name: "Dart", value: 70 }
      ],
      badge: "App",
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", value: 80 },
        { name: "VS Code", value: 95 },
        { name: "Figma", value: 70 }
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", value: 90 },
        { name: "Teamwork", value: 95 },
        { name: "Problem Solving", value: 80 },
        { name: "Adaptability", value: 90 }
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 gradient-bg">
      <div className="container mx-auto max-w-6xl" ref={sectionRef}>
        <h2 className="section-title">My Skills</h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          I have a strong foundation in both frontend and backend development, as well as mobile and soft skills.
          Here's a snapshot of my technical proficiency and toolset.
        </p>


        {/* Professional Skill Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glassmorphism p-6 ${inView ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="flex items-center justify-center mb-4">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-portfolio-purple to-portfolio-teal bg-clip-text text-transparent">
                  {category.title}
                </h3>
                {category.badge && (
                  <span className="ml-2 inline-block bg-portfolio-coral-lighter text-portfolio-coral px-2 py-0.5 rounded text-xs font-semibold dark:bg-opacity-20">
                    {category.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                    </div>
                    <Progress
                      value={skill.value}
                      className="h-2"
                      style={{
                        background: 'rgba(155, 135, 245, 0.2)',
                        '--progress-background': `linear-gradient(to right, rgb(155, 135, 245), rgb(56, 178, 172))`,
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
