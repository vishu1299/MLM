"use client";

import { useState, useMemo } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Search,
  Filter,
  MoreHorizontal,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Eye,
  Edit,
  Trash2,
  Download,
  RefreshCw,
} from "lucide-react";

interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  country: string;
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
    country: "Afghanistan",
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
    country: "Nigeria",
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
    country: "Nigeria",
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
    country: "United States",
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
    country: "Spain",
    countryCode: "ES",
    joinedAt: "2024-03-22 11:45 AM",
    balance: 987.65,
    emiralPoints: 4321,
    status: "inactive",
  },
];

export default function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    return mockUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCountry =
        countryFilter === "all" || user.countryCode === countryFilter;
      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      return matchesSearch && matchesCountry && matchesStatus;
    });
  }, [searchTerm, countryFilter, statusFilter]);

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

  const getCountryFlag = (countryCode: string) => {
    const flags: { [key: string]: string } = {
      AF: "🇦🇫",
      NG: "🇳🇬",
      US: "🇺🇸",
      ES: "🇪🇸",
    };
    return flags[countryCode] || "🌍";
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Emiral Plan Users
              </h1>
              <p className="text-gray-600">
                Manage and monitor all users with Emiral plans
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="default" className="h-10">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="default" className="h-10">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Filters Card */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl flex items-center text-gray-800">
                <Filter className="w-5 h-5 mr-3 text-gray-600" />
                Filters & Search
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search by username, name, or email..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-12 h-12 text-base border-gray-200 focus:border-gray-300"
                    />
                  </div>
                </div>
                <Select value={countryFilter} onValueChange={setCountryFilter}>
                  <SelectTrigger className="w-full lg:w-56 h-12 border-gray-200">
                    <SelectValue placeholder="Filter by country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    <SelectItem value="AF">🇦🇫 Afghanistan</SelectItem>
                    <SelectItem value="NG">🇳🇬 Nigeria</SelectItem>
                    <SelectItem value="US">🇺🇸 United States</SelectItem>
                    <SelectItem value="ES">🇪🇸 Spain</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full lg:w-56 h-12 border-gray-200">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table Card */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl text-gray-800">
                  Users Overview
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {filteredUsers.length} users found
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="text-sm px-4 py-2 bg-gray-50 text-gray-700"
              >
                Total Balance: $
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
                  <TableRow className="bg-gray-50/50 hover:bg-gray-50/50 border-b border-gray-200">
                    <TableHead className="w-20 py-6 px-6 font-semibold text-gray-700">
                      #
                    </TableHead>
                    <TableHead className="py-6 px-6 font-semibold text-gray-700 min-w-[280px]">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-500" />
                        User Details
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 font-semibold text-gray-700 min-w-[260px]">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-500" />
                        Contact Information
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 font-semibold text-gray-700 min-w-[160px]">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                        Country
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 font-semibold text-gray-700 min-w-[180px]">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        Joined Date
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 font-semibold text-gray-700 min-w-[140px]">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                        Balance
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 font-semibold text-gray-700 min-w-[160px]">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-gray-500" />
                        Emiral Points
                      </div>
                    </TableHead>
                    <TableHead className="py-6 px-6 font-semibold text-gray-700 min-w-[120px]">
                      Status
                    </TableHead>
                    <TableHead className="py-6 px-6 font-semibold text-gray-700 text-center min-w-[160px]">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user, index) => (
                    <TableRow
                      key={user.id}
                      className="hover:bg-gray-50/30 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-6 px-6">
                        <span className="font-medium text-gray-500 text-base">
                          {index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback className="bg-gradient-to-br from-green-400 to-green-300 text-white font-semibold">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="font-semibold text-gray-900 text-base">
                              {user.name}
                            </div>
                            <div className="text-sm text-green-400 font-medium">
                              @{user.username}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <Mail className="w-4 h-4 mr-3 text-gray-400" />
                            <span className="truncate">{user.email}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="w-4 h-4 mr-3 text-gray-400" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">
                            {getCountryFlag(user.countryCode)}
                          </span>
                          <span className="font-medium text-gray-700">
                            {user.country}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {user.joinedAt.split(" ")[0]}
                          </div>
                          <div className="text-xs text-gray-500">
                            {user.joinedAt.split(" ").slice(1).join(" ")}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <div className="font-semibold text-emerald-600 text-base">
                          ${user.balance.toLocaleString()}
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-amber-400 fill-current" />
                          <span className="font-semibold text-indigo-600 text-base">
                            {user.emiralPoints.toLocaleString()}
                          </span>
                          <span className="text-xs text-gray-500 font-medium">
                            EP
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        {getStatusBadge(user.status)}
                      </TableCell>
                      <TableCell className="py-6 px-6">
                        <div className="flex items-center justify-center space-x-2">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#e1fdff] to-white text-green-600 shadow-sm h-9 px-4 flex gap-2"
                          >
                            <Eye className="w-4 h-4 my-auto" />
                            Plans
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-9 w-9 p-0"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
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
