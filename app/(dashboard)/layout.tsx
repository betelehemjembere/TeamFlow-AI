"use client";

import { useState, type ReactNode } from "react";
import { Sidebar } from "@/src/components/sidebar";
import { TopNavbar } from "@/src/components/top-navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="lg:pl-64">
        <TopNavbar onMenuClick={() => setMobileOpen(true)} />

        <main className="p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
