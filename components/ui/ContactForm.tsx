"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate sending message locally
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card w-full max-w-lg border border-white/20 bg-white/10 p-8 shadow-pink-md backdrop-blur-xl"
    >
      <h3 className="mb-6 font-serif text-2xl font-bold text-white">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="form-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/80">
            Full Name
          </label>
          <input
            type="text"
            id="form-name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="John Doe"
            disabled={status === "submitting"}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3.5 text-sm text-white placeholder-white/40 shadow-inner outline-none transition-all duration-300 focus:border-pink/60 focus:bg-white/[0.1] focus:ring-2 focus:ring-pink/20"
            required
            suppressHydrationWarning
          />
        </div>

        <div>
          <label htmlFor="form-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/80">
            Email Address
          </label>
          <input
            type="email"
            id="form-email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            disabled={status === "submitting"}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3.5 text-sm text-white placeholder-white/40 shadow-inner outline-none transition-all duration-300 focus:border-pink/60 focus:bg-white/[0.1] focus:ring-2 focus:ring-pink/20"
            required
            suppressHydrationWarning
          />
        </div>

        <div>
          <label htmlFor="form-message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/80">
            Your Message
          </label>
          <textarea
            id="form-message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Hey Palak, I'd love to chat about an internship opportunity..."
            disabled={status === "submitting"}
            rows={5}
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3.5 text-sm text-white placeholder-white/40 shadow-inner outline-none transition-all duration-300 focus:border-pink/60 focus:bg-white/[0.1] focus:ring-2 focus:ring-pink/20"
            required
            suppressHydrationWarning
          />
        </div>

        <AnimatePresence mode="wait">
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 text-sm text-rose-300"
            >
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </motion.div>
          )}

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 text-sm text-emerald-300"
            >
              <CheckCircle2 size={16} />
              <span>Your message has been sent successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={status === "submitting"}
          suppressHydrationWarning
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-deep py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:shadow-[0_12px_36px_rgba(232,103,154,0.4)] disabled:opacity-75 active:scale-[0.98]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Sending Message...
            </>
          ) : (
            <>
              <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
