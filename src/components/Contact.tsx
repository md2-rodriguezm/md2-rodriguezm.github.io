import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-py bg-background-deep border-t border-border-subtle">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="caption text-primary">Contact</span>
            <h2 className="heading-lg mt-4 mb-8">Let's Create Together</h2>
            <p className="body-md text-muted-foreground max-w-md">
              Whether you're envisioning a new home, commercial space, or cultural 
              institution, I'd love to hear about your project.
            </p>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
              <a
                href="mailto:hello@marcuschen.arch"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="caption block mb-1">Email</span>
                  <span className="body-md">hello@marcuschen.arch</span>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="caption block mb-1">Phone</span>
                  <span className="body-md">+1 (234) 567-890</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="caption block mb-1">Studio</span>
                  <span className="body-md">425 Design District, Los Angeles</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="caption block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="caption block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="caption block mb-3">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="" className="bg-background">Select a project type</option>
                  <option value="residential" className="bg-background">Residential</option>
                  <option value="commercial" className="bg-background">Commercial</option>
                  <option value="cultural" className="bg-background">Cultural</option>
                  <option value="other" className="bg-background">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="caption block mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="mt-8 px-10 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors focus-ring"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
