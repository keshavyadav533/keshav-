import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, Send, MapPin, ArrowUpRight, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github , href: 'https://github.com/keshavyadav533', label: 'GitHub', color: 'hover:text-foreground' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/keshav-yadav-9a28a5277/', label: 'LinkedIn', color: 'hover:text-primary' },
  { icon: Twitter, href: 'https://x.com/keshavyadav533?s=21', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: Instagram, href: 'https://www.instagram.com/keshavyadav562', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Mail, href: 'mailto:keshavyadav2005562@gmail.com', label: 'Email', color: 'hover:text-accent' },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 flex flex-col max-w-md w-full"
          >
            <div className="glass rounded-3xl p-8 cosmic-border w-full max-w-md">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse glow-cyan mt-1" />
                <div>
                  <p className="font-semibold font-display text-lg">Currently available</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open to freelance and full-time opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 cosmic-border w-full max-w-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center glow-purple flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold font-display text-lg">Based in India</p>
                  <p className="text-sm text-muted-foreground mt-1">Available worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
