
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use EmailJS to send the form data - using send instead of sendForm
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Salma",
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_l6f85vh", // Your EmailJS service ID
        "template_bc1ct57", // Your EmailJS template ID
        templateParams,
        "_fUn8Di61Prf2a-DW" // Your EmailJS public key
      )
      .then(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent successfully!",
          description: "Your message has been sent to salmam.mohyadiin@gmail.com. I'll get back to you soon.",
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("EmailJS error:", error);
        toast({
          variant: "destructive",
          title: "Failed to send message",
          description: "Please try again or contact me directly at salmam.mohyadiin@gmail.com.",
        });
      });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+252 617157083",
      href: "tel:+252617157083",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "salmam.mohyadiin@gmail.com",
      href: "mailto:salmam.mohyadiin@gmail.com",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      label: "GitHub",
      value: "salmamokhtaar",
      href: "https://github.com/salmamokhtaar",
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Salma Mokhtaar",
      href: "https://www.linkedin.com/in/salma-mokhtaar-0b4a11253/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Let's Connect</h2>

        <div className="mt-14 flex flex-col lg:flex-row gap-10">
          {/* Left: Contact Info */}
          <div className="lg:w-1/3 glassmorphism p-8">
            <div className="text-center mb-8">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-portfolio-blue-lighter dark:border-gray-700">
                <img src="/sa.png" alt="Salma Mukhtar" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Salma Mukhtar</h3>
              <p className="text-portfolio-blue dark:text-portfolio-blue-light font-medium">Full-Stack Developer</p>
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
              I'm always open to new opportunities, collaborations, and interesting projects.
              Let's build something great together!
            </p>

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === "GitHub" || item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={item.label === "GitHub" || item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="flex items-center p-3 rounded-lg transition-colors hover:bg-white dark:hover:bg-gray-800 group"
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-portfolio-blue-lighter text-portfolio-blue dark:bg-blue-900/30 dark:text-blue-300 mr-4 group-hover:bg-portfolio-blue group-hover:text-white dark:group-hover:bg-portfolio-blue-light dark:group-hover:text-gray-900 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                Based in Mogadishu, Somalia
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-2/3 glassmorphism p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Have a project in mind or want to discuss something? Fill out the form below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Your message has been sent successfully to salmam.mohyadiin@gmail.com. I'll get back to you soon!
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  className="rounded-full"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Salma"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your gmail@gmail.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project..."
                    required
                    className="min-h-[150px] rounded-lg"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
