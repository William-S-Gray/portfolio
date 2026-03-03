import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof contactSchema>;
type Errors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
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
    setSubmitted(true);
  };

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you shortly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            className="md:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="clay p-5 flex items-start gap-3">
              <Mail size={18} className="text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-muted-foreground">william@example.com</p>
              </div>
            </div>
            <div className="clay p-5 flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Location</p>
                <p className="text-sm text-muted-foreground">Available Worldwide</p>
              </div>
            </div>
            <div className="clay p-5 flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="clay p-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">Thank you for reaching out. I'll respond within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="clay p-7 space-y-5" noValidate>
                {(["name", "email", "subject"] as const).map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium mb-1.5 capitalize">
                      {field}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={handleChange}
                      className="w-full clay-inset px-4 py-3 text-sm bg-transparent outline-none focus:ring-2 focus:ring-primary/30 rounded-clay transition-shadow"
                    />
                    {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full clay-inset px-4 py-3 text-sm bg-transparent outline-none focus:ring-2 focus:ring-primary/30 rounded-clay transition-shadow resize-none"
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-clay bg-primary text-primary-foreground font-semibold text-sm clay-hover transition-all inline-flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
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
