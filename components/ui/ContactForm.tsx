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
      className="glass-card w-full max-w-lg p-8 border border-charcoal/15 bg-white shadow-sm"
    >
      <h3 className="mb-6 font-serif text-2xl font-bold text-charcoal">
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="form-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-charcoal">
            Full Name
          </label>
          <input
            type="text"
            id="form-name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="your name"
            disabled={status === "submitting"}
            className="w-full rounded-xl border border-charcoal/20 bg-stone-50 px-5 py-3.5 text-sm text-charcoal placeholder-charcoal/40 shadow-inner outline-none transition-all duration-300 focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/10 font-medium"
            required
            suppressHydrationWarning
          />
        </div>

        <div>
          <label htmlFor="form-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-charcoal">
            Email Address
          </label>
          <input
            type="email"
            id="form-email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="youremailid@gmail.com"
            disabled={status === "submitting"}
            className="w-full rounded-xl border border-charcoal/20 bg-stone-50 px-5 py-3.5 text-sm text-charcoal placeholder-charcoal/40 shadow-inner outline-none transition-all duration-300 focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/10 font-medium"
            required
            suppressHydrationWarning
          />
        </div>

        <div>
          <label htmlFor="form-message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-charcoal">
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
            className="w-full resize-none rounded-xl border border-charcoal/20 bg-stone-50 px-5 py-3.5 text-sm text-charcoal placeholder-charcoal/40 shadow-inner outline-none transition-all duration-300 focus:border-crimson focus:bg-white focus:ring-2 focus:ring-crimson/10 font-medium"
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
              className="flex items-center gap-2 text-sm text-red-700 font-bold"
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
              className="flex items-center gap-2 text-sm text-emerald-700 font-bold"
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
          className="group flex w-full items-center justify-center gap-2 border-2 border-charcoal bg-crimson py-3.5 text-sm font-bold text-white shadow-[2px_2px_0px_rgba(36,33,32,1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(36,33,32,1)] disabled:opacity-75 active:translate-y-0 active:shadow-[1px_1px_0px_rgba(36,33,32,1)]"
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
