
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Mail, Calendar, Award, Globe, GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';

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
              I am a dedicated Full-Stack Developer with a Computer Science degree from Jamhuriya University. I specialize in developing seamless, user-centric web and mobile applications, with a proven track record in performance optimization and intuitive UI/UX design. My technical foundation spans both frontend and backend development, including React, Node.js, MongoDB, and Flutter. I'm continually driven by a passion for learning new technologies and delivering impactful digital solutions that exceed client expectations.
            </p>

            {/* Professional Highlights */}
            <div className="glassmorphism p-6 w-full max-w-md mb-6">
              <h4 className="text-lg font-semibold mb-4 text-portfolio-purple dark:text-portfolio-purple-light">Professional Highlights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Status & Availability */}
                <div className="col-span-2 flex items-start gap-3 pb-3 border-b border-gray-100 dark:border-gray-800">
                  <Briefcase className="h-5 w-5 text-portfolio-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Professional Status</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Open to Opportunities</span>
                    <span className="mt-1 inline-block px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded text-xs">
                      Available for Freelance.
                    </span>
                  </div>
                </div>

                {/* Tech Expertise */}
                <div className="col-span-2 flex items-start gap-3 pb-3 border-b border-gray-100 dark:border-gray-800">
                  <Code className="h-5 w-5 text-portfolio-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Tech Expertise</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <Badge className="bg-portfolio-purple-lighter text-portfolio-purple dark:bg-portfolio-purple/20 dark:text-portfolio-purple-light border-none">MERN Stack</Badge>
                      <Badge className="bg-portfolio-teal-lighter text-portfolio-teal dark:bg-portfolio-teal/20 dark:text-portfolio-teal-light border-none">Next.js</Badge>
                      <Badge className="bg-portfolio-blue-lighter text-portfolio-blue dark:bg-portfolio-blue/20 dark:text-portfolio-blue-light border-none">PHP Laravel</Badge>
                      <Badge className="bg-portfolio-coral-lighter text-portfolio-coral dark:bg-portfolio-coral/20 dark:text-portfolio-coral-light border-none">Flutter</Badge>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-portfolio-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Experience</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">2+ Years</span>
                  </div>
                </div>

                {/* Projects */}
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-portfolio-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Projects</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">9+ Completed</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-portfolio-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Location</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Mogadishu, Somalia</span>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-portfolio-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">Contact</span>
                    <a href="mailto:salmam.mohyadiin@gmail.com" className="text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-portfolio-purple-light transition-colors">
                      salmam.mohyadiin@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Development Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-portfolio-blue mb-8 dark:text-portfolio-blue-light text-center">
            Professional Development
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Background Card */}
            <div className="glassmorphism p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-5">
                <GraduationCap className="h-6 w-6 text-portfolio-purple mr-3" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Academic Background</h4>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-portfolio-blue dark:text-portfolio-blue-light font-medium">Jamhuriya University</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Graduated: 2024</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                Developed a strong foundation in software engineering, algorithms, and full-stack web development. Completed multiple real-world projects and participated in hackathons to apply knowledge in practical settings.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs font-medium">
                  Top Graduate
                </span>
              </div>
            </div>

            {/* Continuous Learning Card */}
            <div className="glassmorphism p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-5">
                <BookOpen className="h-6 w-6 text-portfolio-teal mr-3" />
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Continuous Learning</h4>
              </div>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
                Certifications & Professional Development
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-portfolio-teal mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <span className="font-medium">Diploma in Full-Stack Development</span>, Irise Academy (2024)
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-portfolio-teal mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Online courses in React, Node.js, and modern web technologies
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-portfolio-teal mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Active participation in tech events, workshops, and hackathons
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

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
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Achieved <span className="font-medium">Top 3 placement</span> in the hackathon competition. Actively contributed to panel discussions on "Job Creation through Education and Skills Development," sharing insights on technology education pathways.
              </p>
            </div>

            {/* Event 2 */}
            <div className="group glassmorphism p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-portfolio-blue dark:text-portfolio-blue-light mb-2 group-hover:text-portfolio-purple dark:group-hover:text-portfolio-purple transition-colors">
                PyCon Somalia
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">August 28–29, 2024</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Participated in the hackathon competition, developing innovative solutions using Python. Attended specialized workshops on "Python and AI: Building Tomorrow," enhancing expertise in machine learning applications and AI development frameworks.
              </p>
            </div>

            {/* Event 3 */}
            <div className="group glassmorphism p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-portfolio-blue dark:text-portfolio-blue-light mb-2 group-hover:text-portfolio-purple dark:group-hover:text-portfolio-purple transition-colors">
                SomNOG7
              </h3>
              <p className="text-sm text-orange-600 dark:text-orange-400 mb-1">December 22–26, 2024</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Recognized among the <span className="font-medium">Top 3 participants</span> in technical workshops. Engaged in comprehensive sessions on "Digital Public Infrastructure: Laying the Foundation for Somalia's Digital Future," contributing to discussions on scalable infrastructure solutions for national development.
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
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Developed and presented the <span className="font-medium">Caawiye Caafimaad</span> healthcare application, showcasing innovative solutions for medical accessibility. The project was recognized among the <span className="font-medium">Top 5 submissions</span> out of 144 competing teams, demonstrating excellence in mobile application development and healthcare technology integration.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
