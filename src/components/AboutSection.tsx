import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Globe, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'Fast & Efficient',
    description: 'Building performant applications that load instantly',
  },
  {
    icon: Sparkles,
    title: 'Creative Solutions',
    description: 'Turning complex problems into elegant experiences',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Creating scalable products for worldwide audiences',
  },
  {
    icon: Heart,
    title: 'User-Centric',
    description: 'Designing with empathy and user needs first',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm font-display">
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 font-display">
            Passionate about creating{' '}
            <span className="text-gradient">digital magic</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer who loves turning ideas into reality. With a 
              deep passion for clean code and beautiful interfaces, I create web 
              experiences that are both powerful and delightful to use.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey started with curiosity and evolved into expertise across the 
              modern web stack. From crafting pixel-perfect UIs to architecting 
              scalable backend systems, I enjoy every part of the development journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently focused on building AI-powered products and exploring the 
              intersection of design and technology.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl px-6 py-4 text-center cosmic-border"
              >
                <div className="text-3xl font-bold text-gradient font-display">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl px-6 py-4 text-center cosmic-border"
              >
                <div className="text-3xl font-bold text-gradient font-display">20+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl px-6 py-4 text-center cosmic-border"
              >
                <div className="text-3xl font-bold text-gradient font-display">10+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass rounded-2xl p-6 glass-hover cosmic-border group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-cyan">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-display">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
