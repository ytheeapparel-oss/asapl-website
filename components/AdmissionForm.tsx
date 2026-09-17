"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  GraduationCap, 
  ShieldCheck,
  Check
} from "lucide-react";
import { SCHOOL_DATA } from "@/data/school-data";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    grade: "Nursery",
    phone: "",
    email: "",
    visitDate: "",
    message: "",
    privacyConsent: true,
    honeypot: "", // anti-spam hidden field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const gradeOptions = [
    "Playgroup / Toddlers (Ages 2 – 3)",
    "Nursery (Ages 3 – 4)",
    "Lower KG / LKG (Ages 4 – 5)",
    "Upper KG / UKG (Ages 5 – 6)",
    "Grade 1 (Ages 6 – 7)",
    "Grade 2 (Ages 7 – 8)",
    "Grade 3 (Ages 8 – 9)",
    "Grade 4 (Ages 9 – 10)",
    "Grade 5 (Ages 10+)",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent/Guardian name is required";
    }

    if (!formData.childName.trim()) {
      newErrors.childName = "Child's name is required";
    }

    if (!formData.childAge.trim()) {
      newErrors.childAge = "Child's age is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Contact phone number is required";
    } else if (!/^[0-9+\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "Please agree to the privacy consent";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData.honeypot) {
      console.warn("Spam bot detected");
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "admission",
          name: formData.parentName,
          phone: formData.phone,
          email: formData.email,
          child_name: formData.childName,
          child_age: formData.childAge,
          grade: formData.grade,
          visit_date: formData.visitDate,
          message: formData.message,
          honeypot: formData.honeypot,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      console.error("Admission submission error:", err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please call admissions directly at " + SCHOOL_DATA.displayPhone
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      parentName: "",
      childName: "",
      childAge: "",
      grade: "Nursery",
      phone: "",
      email: "",
      visitDate: "",
      message: "",
      privacyConsent: true,
      honeypot: "",
    });
    setSubmitError(null);
    setIsSuccess(false);
  };

  return (
    <div 
      id="enquiry-form" 
      className="rounded-3xl bg-white border-2 border-slate-100 shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
    >
      {/* Top playful decorative accent bar */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-sunshine-400 via-coral-500 to-ocean-500"></div>

      {isSuccess ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-mint-100 text-mint-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h3 className="font-heading text-2xl font-bold text-slate-900">
              Enquiry Received with Joy!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Thank you for considering <span className="font-bold text-slate-800">ASAPL International</span> for {formData.childName || "your child"}. Our admissions counselor in Sector 55, Noida will contact you within 24 business hours at <span className="font-semibold text-ocean-600">{formData.phone}</span>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 max-w-sm mx-auto text-left space-y-1">
            <p className="font-bold flex items-center">
              <Calendar className="w-4 h-4 mr-1 text-sunshine-600" />
              Next Step: Campus Visit
            </p>
            <p className="text-slate-600">
              Feel free to visit us directly at Sector 55, Noida or call us at {SCHOOL_DATA.displayPhone} if you need immediate assistance.
            </p>
          </div>

          <button
            onClick={resetForm}
            className="inline-flex items-center px-6 py-2.5 rounded-full text-xs font-bold text-ocean-700 bg-ocean-50 hover:bg-ocean-100 border border-ocean-200 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          
          <div className="space-y-1 text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-coral-50 text-coral-600 border border-coral-200">
              <Sparkles className="w-3.5 h-3.5 text-coral-500 animate-pulse" />
              <span>Admissions Open for {SCHOOL_DATA.admissionsYear}</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
              Begin Your Child’s Learning Adventure
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Fill out this quick form and our admissions team will share the curriculum details, visit dates, and registration assistance.
            </p>
          </div>

          {/* Hidden spam honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website-hp">Leave this blank</label>
            <input
              id="website-hp"
              type="text"
              name="website_hp"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Row 1: Parent Name & Child Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 mb-1">
                Parent / Guardian Name <span className="text-coral-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="parentName"
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.parentName 
                      ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                      : "border-slate-200 focus:border-ocean-500 focus:ring-ocean-100"
                  }`}
                />
              </div>
              {errors.parentName && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.parentName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="childName" className="block text-xs font-bold text-slate-700 mb-1">
                Child’s Full Name <span className="text-coral-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <input
                  id="childName"
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.childName 
                      ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                      : "border-slate-200 focus:border-ocean-500 focus:ring-ocean-100"
                  }`}
                />
              </div>
              {errors.childName && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.childName}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Child Age & Grade Seeking */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="childAge" className="block text-xs font-bold text-slate-700 mb-1">
                Child’s Age / Date of Birth <span className="text-coral-500">*</span>
              </label>
              <input
                id="childAge"
                type="text"
                placeholder="e.g. 3 Years 8 Months"
                value={formData.childAge}
                onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                  errors.childAge 
                    ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                    : "border-slate-200 focus:border-ocean-500 focus:ring-ocean-100"
                }`}
              />
              {errors.childAge && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.childAge}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="grade" className="block text-xs font-bold text-slate-700 mb-1">
                Grade / Class Interested In <span className="text-coral-500">*</span>
              </label>
              <select
                id="grade"
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 bg-white"
              >
                {gradeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 3: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                Mobile Number (India +91) <span className="text-coral-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 9873539445"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.phone 
                      ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                      : "border-slate-200 focus:border-ocean-500 focus:ring-ocean-100"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                Email Address (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="parent@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.email 
                      ? "border-red-400 focus:ring-red-200 bg-red-50/20" 
                      : "border-slate-200 focus:border-ocean-500 focus:ring-ocean-100"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Row 4: Preferred Visit Date */}
          <div>
            <label htmlFor="visitDate" className="block text-xs font-bold text-slate-700 mb-1">
              Preferred Campus Visit Date (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                id="visitDate"
                type="date"
                value={formData.visitDate}
                onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 bg-white"
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1">
              Campus visits are scheduled Monday to Saturday between 9:00 AM and 2:30 PM.
            </p>
          </div>

          {/* Row 5: Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
              Questions or Notes for the Academic Team (Optional)
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Tell us about your child's interests, previous preschool experience, or any specific questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100"
            ></textarea>
          </div>

          {/* Privacy Consent Checkbox */}
          <div>
            <label className="flex items-start space-x-2 text-xs text-slate-600 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.privacyConsent}
                onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                className="mt-0.5 rounded text-coral-500 focus:ring-coral-400"
              />
              <span>
                I agree to be contacted by ASAPL International via call/WhatsApp regarding school admission details and campus visits. We respect your family’s privacy.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="text-[11px] text-red-500 mt-1 flex items-center">
                <AlertCircle className="w-3 h-3 mr-1" />
                {errors.privacyConsent}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            {submitError && (
              <div className="mb-3 p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{submitError}</span>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-coral-500 via-coral-500 to-amber-500 hover:from-coral-600 hover:to-amber-600 shadow-playful hover:shadow-playful-hover transition-all flex items-center justify-center space-x-2 disabled:opacity-70 transform active:translate-y-0.5"
            >
              {isSubmitting ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Enquiry</span>
                </>
              )}
            </button>
          </div>

          {/* Child Safeguarding Note */}
          <div className="pt-2 flex items-center justify-center space-x-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-mint-500" />
            <span>Strict Child Privacy Guarantee • No commercial spam</span>
          </div>

        </form>
      )}
    </div>
  );
}
