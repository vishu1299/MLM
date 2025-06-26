import { Bell, Search, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-6 py-6 mt-2 flex items-center justify-between">
      <div />

      {/* Right: Search + User Info */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-[#2C2C2C] text-black"
          />
        </div>

        {/* Notification + User */}
        <span className="text-[24px] font-medium text-gray-700">
          Hello, Darrell
        </span>
        <Bell className="w-5 h-5 text-gray-600" />
        <UserCircle className="w-8 h-8 text-gray-700" />
      </div>
    </header>
  );
}
