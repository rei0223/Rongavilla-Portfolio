import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, QrCode } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "reyann.rongavilla@gmail.com",
      href: "mailto:reyann.rongavilla@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 938 571 6420",
      href: "tel:+639385716420",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cabuyao City, Laguna, Philippines",
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/reyann-rongavilla",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-navy text-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="contact-title"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-200 max-w-2xl mx-auto"
            data-testid="contact-description"
          >
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={contact.label} className="flex items-center" data-testid={`contact-info-${contact.label.toLowerCase()}`}>
                  <div className="w-12 h-12 bg-light-blue rounded-lg flex items-center justify-center mr-4">
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-blue-200 hover:text-white transition-colors"
                        data-testid={`contact-link-${contact.label.toLowerCase()}`}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-blue-200">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* QR Code Placeholder */}
            <div className="mt-8 p-6 bg-white rounded-lg text-center">
              <p className="text-navy font-medium mb-4">Scan to view portfolio</p>
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto flex items-center justify-center" data-testid="qr-code-placeholder">
                <QrCode className="w-16 h-16 text-gray-400" />
              </div>
              <p className="text-navy text-sm mt-2">QR Code to Portfolio</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-light-blue focus:border-transparent"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-light-blue focus:border-transparent"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Message subject"
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-light-blue focus:border-transparent"
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          rows={5}
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-light-blue focus:border-transparent resize-none"
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-light-blue text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-navy"
                  size="lg"
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
