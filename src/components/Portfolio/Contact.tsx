import { useState } from 'react';
import emailjs from '@emailjs/browser'; // ✅ Import EmailJS
import { Mail, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  /* ======================================================
     🔑 EMAILJS CONFIGURATION — ADD YOUR KEYS HERE
     ====================================================== */
  const EMAILJS_SERVICE_ID = 'service_llhdtzy';   // 👈 Replace with your EmailJS Service ID
  const EMAILJS_TEMPLATE_ID = 'template_qj3b4f5'; // 👈 Replace with your EmailJS Template ID
  const EMAILJS_PUBLIC_KEY = 'ZEK4BOG6_pa_WoSqL';   // 👈 Replace with your EmailJS Public Key
  /* ====================================================== */

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "daniaarshad19@gmail.com",
      href: "mailto:daniaarshad19@gmail.com"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // ✅ Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent successfully 🚀",
        description: "Thank you for reaching out. I’ll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message ❌",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text animate-fade-in">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary-glow/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
                    <Card className="relative glass-card rounded-2xl overflow-hidden border-0 bg-background/80 backdrop-blur-xl">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            <a 
                              href={item.href}
                              className="text-lg font-medium hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Available for:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Project Base work
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Freelance opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Full-time opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Card className="glass-card rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50 border-border rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/50 border-border rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input 
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-background/50 border-border rounded-xl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 border-border resize-none rounded-xl"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-transform shadow-lg hover:shadow-primary/50 rounded-xl"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Contact;
