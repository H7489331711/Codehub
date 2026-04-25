"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Sidebar from "@/app/component/Sidebar";
import Navbar from "@/app/component/Navbar";

function CoinSync() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      syncCoinsFromDB(session.user.email);
    }
  }, [status, session?.user?.email]);

  return null;
}

async function syncCoinsFromDB(email: string) {
  try {
    const lastSyncedEmail = sessionStorage.getItem("codehub_synced_email");
    if (lastSyncedEmail === email) return;

    const res  = await fetch(`/api/user-coins?email=${encodeURIComponent(email)}`);
    const data = await res.json();

    if (data.found) {
      localStorage.setItem("codehub_coins",  String(data.coins));
      localStorage.setItem("codehub_solved", JSON.stringify(data.solved_list || []));
    } else {
      localStorage.setItem("codehub_coins",  "0");
      localStorage.setItem("codehub_solved", "[]");
    }

    sessionStorage.setItem("codehub_synced_email", email);
  } catch (e) {
    console.error("Coin sync error:", e);
  }
}

function DashboardInner({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Sidebar - sidebarOpen state aur onClose pass ho raha hai */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Navbar ko onMenuClick pass kar rahe hain hamburger ke liye */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CoinSync />
      <DashboardInner>{children}</DashboardInner>
    </SessionProvider>
  );
}