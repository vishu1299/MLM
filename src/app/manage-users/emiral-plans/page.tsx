"use client";

import { useMemo } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  Eye,
  Edit,
  Trash2,
  Download,
  RefreshCw,
  Smartphone,
  MailX,
  ShieldX,
  Clock,
  ArrowUpRight,
  Wallet,
  Users,
  Bell,
} from "lucide-react";

interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  countryCode: string;
  joinedAt: string;
  balance: number;
  emiralPoints: number;
  avatar?: string;
  status: "active" | "inactive" | "suspended";
}

const mockUsers: UserData[] = [
  {
    id: "1",
    name: "dcs cds",
    username: "demodbc",
    email: "adsdmin@gmail.com",
    phone: "9312345673232",
    countryCode: "AF",
    joinedAt: "2024-08-07 07:10 PM",
    balance: 1622.5,
    emiralPoints: 2087,
    status: "active",
  },
  {
    id: "2",
    name: "Wealth munachisom",
    username: "demo001",
    email: "oabire@gmail.com",
    phone: "23409049249255",
    countryCode: "NG",
    joinedAt: "2024-08-07 07:18 PM",
    balance: 2878.84,
    emiralPoints: 19942,
    status: "active",
  },
  {
    id: "3",
    name: "Bisola Iyabo Agbonoga",
    username: "eboonyb",
    email: "iyabobisola@gmail.com",
    phone: "2348128879963",
    countryCode: "NG",
    joinedAt: "2024-12-19 09:43 AM",
    balance: 11.04,
    emiralPoints: 7180,
    status: "active",
  },
  {
    id: "4",
    name: "John Smith",
    username: "johnsmith",
    email: "john.smith@example.com",
    phone: "1234567890",
    countryCode: "US",
    joinedAt: "2024-01-15 02:30 PM",
    balance: 5432.1,
    emiralPoints: 15678,
    status: "active",
  },
  {
    id: "5",
    name: "Maria Garcia",
    username: "mariagarcia",
    email: "maria.garcia@example.com",
    phone: "9876543210",
    countryCode: "ES",
    joinedAt: "2024-03-22 11:45 AM",
    balance: 987.65,
    emiralPoints: 4321,
    status: "inactive",
  },
];

