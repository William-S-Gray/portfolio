import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Seo from "@/components/Seo";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof contactSchema>;
type Errors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setLoading(true);

      /* Email #1 → sent to YOU */
      await emailjs.send(
        "service_os2g7yx",
        "template_f2gatm5",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "v3g-7vFdAFIegC_Hz"
      );

      /* Email #2 → auto reply to visitor */
      await emailjs.send(
        "service_os2g7yx",
        "template_h1zyno9",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
        },
        "v3g-7vFdAFIegC_Hz"
      );

      setSubmitted(true);
      toast.success("Message sent — I'll get back to you within 24 hours.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Email failed:", error);
      toast.error("Something went wrong. Please try again, or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 py-16">
      <Seo
        title="Contact William S. Gray | Software Engineer"
        description="Get in touch with William S. Gray for software engineering projects, full-stack development, AI solutions, or collaboration. Available worldwide."
        path="/contact"
      />
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message and
            I'll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">

          {/* Contact Info */}
          <motion.div className="md:col-span-2 space-y-4">
            <div className="clay p-5 flex items-start gap-3">
              <Mail size={18} className="text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-muted-foreground">
                  graywilliamwiltino@gmail.com
                </p>
              </div>
            </div>

            <div className="clay p-5 flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Location</p>
                <p className="text-sm text-muted-foreground">
                  Available Worldwide
                </p>
              </div>
            </div>

            <div className="clay p-5 flex items-center gap-4">
              <a
                href="https://github.com/William-S-Gray"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/william-wiltino-gray-577254253/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="md:col-span-3">
            {submitted ? (
              <div className="clay p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>

                <p className="text-sm text-muted-foreground">
                  Thank you for reaching out. I'll respond within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="clay p-7 space-y-5"
                noValidate
              >
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-label="Your name"
                  aria-invalid={!!errors.name}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full clay-inset px-4 py-3 rounded-clay bg-transparent outline-none focus:ring-2 focus:ring-ring/50"
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}

                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-label="Your email address"
                  aria-invalid={!!errors.email}
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full clay-inset px-4 py-3 rounded-clay bg-transparent outline-none focus:ring-2 focus:ring-ring/50"
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}

                <input
                  name="subject"
                  type="text"
                  aria-label="Subject"
                  aria-invalid={!!errors.subject}
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full clay-inset px-4 py-3 rounded-clay bg-transparent outline-none focus:ring-2 focus:ring-ring/50"
                />
                {errors.subject && (
                  <p className="text-xs text-destructive">{errors.subject}</p>
                )}

                <textarea
                  name="message"
                  rows={5}
                  aria-label="Your message"
                  aria-invalid={!!errors.message}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full clay-inset px-4 py-3 rounded-clay bg-transparent outline-none focus:ring-2 focus:ring-ring/50 resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-clay bg-primary text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;







