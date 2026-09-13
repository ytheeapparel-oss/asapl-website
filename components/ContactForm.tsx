"use client";

import React, { useState } from "react";
import { Send, Check, Phone, Mail, MapPin, Sparkles, MessageSquare, AlertCircle } from "lucide-react";
import { SCHOOL_DATA } from "@/data/school-data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Campus Visit & Admission",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = "Your full name is required";
    if (!formData.phone.trim()) {
      err.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ''))) {
      err.phone = "Please enter a valid 10-digit number";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl p-6 sm:p-8 lg:p-10 relative">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sunshine-400 via-coral-500 to-ocean-500 rounded-t-3xl"></div>

      {isSuccess ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in">
          <div className="w-16 h-16 rounded-full bg-mint-100 text-mint-600 flex items-center justify-center mx-auto shadow">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-slate-900">
            Message Sent Successfully!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our administrative office in Sector 55, Noida has received your query and will reply promptly.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                subject: "Campus Visit & Admission",
                message: "",
                honeypot: "",
              });
            }}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-ocean-700 bg-ocean-50 hover:bg-ocean-100 border border-ocean-200 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="space-y-1">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold bg-sunshine-100 text-amber-900 border border-sunshine-200">
              Direct School Desk
            </span>
            <h3 className="font-heading text-2xl font-bold text-slate-900">
              Send Us a Message
            </h3>
            <p className="text-xs text-slate-600">
              Have questions about curriculum, age criteria, or transport routes? We are here to assist!
            </p>
          </div>

          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="hp_field"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              tabIndex={-1}
            />
          </div>

          <div>
            <label htmlFor="c-name" className="block text-xs font-bold text-slate-700 mb-1">
              Your Name <span className="text-coral-500">*</span>
            </label>
            <input
              id="c-name"
              type="text"
              placeholder="e.g. Rakesh Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100"
            />
            {errors.name && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.name}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="c-phone" className="block text-xs font-bold text-slate-700 mb-1">
                Phone Number <span className="text-coral-500">*</span>
              </label>
              <input
                id="c-phone"
                type="tel"
                placeholder="e.g. 9873539445"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100"
              />
              {errors.phone && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="c-email" className="block text-xs font-bold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                id="c-email"
                type="email"
                placeholder="parent@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100"
              />
            </div>
          </div>

          <div>
            <label htmlFor="c-subject" className="block text-xs font-bold text-slate-700 mb-1">
              Inquiry Subject
            </label>
            <select
              id="c-subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 bg-white"
            >
              <option value="Campus Visit & Admission">Book a Campus Tour / Visit</option>
              <option value="Curriculum & Teaching Methods">Curriculum & Teaching Methods</option>
              <option value="Fee Structure & Guidelines">Fee Structure & Document Guidelines</option>
              <option value="Transport & Local Bus Routes">Transport & Noida Bus Routes</option>
              <option value="General Query">General Administrative Query</option>
            </select>
          </div>

          <div>
            <label htmlFor="c-msg" className="block text-xs font-bold text-slate-700 mb-1">
              Your Message
            </label>
            <textarea
              id="c-msg"
              rows={4}
              placeholder="How can we assist your child's primary education journey?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-gradient-to-r from-ocean-500 to-ocean-600 hover:from-ocean-600 hover:to-ocean-700 shadow-md transition-all flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message to School</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