export default function UsersTable() {
  const filteredUsers = useMemo(() => {
    return mockUsers;
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 border-emerald-200">
            Active
          </Badge>
        );
      case "inactive":
        return (
          <Badge className="bg-amber-50 text-amber-700 hover:bg-amber-50 border-amber-200">
            Inactive
          </Badge>
        );
      case "suspended":
        return (
          <Badge className="bg-rose-50 text-rose-700 hover:bg-rose-50 border-rose-200">
            Suspended
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Emiral Plan Users
              </h1>
              <p className="text-gray-600">
                Manage and monitor all users with Emiral plans
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="default"
                className="border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white transition-colors bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button
                variant="outline"
                size="default"
                className="border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white transition-colors bg-transparent"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Status Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
            {/* Mobile Unverified Card */}
            <Card className="group relative bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2 z-20">
                <Badge className="bg-purple-50 text-purple-700 border-purple-200 text-xs px-2 py-0.5">
                  High Priority
                </Badge>
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                      <Smartphone className="w-5 h-5 text-purple-600" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      Mobile Unverified
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">299</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Unverified Card */}
            <Card className="group relative bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2 z-20">
                <Badge className="bg-red-50 text-red-700 border-red-200 text-xs px-2 py-0.5">
                  High Priority
                </Badge>
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                      <MailX className="w-5 h-5 text-red-600" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      Email Unverified
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">247</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* KYC Unverified Card */}
            <Card className="group relative bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2 z-20">
                <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-xs px-2 py-0.5">
                  Action Required
                </Badge>
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                      <ShieldX className="w-5 h-5 text-amber-600" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      KYC Unverified
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">156</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* KYC Pending Card */}
            <Card className="group relative bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0fa3ba]/10 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2 z-20">
                <Badge className="bg-[#0fa3ba]/10 text-[#0fa3ba] border-[#0fa3ba]/20 text-xs px-2 py-0.5">
                  In Progress
                </Badge>
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-[#0fa3ba]/10 rounded-lg group-hover:bg-[#0fa3ba]/20 transition-colors">
                      <Clock className="w-5 h-5 text-[#0fa3ba]" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#0fa3ba] transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      KYC Pending
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">89</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Total Balance Card */}
            <Card className="group relative bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2 z-20">
                <Badge className="bg-green-50 text-green-700 border-green-200 text-xs px-2 py-0.5">
                  Total
                </Badge>
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                      <Wallet className="w-5 h-5 text-green-600" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      Total Balance
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">
                      ₦
                      {filteredUsers
                        .reduce((sum, user) => sum + user.balance, 0)
                        .toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* All Users Card */}
            <Card className="group relative bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2 z-20">
                <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-2 py-0.5">
                  Active
                </Badge>
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      All Users
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">
                      {filteredUsers.length.toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* All Notifications Card */}
            <Card className="group relative bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2 z-20">
                <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200 text-xs px-2 py-0.5">
                  Recent
                </Badge>
              </div>
              <CardContent className="p-4 relative z-10">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                      <Bell className="w-5 h-5 text-indigo-600" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      All Notifications
                    </h3>
                    <div className="text-2xl font-bold text-gray-900">
                      1,247
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Table Card */}
        <Card className="border-gray-200 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl text-gray-800">
                  Users Overview
                </CardTitle>
                <CardDescription className="mt-1">
                  {filteredUsers.length} users found
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="px-3 py-1 bg-[#0fa3ba]/10 text-[#0fa3ba] border-[#0fa3ba]/20"
              >
                Total Balance: ₦
                {filteredUsers
                  .reduce((sum, user) => sum + user.balance, 0)
                  .toLocaleString()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0fa3ba]/5 hover:bg-[#0fa3ba]/5 border-b border-[#0fa3ba]/10">
                    <TableHead className="w-16 py-4 px-2 font-bold text-sm text-gray-700">
                      Serial no.
                    </TableHead>
                    <TableHead className="py-4 px-2 font-bold text-sm text-gray-700 min-w-[240px]">
                      <div className="flex items-center ">
                        <User className="w-5 h-5 mr-2 text-black" />
                        User Details
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-2 font-bold text-sm text-gray-700 min-w-[220px]">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-black" />
                        Contact Information
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-2 font-bold text-sm text-gray-700 min-w-[100px]">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-black" />
                        Country
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-2 font-bold text-sm text-gray-700 min-w-[140px]">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-black" />
                        Joined Date
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-2 font-bold text-sm text-gray-700 min-w-[120px]">
                      <div className="flex items-center">
                        <div className="text-xl mr-2 text-black">₦</div>
                        Balance
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-2 font-bold text-sm text-gray-700 min-w-[140px]">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2 text-black" />
                        Emiral Points
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-2 font-bold text-sm text-gray-700 min-w-[100px]">
                      Status
                    </TableHead>
                    <TableHead className="py-4 px-2 font-bold text-sm text-gray-700 text-center min-w-[140px]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user, index) => (
                    <TableRow
                      key={user.id}
                      className="hover:bg-[#0fa3ba]/5 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-4 px-2">
                        <span className="font-medium text-gray-500">
                          {index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-2">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback className="bg-gradient-to-br from-[#0fa3ba] to-[#0fa3ba]/80 text-white font-semibold text-sm">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="font-semibold text-gray-900 text-sm">
                              {user.name}
                            </div>
                            <div className="text-xs text-[#0fa3ba] font-medium">
                              @{user.username}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-2">
                        <div className="space-y-1">
                          <div className="flex items-center text-xs text-gray-700">
                            <Mail className="w-3 h-3 mr-2 text-[#0fa3ba]/60" />
                            <span className="truncate">{user.email}</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <Phone className="w-3 h-3 mr-2 text-[#0fa3ba]/60" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg"></span>
                          <span className="font-medium text-gray-700 text-sm">
                            {user.countryCode}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-2">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900 text-xs">
                            {user.joinedAt.split(" ")[0]}
                          </div>
                          <div className="text-xs text-gray-500">
                            {user.joinedAt.split(" ").slice(1).join(" ")}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-2">
                        <div className="font-semibold flex gap-1 text-[#0fa3ba] text-sm">
                          <div className="">₦</div>
                          {user.balance.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-[#0fa3ba] fill-current" />
                          <span className="font-semibold text-[#0fa3ba] text-sm">
                            {user.emiralPoints.toLocaleString()}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">
                            EP
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-2">
                        {getStatusBadge(user.status)}
                      </TableCell>
                      <TableCell className="py-4 px-2">
                        <div className="flex items-center justify-center space-x-2">
                          <Button
                            size="sm"
                            className="bg-[#0fa3ba] hover:bg-[#0fa3ba]/90 text-white shadow-sm h-8 px-3 text-xs"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Plans
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 hover:bg-[#0fa3ba]/10"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="w-48 bg-white shadow-lg border"
                            >
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem className="hover:bg-[#0fa3ba]/10">
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-[#0fa3ba]/10">
                                <Edit className="w-4 h-4 mr-2" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600 hover:bg-red-50">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
