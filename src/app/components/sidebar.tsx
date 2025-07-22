"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUsers,
  FaChartLine,
  FaDollarSign,
  FaUserFriends,
  FaShoppingCart,
  FaBoxes,
  FaClipboardList,
  FaCalendarAlt,
  FaKey,
  FaCreditCard,
  FaUniversity,
  FaHeadset,
  FaChartBar,
  FaUserCheck,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaBars,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaRegCircleDot } from "react-icons/fa6";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  hasSubmenu?: boolean;
  submenuItems?: { id: string; label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: FaHome,
    href: "/dashboard",
  },
  {
    id: "manage-users",
    label: "Manage Users",
    icon: FaUsers,
    href: "/manage-users",
    hasSubmenu: true,
    submenuItems: [
      {
        id: "active-users",
        label: "Active Users",
        href: "/manage-users/active-users",
      },
      {
        id: "users-emiral-plans",
        label: "Users Emiral Plans",
        href: "/manage-users/emiral-plans",
      },
      {
        id: "banned-users",
        label: "Banned Users",
        href: "/manage-users/banned",
      },

      // {
      //   id: "with-balance",
      //   label: "With Balance",
      //   href: "/manage-users/with-balance",
      // },
      // { id: "all-users", label: "All Users", href: "/manage-users/all" },
      // {
      //   id: "all-notifications",
      //   label: "All Notifications",
      //   href: "/manage-users/notifications",
      // },
    ],
  },
  {
    id: "user-rank",
    label: "User Rank",
    icon: FaChartLine,
    href: "/rank",
  },
  {
    id: "add-ep",
    label: "Add EP",
    icon: FaDollarSign,
    href: "/user-ep",
  },
  {
    id: "referrals",
    label: "Referrals",
    icon: FaUserFriends,
    href: "/referrals",
  },
  {
    id: "orders",
    label: "Orders",
    icon: FaShoppingCart,
    href: "/orders",
  },
  {
    id: "product",
    label: "Product",
    icon: FaBoxes,
    href: "/product",
  },
  {
    id: "plan",
    label: "Plan",
    icon: FaClipboardList,
    href: "/plan",
  },
  {
    id: "emiral-redeem-plan",
    label: "Emiral Redeem Plan",
    icon: FaCalendarAlt,
    href: "/emiral-redeem-plan",
  },
  {
    id: "manage-pins",
    label: "Manage Pins",
    icon: FaKey,
    href: "/manage-pins",
    hasSubmenu: true,
    submenuItems: [
      { id: "create-pin", label: "All Pins", href: "/manage-pins/create" },
      {
        id: "pin-history",
        label: "User Pins",
        href: "/manage-pins/user-pins",
      },
      {
        id: "pin-settings",
        label: "Admin Pins",
        href: "/manage-pins/admin-pins",
      },
    ],
  },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleSubmenu = (menuId: string) => {
    if (expandedMenu === menuId) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menuId);
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setExpandedMenu(null);
  };

  if (isCollapsed) {
    return (
      <div className="w-18 bg-white h-screen flex flex-col border-r border-gray-200 shadow-sm transition-all duration-300 ease-in-out">
        <div className="p-4 border-b border-gray-100 flex items-center justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100"
          >
            <FaBars className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-3">
          <nav className="px-2 space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="group relative">
                  <Link href={item.href}>
                    <button
                      onClick={() => setActiveItem(item.id)}
                      className={cn(
                        "w-full flex items-center justify-center p-3 rounded-lg transition-all duration-200",
                        activeItem === item.id
                          ? "bg-gradient-to-r from-[#e1fdff] to-white shadow-sm"
                          : "hover:bg-gray-50"
                      )}
                    >
                      <IconComponent
                        className={cn(
                          "w-4 h-4 flex-shrink-0",
                          activeItem === item.id
                            ? "text-gray-800"
                            : "text-gray-600"
                        )}
                      />
                    </button>
                  </Link>
                  {/* Tooltip */}
                  <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }

  return (
    <div className="w-72 bg-white h-screen flex flex-col border-r border-gray-200 shadow-sm transition-all duration-300 ease-in-out">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/assets/image/logo/logo.jpg"
            alt="Logo"
            width={130}
            height={130}
            className="mr-2"
          />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <FaChevronLeft className="w-4 h-4 text-gray-500" />
        </Button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isExpanded = expandedMenu === item.id;

            return (
              <div key={index} className="mb-2">
                {item.hasSubmenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group",
                        activeItem === item.id
                          ? "bg-gradient-to-r from-[#e1fdff] to-white text-gray-800 shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent
                          className={cn(
                            "w-4 h-4 flex-shrink-0",
                            activeItem === item.id
                              ? "text-gray-800"
                              : "text-gray-600"
                          )}
                        />
                        <span className="text-left font-medium">
                          {item.label}
                        </span>
                      </div>
                      {isExpanded ? (
                        <FaChevronUp className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      )}
                    </button>

                    {/* Submenu */}
                    {isExpanded &&
                      item.submenuItems &&
                      item.submenuItems.length > 0 && (
                        <div className="mt-2 ml-8 space-y-1">
                          {item.submenuItems.map((subItem) => (
                            <Link key={subItem.id} href={subItem.href}>
                              <button
                                onClick={() => setActiveItem(subItem.id)}
                                className={cn(
                                  "w-full flex gap-2 items-center px-4 py-2.5 text-sm rounded-lg transition-colors duration-200 group",
                                  activeItem === subItem.id
                                    ? "bg-gradient-to-r from-[#e1fdff] to-white text-emerald-700 font-medium"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                )}
                              >
                                <FaRegCircleDot />
                                <span className="text-left">
                                  {subItem.label}
                                </span>
                              </button>
                            </Link>
                          ))}
                        </div>
                      )}
                  </>
                ) : (
                  <Link href={item.href}>
                    <button
                      onClick={() => setActiveItem(item.id)}
                      className={cn(
                        "w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                        activeItem === item.id
                          ? "bg-gradient-to-r from-[#e1fdff] to-white text-gray-800 shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      <IconComponent
                        className={cn(
                          "w-4 h-4 mr-3 flex-shrink-0",
                          activeItem === item.id
                            ? "text-gray-800"
                            : "text-gray-600"
                        )}
                      />
                      <span className="text-left font-medium">
                        {item.label}
                      </span>
                    </button>
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
