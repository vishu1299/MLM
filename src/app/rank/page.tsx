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
  Trophy,
  Star,
  Eye,
  Edit,
  Trash2,
  Download,
  RefreshCw,
  Award,
  Crown,
  Medal,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { AddRankModal } from "./components/modal";

interface UserRankData {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  rank: "Platinum" | "Gold" | "Silver" | "Bronze";
  groupPoints: number;
  personalPoints: number;
  avatar?: string;
}

const mockUserRanks: UserRankData[] = [
  {
    id: "1",
    name: "Edikan Ekanem",
    username: "didyvictor",
    email: "didyvictor@gmail.com",
    phone: "23408128094992",
    rank: "Platinum",
    groupPoints: 20119.28,
    personalPoints: 9031.1,
  },
  {
    id: "2",
    name: "ANARO OREZIEMENA",
    username: "endy001",
    email: "excellentangel01@gmail.com",
    phone: "23408063292487",
    rank: "Gold",
    groupPoints: 18783.13,
    personalPoints: 6440.2,
  },
  {
    id: "3",
    name: "Patience Otasowie",
    username: "patty2",
    email: "patsowie23@gmail.com",
    phone: "2348032599073",
    rank: "Gold",
    groupPoints: 12392.07,
    personalPoints: 5638.1,
  },
  {
    id: "4",
    name: "charity Anayo-Winner",
    username: "charitywin",
    email: "charitywinner291@gmail.com",
    phone: "23408065925908",
    rank: "Gold",
    groupPoints: 12507.06,
    personalPoints: 4319.9,
  },
  {
    id: "5",
    name: "cdsdc dcsdc",
    username: "demo01",
    email: "admin@gmail.com",
    phone: "931234567885",
    rank: "Bronze",
    groupPoints: 4263.48,
    personalPoints: 3000.0,
  },
  {
    id: "6",
    name: "deborah Eugene",
    username: "debbieberrie",
    email: "d_abikure06@yahoo.com",
    phone: "23409043759577",
    rank: "Bronze",
    groupPoints: 2630.31,
    personalPoints: 3493.0,
  },
  {
    id: "7",
    name: "UYO MARY",
    username: "uyomary1",
    email: "uyo.mary2603@gmail.com",
    phone: "23407036234751",
    rank: "Silver",
    groupPoints: 329.7,
    personalPoints: 56.0,
  },
];

export default function UserRankTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddRankModalOpen, setIsAddRankModalOpen] = useState(false);
  const itemsPerPage = 10;

  const filteredUsers = useMemo(() => {
    return mockUserRanks;
  }, []);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getRankBadge = (rank: string) => {
    switch (rank) {
      case "Platinum":
        return (
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full">
              <Crown className="w-5 h-5 text-purple-600" />
            </div>
            <Badge className="bg-purple-50 text-purple-700 hover:bg-purple-50 border-purple-200 font-semibold">
              Platinum
            </Badge>
          </div>
        );
      case "Gold":
        return (
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full">
              <Trophy className="w-5 h-5 text-yellow-600" />
            </div>
            <Badge className="bg-yellow-50 text-yellow-700 hover:bg-yellow-50 border-yellow-200 font-semibold">
              Gold
            </Badge>
          </div>
        );
      case "Silver":
        return (
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full">
              <Award className="w-5 h-5 text-gray-600" />
            </div>
            <Badge className="bg-gray-50 text-gray-700 hover:bg-gray-50 border-gray-200 font-semibold">
              Silver
            </Badge>
          </div>
        );
      case "Bronze":
        return (
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full">
              <Medal className="w-5 h-5 text-orange-600" />
            </div>
            <Badge className="bg-orange-50 text-orange-700 hover:bg-orange-50 border-orange-200 font-semibold">
              Bronze
            </Badge>
          </div>
        );
      default:
        return <Badge variant="secondary">{rank}</Badge>;
    }
  };

  const getRankIcon = (rank: string) => {
    switch (rank) {
      case "Platinum":
        return "👑";
      case "Gold":
        return "🏆";
      case "Silver":
        return "🥈";
      case "Bronze":
        return "🥉";
      default:
        return "🏅";
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                User Rank
              </h1>
              <p className="text-gray-500 text-lg">
                Monitor user rankings and achievement levels
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => setIsAddRankModalOpen(true)}
                className="h-10 bg-[#0fa3ba] hover:bg-[#0fa3ba]/90 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Rank
              </Button>
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

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#0fa3ba]/5 to-[#0fa3ba]/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Crown className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Platinum</p>
                    <p className="text-2xl font-bold text-[#0fa3ba]">
                      {
                        mockUserRanks.filter((u) => u.rank === "Platinum")
                          .length
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#0fa3ba]/5 to-[#0fa3ba]/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Gold</p>
                    <p className="text-2xl font-bold text-[#0fa3ba]">
                      {mockUserRanks.filter((u) => u.rank === "Gold").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#0fa3ba]/5 to-[#0fa3ba]/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    <Award className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Silver</p>
                    <p className="text-2xl font-bold text-[#0fa3ba]">
                      {mockUserRanks.filter((u) => u.rank === "Silver").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#0fa3ba]/5 to-[#0fa3ba]/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Medal className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bronze</p>
                    <p className="text-2xl font-bold text-[#0fa3ba]">
                      {mockUserRanks.filter((u) => u.rank === "Bronze").length}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Table Card */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl text-gray-800">
                  User Rankings
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {filteredUsers.length} users found
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="text-sm px-4 py-2 bg-[#0fa3ba]/10 text-[#0fa3ba] border-[#0fa3ba]/20"
              >
                Total Points:{" "}
                {mockUserRanks
                  .reduce((sum, user) => sum + user.groupPoints, 0)
                  .toLocaleString()}{" "}
                EP
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0fa3ba]/5 hover:bg-[#0fa3ba]/5 border-b border-[#0fa3ba]/10">
                    <TableHead className="w-20 py-4 px-3 font-bold text-gray-700">
                      Serial no.
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[240px]">
                      <div className="flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        User Details
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[220px]">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 mr-2 " />
                        Email-Phone
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      <div className="flex items-center">
                        <Trophy className="w-5 h-5 mr-2" />
                        Badge
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 mr-2 " />
                        Rank
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        Group Points
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2 " />
                        Personal Points
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 text-center min-w-[100px]">
                      Actions
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
                            <AvatarFallback className="bg-gradient-to-br from-[#0fa3ba] to-[#0fa3ba]/80 text-white font-semibold">
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
                            <div className="text-sm text-[#0fa3ba] font-medium">
                              @{user.username}
                            </div>
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
                        <div className="flex items-center justify-center">
                          <span className="text-3xl">
                            {getRankIcon(user.rank)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        {getRankBadge(user.rank)}
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {user.groupPoints.toLocaleString()} EP
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {user.personalPoints.toLocaleString()} EP
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
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
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-[#0fa3ba]/10">
                              <Edit className="w-4 h-4 mr-2" />
                              Edit Rank
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 hover:bg-red-50">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Remove User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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

        {/* Add Rank Modal */}
        <AddRankModal
          isOpen={isAddRankModalOpen}
          onClose={() => setIsAddRankModalOpen(false)}
        />
      </div>
    </div>
  );
}
