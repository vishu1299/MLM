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
  ChevronLeft,
  ChevronRight,
  Ban,
  UserCheck,
} from "lucide-react";

interface BannedUserData {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  countryCode: string;
  joinedAt: string;
  timeAgo: string;
  balance: number;
  emiralPoints: number;
  avatar?: string;
  banReason?: string;
  bannedDate: string;
}

const mockBannedUsers: BannedUserData[] = [
  {
    id: "1",
    name: "group point 4 teshi",
    username: "grouppoint4teshi",
    email: "grouppoint4@gmail.com",
    phone: "2341123123",
    countryCode: "NG",
    joinedAt: "2025-06-23 09:47 AM",
    timeAgo: "2 days ago",
    balance: 0.0,
    emiralPoints: 1200,
    banReason: "Violation of terms",
    bannedDate: "2025-06-25",
  },
  {
    id: "2",
    name: "Giovanni Etim",
    username: "lemgvanny",
    email: "ifeoluwag@gmail.com",
    phone: "23470685785",
    countryCode: "NG",
    joinedAt: "2025-06-18 01:05 PM",
    timeAgo: "1 week ago",
    balance: 0.0,
    emiralPoints: 52,
    banReason: "Spam activity",
    bannedDate: "2025-06-20",
  },
  {
    id: "3",
    name: "Groupp Point",
    username: "grouppoint10",
    email: "grouppoint10@gmail.com",
    phone: "2341010",
    countryCode: "NG",
    joinedAt: "2025-06-17 02:44 AM",
    timeAgo: "1 week ago",
    balance: 0.0,
    emiralPoints: 1391,
    banReason: "Fraudulent activity",
    bannedDate: "2025-06-19",
  },
  {
    id: "4",
    name: "Groupp Groupp",
    username: "grouppoint19",
    email: "grouppoint19@gmail.com",
    phone: "2345454",
    countryCode: "NG",
    joinedAt: "2025-06-17 02:27 AM",
    timeAgo: "1 week ago",
    balance: 0.0,
    emiralPoints: 1391,
    banReason: "Multiple accounts",
    bannedDate: "2025-06-19",
  },
  {
    id: "5",
    name: "Group Point",
    username: "grouppoint18",
    email: "grouppoint18@gmail.com",
    phone: "23422222",
    countryCode: "NG",
    joinedAt: "2025-06-17 01:10 AM",
    timeAgo: "1 week ago",
    balance: 0.0,
    emiralPoints: 1391,
    banReason: "Suspicious behavior",
    bannedDate: "2025-06-19",
  },
  {
    id: "6",
    name: "Gloria Efua Japhet",
    username: "efualola1",
    email: "apple4me_you@yahoo.com",
    phone: "23409025676085",
    countryCode: "NG",
    joinedAt: "2025-06-05 10:12 PM",
    timeAgo: "2 weeks ago",
    balance: 0.0,
    emiralPoints: 52,
    banReason: "Policy violation",
    bannedDate: "2025-06-10",
  },
  {
    id: "7",
    name: "Harrian Osamiha",
    username: "harryman2",
    email: "bgct159@gmail.com",
    phone: "23480750981144",
    countryCode: "NG",
    joinedAt: "2025-06-04 02:47 PM",
    timeAgo: "3 weeks ago",
    balance: 0.0,
    emiralPoints: 65,
    banReason: "Inappropriate content",
    bannedDate: "2025-06-08",
  },
];

export default function BannedUsersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredUsers = useMemo(() => {
    return mockBannedUsers;
  }, []);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Banned Users
              </h1>
              <p className="text-gray-500 text-lg">
                Manage and monitor banned user accounts
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="default"
                className="h-10 border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button
                variant="outline"
                size="default"
                className="h-10 border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white bg-transparent"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Table Card */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl text-gray-800">
                  Banned Users List
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {filteredUsers.length} banned users found
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="text-sm px-4 py-2 bg-red-50 text-red-700 border-red-200"
              >
                Total EP Lost:{" "}
                {mockBannedUsers
                  .reduce((sum, user) => sum + user.emiralPoints, 0)
                  .toLocaleString()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0fa3ba]/5 hover:bg-[#0fa3ba]/5 border-b border-[#0fa3ba]/10">
                    <TableHead className="w-20 py-4 px-3 font-semibold text-gray-700">
                      #
                    </TableHead>
                    <TableHead className="py-4 px-3 font-semibold text-gray-700 min-w-[240px]">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-[#0fa3ba]" />
                        User
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-semibold text-gray-700 min-w-[220px]">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-[#0fa3ba]" />
                        Email-Phone
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-semibold text-gray-700 min-w-[100px]">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-[#0fa3ba]" />
                        Country
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-semibold text-gray-700 min-w-[140px]">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-[#0fa3ba]" />
                        Joined At
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-semibold text-gray-700 min-w-[100px]">
                      <div className="flex items-center">Balance (₦)</div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-semibold text-gray-700 min-w-[120px]">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-[#0fa3ba]" />
                        Emiral Points
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-semibold text-gray-700 text-center min-w-[100px]">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedUsers.map((user, index) => (
                    <TableRow
                      key={user.id}
                      className="hover:bg-[#0fa3ba]/5 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-4 px-3">
                        <span className="font-medium text-gray-500 text-base">
                          {startIndex + index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="flex items-center space-x-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage
                              src={user.avatar || "/placeholder.svg"}
                            />
                            <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-500 text-white font-semibold">
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
                            <div className="text-sm text-red-500 font-medium">
                              @{user.username}
                            </div>
                            <Badge className="bg-red-50 text-red-700 border-red-200 text-xs">
                              <Ban className="w-3 h-3 mr-1" />
                              Banned
                            </Badge>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <Mail className="w-4 h-4 mr-3 text-[#0fa3ba]/60" />
                            <span className="truncate">{user.email}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="w-4 h-4 mr-3 text-[#0fa3ba]/60" />
                            <span>{user.phone}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">
                            {user.countryCode}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900 text-sm">
                            {user.joinedAt.split(" ")[0]}
                          </div>
                          <div className="text-xs text-gray-500">
                            {user.timeAgo}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-600 text-base">
                          ₦{user.balance.toFixed(2)}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {user.emiralPoints.toLocaleString()} EP
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="flex items-center justify-center space-x-2">
                          <Button
                            size="sm"
                            className="bg-[#0fa3ba] hover:bg-[#0fa3ba]/90 text-white h-9 px-4"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-9 w-9 p-0 hover:bg-[#0fa3ba]/10"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem className="hover:bg-[#0fa3ba]/10">
                                <Eye className="w-4 h-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-green-50 text-green-600">
                                <UserCheck className="w-4 h-4 mr-2" />
                                Unban User
                              </DropdownMenuItem>
                              <DropdownMenuItem className="hover:bg-[#0fa3ba]/10">
                                <Edit className="w-4 h-4 mr-2" />
                                Edit Ban Reason
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600 hover:bg-red-50">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete Account
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

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500">
                Showing {startIndex + 1} to{" "}
                {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{" "}
                {filteredUsers.length} results
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={
                        currentPage === page
                          ? "bg-[#0fa3ba] hover:bg-[#0fa3ba]/90 text-white"
                          : "border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white"
                      }
                    >
                      {page}
                    </Button>
                  )
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
