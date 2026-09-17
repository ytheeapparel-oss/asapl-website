"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  School,
  LogOut,
  RefreshCw,
  Search,
  Phone,
  MessageSquare,
  Mail,
  Calendar,
  GraduationCap,
  Baby,
  Clock,
  Download,
  Trash2,
  AlertCircle,
  Sparkles
} from "lucide-react";

interface Enquiry {
  id: string;
  created_at: string;
  type: "contact" | "admission";
  name: string;
  phone: string;
  email: string | null;
  child_name: string | null;
  child_age: string | null;
  grade: string | null;
  visit_date: string | null;
  subject: string | null;
  message: string | null;
  status: "new" | "contacted" | "admitted" | "closed";
}

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "admission" | "contact">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "contacted" | "admitted" | "closed">("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const router = useRouter();

  const fetchEnquiries = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/enquiries");
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to load enquiries");
      }
      setEnquiries(data.enquiries || []);
      setLastRefreshed(new Date());
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth", { method: "DELETE" });
      router.replace("/admin/login");
    } catch {
      router.replace("/admin/login");
    }
  };

  const handleStatusChange = async (id: string, newStatus: Enquiry["status"]) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to update status");
      }
      setEnquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
      );
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Could not update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete the enquiry from ${name}?`)) {
      return;
    }
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to delete");
      }
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Could not delete enquiry");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const matchesType = typeFilter === "all" || item.type === typeFilter;
      const matchesStatus = statusFilter === "all" || item.status === statusFilter;
      const term = search.toLowerCase().trim();
      const matchesSearch =
        !term ||
        item.name?.toLowerCase().includes(term) ||
        item.phone?.toLowerCase().includes(term) ||
        item.email?.toLowerCase().includes(term) ||
        item.child_name?.toLowerCase().includes(term) ||
        item.grade?.toLowerCase().includes(term) ||
        item.message?.toLowerCase().includes(term);

      return matchesType && matchesStatus && matchesSearch;
    });
  }, [enquiries, typeFilter, statusFilter, search]);

  const stats = useMemo(() => {
    const total = enquiries.length;
    const newCount = enquiries.filter((e) => e.status === "new").length;
    const admissions = enquiries.filter((e) => e.type === "admission").length;
    const contacts = enquiries.filter((e) => e.type === "contact").length;
    return { total, newCount, admissions, contacts };
  }, [enquiries]);

  const exportCSV = () => {
    if (filteredEnquiries.length === 0) {
      alert("No records to export");
      return;
    }

    const headers = [
      "Date",
      "Time",
      "Type",
      "Status",
      "Name",
      "Phone",
      "Email",
      "Child Name",
      "Child Age",
      "Grade",
      "Visit Date",
      "Subject",
      "Message",
    ];

    const rows = filteredEnquiries.map((item) => {
      const d = new Date(item.created_at);
      const dateStr = d.toLocaleDateString("en-IN");
      const timeStr = d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
      return [
        `"${dateStr}"`,
        `"${timeStr}"`,
        `"${item.type}"`,
        `"${item.status}"`,
        `"${item.name || ""}"`,
        `"${item.phone || ""}"`,
        `"${item.email || ""}"`,
        `"${item.child_name || ""}"`,
        `"${item.child_age || ""}"`,
        `"${item.grade || ""}"`,
        `"${item.visit_date || ""}"`,
        `"${item.subject || ""}"`,
        `"${(item.message || "").replace(/"/g, '""')}"`,
      ].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `aspal-enquiries-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCleanPhone = (phone: string) => {
    return phone.replace(/[^0-9]/g, "");
  };

  const getWhatsAppLink = (enquiry: Enquiry) => {
    const rawDigits = getCleanPhone(enquiry.phone);
    const phoneWithCountry = rawDigits.length === 10 ? `91${rawDigits}` : rawDigits;
    const greeting =
      enquiry.type === "admission"
        ? `Namaste ${enquiry.name}! Greetings from ASPAL International School, Sector 55 Noida. We received your admission enquiry regarding ${enquiry.child_name || "your child"} for ${enquiry.grade || "our academic program"}. We would love to welcome you for a campus tour. When would be a convenient time for a brief call?`
        : `Namaste ${enquiry.name}! Greetings from ASPAL International School, Sector 55 Noida. Thank you for reaching out to us. How can we assist you today?`;

    return `https://wa.me/${phoneWithCountry}?text=${encodeURIComponent(greeting)}`;
  };

  const formatDate = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Navigation Bar */}
      <header className="bg-slate-900 text-white sticky top-0 z-30 shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sunshine-400 to-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md">
              <School className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-heading font-extrabold text-lg text-white leading-none">
                  ASPAL International
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sunshine-400 text-slate-950 uppercase tracking-wider">
                  Admin Portal
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Sector 55, Noida • Admissions Desk</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={fetchEnquiries}
              disabled={isLoading}
              title="Refresh enquiry list"
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 sm:mr-1.5 ${isLoading ? "animate-spin text-sunshine-400" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={exportCSV}
              title="Export currently displayed enquiries to CSV"
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-ocean-700 hover:bg-ocean-600 text-white transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 sm:mr-1.5" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            <button
              onClick={handleLogout}
              title="Log out from Admin session"
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-900/60 hover:bg-red-800 text-red-200 border border-red-800/50 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 sm:mr-1.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Metric Cards Row */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Enquiries</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-1 font-heading">{stats.total}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-xs flex items-center justify-between bg-amber-50/30">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Action Needed (New)</p>
              <p className="text-3xl font-extrabold text-amber-900 mt-1 font-heading">{stats.newCount}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-coral-200 shadow-xs flex items-center justify-between bg-coral-50/30">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-coral-700">Admission Leads</p>
              <p className="text-3xl font-extrabold text-coral-900 mt-1 font-heading">{stats.admissions}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-coral-100 text-coral-700 flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-ocean-200 shadow-xs flex items-center justify-between bg-ocean-50/30">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-ocean-700">General Queries</p>
              <p className="text-3xl font-extrabold text-ocean-900 mt-1 font-heading">{stats.contacts}</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-ocean-100 text-ocean-700 flex items-center justify-center font-bold">
              <Phone className="w-6 h-6" />
            </div>
          </div>
        </section>

        {/* Search & Filter Controls */}
        <section className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search by parent name, child name, mobile number, or message..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sunshine-400 focus:border-transparent"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Status / Type Counts info */}
            <div className="text-xs text-slate-500 flex items-center justify-between md:justify-end gap-3">
              <span>
                Showing <strong className="text-slate-800">{filteredEnquiries.length}</strong> of {enquiries.length}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] text-slate-400">
                Updated {lastRefreshed.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            {/* Type filters */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] mr-1">Type:</span>
              <button
                onClick={() => setTypeFilter("all")}
                className={`px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  typeFilter === "all"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All ({enquiries.length})
              </button>
              <button
                onClick={() => setTypeFilter("admission")}
                className={`px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  typeFilter === "admission"
                    ? "bg-coral-500 text-white"
                    : "bg-coral-50 text-coral-700 hover:bg-coral-100"
                }`}
              >
                Admissions ({stats.admissions})
              </button>
              <button
                onClick={() => setTypeFilter("contact")}
                className={`px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  typeFilter === "contact"
                    ? "bg-ocean-600 text-white"
                    : "bg-ocean-50 text-ocean-700 hover:bg-ocean-100"
                }`}
              >
                General ({stats.contacts})
              </button>
            </div>

            {/* Status filters */}
            <div className="flex flex-wrap items-center space-x-1 sm:space-x-2 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] mr-1">Status:</span>
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  statusFilter === "all"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter("new")}
                className={`px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  statusFilter === "new"
                    ? "bg-amber-400 text-amber-950"
                    : "bg-amber-50 text-amber-800 hover:bg-amber-100"
                }`}
              >
                New ({stats.newCount})
              </button>
              <button
                onClick={() => setStatusFilter("contacted")}
                className={`px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  statusFilter === "contacted"
                    ? "bg-ocean-600 text-white"
                    : "bg-ocean-50 text-ocean-700 hover:bg-ocean-100"
                }`}
              >
                Contacted
              </button>
              <button
                onClick={() => setStatusFilter("admitted")}
                className={`px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  statusFilter === "admitted"
                    ? "bg-mint-600 text-white"
                    : "bg-mint-50 text-mint-700 hover:bg-mint-100"
                }`}
              >
                Admitted
              </button>
              <button
                onClick={() => setStatusFilter("closed")}
                className={`px-3 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                  statusFilter === "closed"
                    ? "bg-slate-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Closed
              </button>
            </div>
          </div>
        </section>

        {/* Error Alert Banner */}
        {error && (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 space-y-2">
            <div className="flex items-center space-x-2 font-bold text-sm">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span>Could not load enquiries: {error}</span>
            </div>
            <p className="text-xs text-red-700">
              If your database permissions require an update, run the following command in Supabase SQL Editor:
            </p>
            <pre className="bg-white p-3 rounded-lg border border-red-200 text-[11px] overflow-x-auto text-slate-800 font-mono">
{`create policy "Allow select and update for enquiries"
  on public.enquiries
  for all
  using (true)
  with check (true);`}
            </pre>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 space-y-3">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-sunshine-400" />
            <p className="font-bold text-sm text-slate-700">Loading enquiries from Supabase...</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && filteredEnquiries.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 space-y-3">
            <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <MessageSquare className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-lg font-bold text-slate-800">No Enquiries Found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {search || typeFilter !== "all" || statusFilter !== "all"
                ? "No enquiries match your current search or filter criteria. Try resetting your filters."
                : "No enquiries have been received yet. Test by submitting a message on the Contact Us or Admissions page."}
            </p>
          </div>
        )}

        {/* Enquiries Grid */}
        {!isLoading && filteredEnquiries.length > 0 && (
          <section className="space-y-4">
            {filteredEnquiries.map((enquiry) => {
              const isAdmission = enquiry.type === "admission";
              const cleanPhone = getCleanPhone(enquiry.phone);

              return (
                <article
                  key={enquiry.id}
                  className={`bg-white rounded-2xl border-2 transition-all shadow-xs hover:shadow-md p-5 sm:p-6 ${
                    enquiry.status === "new"
                      ? "border-amber-300 bg-gradient-to-r from-amber-50/20 via-white to-white"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    {/* Left Column: Inquiry details */}
                    <div className="space-y-3 flex-1">
                      {/* Top Badges & Timestamp */}
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span
                          className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] inline-flex items-center space-x-1 ${
                            isAdmission
                              ? "bg-coral-100 text-coral-800 border border-coral-200"
                              : "bg-ocean-100 text-ocean-800 border border-ocean-200"
                          }`}
                        >
                          {isAdmission ? (
                            <>
                              <GraduationCap className="w-3 h-3 mr-1" />
                              <span>Admission Enquiry</span>
                            </>
                          ) : (
                            <>
                              <MessageSquare className="w-3 h-3 mr-1" />
                              <span>General Contact</span>
                            </>
                          )}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] ${
                            enquiry.status === "new"
                              ? "bg-amber-100 text-amber-900 border border-amber-300 font-extrabold"
                              : enquiry.status === "contacted"
                              ? "bg-ocean-100 text-ocean-800 border border-ocean-200"
                              : enquiry.status === "admitted"
                              ? "bg-mint-100 text-mint-800 border border-mint-200"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {enquiry.status.toUpperCase()}
                        </span>

                        <span className="text-[11px] text-slate-400 flex items-center ml-auto">
                          <Clock className="w-3 h-3 mr-1" />
                          {formatDate(enquiry.created_at)}
                        </span>
                      </div>

                      {/* Parent / Inquirer Name & Phone */}
                      <div>
                        <h2 className="font-heading text-xl font-bold text-slate-900 flex items-center space-x-2">
                          <span>{enquiry.name}</span>
                        </h2>

                        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600">
                          <a
                            href={`tel:${cleanPhone}`}
                            className="font-bold text-ocean-700 hover:underline flex items-center space-x-1"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>{enquiry.phone}</span>
                          </a>
                          {enquiry.email && (
                            <a
                              href={`mailto:${enquiry.email}`}
                              className="text-slate-500 hover:text-slate-800 flex items-center space-x-1 hover:underline"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span>{enquiry.email}</span>
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Child & Admission Details (if admission) */}
                      {isAdmission && (
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-700">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Child Name
                            </span>
                            <span className="font-bold text-slate-900 flex items-center space-x-1 mt-0.5">
                              <Baby className="w-3 h-3 text-coral-500 mr-1" />
                              {enquiry.child_name || "—"}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Child Age
                            </span>
                            <span className="font-semibold text-slate-800 mt-0.5 block">
                              {enquiry.child_age || "—"}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Target Grade
                            </span>
                            <span className="font-bold text-ocean-700 mt-0.5 block">
                              {enquiry.grade || "—"}
                            </span>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                              Preferred Visit
                            </span>
                            <span className="font-semibold text-slate-800 mt-0.5 flex items-center space-x-1">
                              <Calendar className="w-3 h-3 text-amber-500 mr-1" />
                              {enquiry.visit_date || "Flexible"}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Subject / Query Header (if general contact) */}
                      {!isAdmission && enquiry.subject && (
                        <div className="text-xs font-semibold text-ocean-800 bg-ocean-50/70 px-3 py-1.5 rounded-lg inline-block border border-ocean-100">
                          Subject: {enquiry.subject}
                        </div>
                      )}

                      {/* Message Content */}
                      {enquiry.message && (
                        <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 leading-relaxed">
                          <p className="font-bold text-[10px] uppercase text-slate-400 tracking-wider mb-1">
                            Notes / Message:
                          </p>
                          <p className="whitespace-pre-wrap">{enquiry.message}</p>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Instant Action Buttons & Status Changer */}
                    <div className="lg:w-64 shrink-0 flex flex-col justify-between pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 space-y-3">
                      {/* One-Click Call / WhatsApp / Mail */}
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Quick Connect:
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={`tel:${cleanPhone}`}
                            className="inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-bold bg-sunshine-400 hover:bg-sunshine-300 text-slate-950 transition-colors shadow-xs"
                          >
                            <Phone className="w-3.5 h-3.5 mr-1.5" />
                            <span>Call</span>
                          </a>

                          <a
                            href={getWhatsAppLink(enquiry)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-bold bg-mint-500 hover:bg-mint-600 text-white transition-colors shadow-xs"
                          >
                            <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                            <span>WhatsApp</span>
                          </a>
                        </div>

                        {enquiry.email && (
                          <a
                            href={`mailto:${enquiry.email}?subject=ASPAL International School Admission Enquiry`}
                            className="w-full inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                          >
                            <Mail className="w-3.5 h-3.5 mr-1.5 text-slate-500" />
                            <span>Send Email</span>
                          </a>
                        )}
                      </div>

                      {/* Status Selector Dropdown */}
                      <div className="pt-2 border-t border-slate-100">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Update Lead Status:
                        </label>
                        <div className="relative">
                          <select
                            value={enquiry.status}
                            disabled={updatingId === enquiry.id}
                            onChange={(e) =>
                              handleStatusChange(enquiry.id, e.target.value as Enquiry["status"])
                            }
                            className="w-full p-2 pr-8 text-xs font-bold rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sunshine-400 cursor-pointer disabled:opacity-50"
                          >
                            <option value="new">🟡 New Lead</option>
                            <option value="contacted">🔵 Contacted / Tour Booked</option>
                            <option value="admitted">🟢 Admitted / Enrolled</option>
                            <option value="closed">⚪ Closed / Archived</option>
                          </select>
                        </div>
                      </div>

                      {/* Delete Action */}
                      <div className="pt-1 flex justify-end">
                        <button
                          onClick={() => handleDelete(enquiry.id, enquiry.name)}
                          disabled={deletingId === enquiry.id}
                          className="text-[11px] font-semibold text-red-500 hover:text-red-700 flex items-center space-x-1 p-1 rounded-md hover:bg-red-50 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Delete record</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </main>
    </div>
  );
}
