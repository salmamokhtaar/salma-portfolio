
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="section-title">About Me</h2>
        
        {/* Main About Content */}
        <div className="mt-14 flex flex-col md:flex-row items-center gap-10 mb-12">
          {/* Image with decoration */}
          <div className="md:w-1/3 w-full flex justify-center relative">
            <div className="relative w-72 h-96 overflow-hidden shadow-xl rounded-xl border-4 border-white dark:border-gray-800 z-10">
              <img
                src="/salmas.jpeg"
                alt="Salma Mukhtar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 w-full h-full bg-portfolio-blue opacity-10 rounded-xl -z-10 transform -rotate-6"></div>
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-portfolio-purple opacity-30 rounded-xl -z-20 transform -rotate-3"></div>
          </div>
          
          {/* Info */}
          <div className="md:w-2/3 w-full flex flex-col items-center md:items-start">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-portfolio-purple dark:text-portfolio-blue-light border-portfolio-purple dark:border-portfolio-blue-light">
              About Me
            </Badge>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Salma Mukhtar</h2>
            <h3 className="text-xl text-portfolio-blue dark:text-portfolio-blue-light mb-5 font-medium">Full-Stack Developer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl text-center md:text-left leading-relaxed">
              I am a passionate Full-Stack Developer with a recent degree in Computer Science from Jamhuriya. I love building seamless, user-focused web applications and thrive on solving real-world problems with technology. My journey has given me a strong foundation in both frontend and backend development, and I am always eager to learn and grow.
            </p>
            
            {/* Quick Facts */}
            <div className="glassmorphism p-6 flex flex-col gap-3 w-full max-w-md mb-6">
              <div className="flex justify-between text-gray-700 dark:text-gray-200">
                <span className="font-semibold">Current Role:</span>
                <span>Open to Opportunities</span>
              </div>
              <div className="flex justify-between text-gray-700 dark:text-gray-200">
                <span className="font-semibold">Tech Stack:</span>
                <span>MERN STACK, Nextjs, Php Laravel, Flutter</span>
              </div>
              <div className="flex justify-between text-gray-700 dark:text-gray-200">
                <span className="font-semibold">Email:</span>
                <span>salmam.mohyadiin@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-portfolio-blue mb-8 dark:text-portfolio-blue-light text-center">
            Event Participation
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Event 1 */}
            <div className="group glassmorphism p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-portfolio-blue dark:text-portfolio-blue-light mb-2 group-hover:text-portfolio-purple dark:group-hover:text-portfolio-purple transition-colors">
                Mogadishu Tech Summit
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">June 29–30, 2024</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Top 3 in hackathon. Contributed to conference on "Job Creation through Education and Skills Development."
              </p>
            </div>
            
            {/* Event 2 */}
            <div className="group glassmorphism p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-portfolio-blue dark:text-portfolio-blue-light mb-2 group-hover:text-portfolio-purple dark:group-hover:text-portfolio-purple transition-colors">
                PyCon Somalia
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">August 28–29, 2024</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Hackathon participant and attended "Python and AI: Building Tomorrow."
              </p>
            </div>
            
            {/* Event 3 */}
            <div className="group glassmorphism p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-portfolio-blue dark:text-portfolio-blue-light mb-2 group-hover:text-portfolio-purple dark:group-hover:text-portfolio-purple transition-colors">
                SomNOG7
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">December 22–26, 2024</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Top 3 in workshops. Focused on "Digital Public Infrastructure: Laying the Foundation for Somalia's Digital Future."
              </p>
            </div>
          </div>
          
          {/* GirlsInICT 2025 Centered Card */}
          <div className="flex justify-center mt-8">
            <div className="group glassmorphism p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-1/2 border-t-4 border-t-portfolio-purple dark:border-t-portfolio-purple-dark">
              <h3 className="text-lg font-semibold text-portfolio-purple dark:text-portfolio-purple mb-2">
                GirlsInICT 2025
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">2025</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Participated and presented the Caawiye Caafimaad app. Achieved Top 5 project status out of 144 competitors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
