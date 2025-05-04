
import { useEffect, useState, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Progress } from "@/components/ui/progress";
import { useInView } from 'react-intersection-observer';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillsSection = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });
  const [chartOptions, setChartOptions] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      if (typeof window !== 'undefined') {
        setIsDarkMode(document.documentElement.classList.contains('dark'));
      }
    };

    // Initial check
    checkDarkMode();

    // Set up chart data
    const data = {
      labels: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Git & GitHub",
        "Flutter",
        "PHP Laravel",
      ],
      datasets: [
        {
          label: "Skill Level",
          data: [90, 85, 80, 75, 70, 65, 70, 80, 65, 70],
          backgroundColor: isDarkMode ? 
            'linear-gradient(to right, rgba(155, 135, 245, 0.6), rgba(56, 178, 172, 0.6))' : 
            'linear-gradient(to right, rgba(155, 135, 245, 0.6), rgba(56, 178, 172, 0.6))',
          borderColor: isDarkMode ? 
            'linear-gradient(to right, rgba(155, 135, 245, 1), rgba(56, 178, 172, 1))' : 
            'linear-gradient(to right, rgba(155, 135, 245, 1), rgba(56, 178, 172, 1))',
          borderWidth: 1,
          borderRadius: 6,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: isDarkMode ? '#ffffff' : '#333',
            font: {
              family: "'Poppins', sans-serif",
              size: 12
            }
          },
        },
        title: {
          display: true,
          text: "Skills Proficiency",
          color: isDarkMode ? '#ffffff' : '#333',
          font: {
            family: "'Poppins', sans-serif",
            size: 16,
            weight: 'bold'
          }
        },
      },
      scales: {
        x: {
          ticks: {
            color: isDarkMode ? '#ffffff' : '#333',
            font: {
              family: "'Poppins', sans-serif"
            }
          },
          grid: {
            color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          }
        },
        y: {
          ticks: {
            color: isDarkMode ? '#ffffff' : '#333',
            font: {
              family: "'Poppins', sans-serif"
            }
          },
          grid: {
            color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          }
        },
      },
      animation: {
        duration: 2000,
        easing: 'easeOutQuart'
      }
    };

    setChartData(data);
    setChartOptions(options);

    // Set up observer for dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, [isDarkMode]);

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
        
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I have a strong foundation in both frontend and backend development, as well as mobile and soft skills. 
          Here's a snapshot of my technical proficiency and toolset.
        </p>
        
        {/* Chart Section */}
        <div className={`mx-auto mb-16 glassmorphism p-6 ${inView ? 'animate-fadeIn' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="h-[400px]">
            <Bar options={chartOptions} data={chartData} />
          </div>
        </div>

        {/* Professional Skill Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
