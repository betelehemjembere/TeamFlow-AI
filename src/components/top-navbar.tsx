"use client";

import {
  Bell,
  Menu,
  Search,
} from "lucide-react";

interface TopNavbarProps {
  onMenuClick?: () => void;
}


export function TopNavbar({ onMenuClick }: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 dark:bg-gray-950 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 hover:bg-gray-100 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative hidden w-64 md:block lg:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-full rounded-md border bg-gray-50 pl-9 pr-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400 dark:bg-gray-900"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="relative rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-900"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-600" />
        </button>

        <button className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
          BJ
        </button>
      </div>
    </header>
  );
}