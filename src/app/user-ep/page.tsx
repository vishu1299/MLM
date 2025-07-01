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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  User,
  Star,
  Edit,
  Trash2,
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface UserRankData {
  id: string;
  username: string;
  emiralPoints: number;
}

const mockUserRanks: UserRankData[] = [
  {
    id: "1",
    username: "demo01",
    emiralPoints: 3000,
  },
  {
    id: "2",
    username: "demoabc",
    emiralPoints: 2087,
  },
  {
    id: "3",
    username: "demo001",
    emiralPoints: 19942,
  },
  {
    id: "4",
    username: "emeka01",
    emiralPoints: 0,
  },
  {
    id: "5",
    username: "debbieberrie",
    emiralPoints: 3412,
  },
  {
    id: "6",
    username: "flozzymore",
    emiralPoints: 1737,
  },
  {
    id: "7",
    username: "uyomary1",
    emiralPoints: 1612,
  },
  {
    id: "8",
    username: "endy001",
    emiralPoints: 8000,
  },
  {
    id: "9",
    username: "bishop12",
    emiralPoints: 325,
  },
  {
    id: "10",
    username: "omohlove93",
    emiralPoints: 52,
  },
];

export default function UserRankTable() {
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                User EP
              </h1>
              <p className="text-gray-500 text-sm">Monitor user EP</p>
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
          <CardContent className="pt-0">
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0fa3ba]/5 hover:bg-[#0fa3ba]/5 border-b border-[#0fa3ba]/10">
                    <TableHead className="w-20 py-4 px-3 font-bold text-gray-700">
                      Sr No.
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[240px]">
                      <div className="flex items-center">
                        <User className="w-5 h-5 mr-2 text-black" />
                        Username
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 mr-2 " />
                        Emiral Points
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 text-center min-w-[200px]">
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
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          @{user.username}
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
                            className="h-8 border border-blue-600 text-blue-600"
                            variant="outline"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border border-red-600 text-red-600"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Reset
                          </Button>
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
