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

import { Download, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";

interface UnusedPinData {
  id: string;
  userAdmin: string;
  userAdminSubtext: string;
  batchId: string;
  amount: string;
  pin: string;
  status: "Unused";
  creationDate: string;
  creationDateSubtext: string;
}

// Generate 2000+ pins using the provided pin list
const pinsList = [
  "72587710",
  "48951467",
  "39433573",
  "31806965",
  "92944793",
  "65032847",
  "28908600",
  "26126796",
  "41568460",
  "95465086",
  "18502195",
  "49589675",
  "23185881",
  "98533432",
  "29761068",
  "67786804",
  "19559060",
  "85078425",
  "46892754",
  "66269808",
];

const generateMockUnusedPins = (): UnusedPinData[] => {
  const pins: UnusedPinData[] = [];

  for (let i = 0; i < 2100; i++) {
    pins.push({
      id: (i + 1).toString(),
      userAdmin: "Created via admin",
      userAdminSubtext: "admin",
      batchId: "15885",
      amount: "6 ₦",
      pin: pinsList[i % pinsList.length],
      status: "Unused",
      creationDate: "2025-07-01 07:16 AM",
      creationDateSubtext: "1 hour ago",
    });
  }

  return pins;
};

const mockUnusedPins = generateMockUnusedPins();

export default function UnusedPinsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredUnusedPins = useMemo(() => {
    return mockUnusedPins;
  }, []);

  const totalPages = Math.ceil(filteredUnusedPins.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUnusedPins = filteredUnusedPins.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Generate page numbers for pagination with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Unused Pins
              </h1>
              <p className="text-gray-500 text-sm">
                Track unused pin inventory (
                {filteredUnusedPins.length.toLocaleString()} total pins)
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
          <CardContent className="pt-0">
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#0fa3ba]/5 hover:bg-[#0fa3ba]/5 border-b border-[#0fa3ba]/10">
                    <TableHead className="w-20 py-4 px-3 font-bold text-gray-700">
                      Sr No.
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[200px]">
                      User | Admin
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Batch-id
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Amount
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Pin
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      Status
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[180px]">
                      Creation Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedUnusedPins.map((unusedPin, index) => (
                    <TableRow
                      key={unusedPin.id}
                      className={`transition-colors border-b border-gray-100 ${
                        index % 2 === 0
                          ? "bg-white hover:bg-[#0fa3ba]/5"
                          : "bg-gray-50/50 hover:bg-[#0fa3ba]/5"
                      }`}
                    >
                      <TableCell className="py-4 px-3">
                        <span className="font-medium text-gray-500 text-base">
                          {startIndex + index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-1">
                          <div className="font-semibold text-gray-900 text-base">
                            {unusedPin.userAdmin}
                          </div>
                          <div className="text-sm text-gray-500">
                            {unusedPin.userAdminSubtext}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {unusedPin.batchId}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base">
                          {unusedPin.amount}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-mono text-gray-900 text-base font-semibold">
                          {unusedPin.pin}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            {unusedPin.status}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900 text-base">
                            {unusedPin.creationDate}
                          </div>
                          <div className="text-sm text-gray-500">
                            {unusedPin.creationDateSubtext}
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Enhanced Pagination for 2000+ pages */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500">
                Showing {startIndex + 1} to{" "}
                {Math.min(startIndex + itemsPerPage, filteredUnusedPins.length)}{" "}
                of {filteredUnusedPins.length.toLocaleString()} results (Page{" "}
                {currentPage} of {totalPages.toLocaleString()})
              </div>
              <div className="flex items-center space-x-2">
                {/* First Page */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white disabled:opacity-50"
                >
                  First
                </Button>

                {/* Previous Page */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => (
                  <div key={index}>
                    {page === "..." ? (
                      <span className="px-3 py-1 text-gray-500">...</span>
                    ) : (
                      <Button
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page as number)}
                        className={
                          currentPage === page
                            ? "bg-[#0fa3ba] hover:bg-[#0fa3ba]/90 text-white"
                            : "border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white"
                        }
                      >
                        {page}
                      </Button>
                    )}
                  </div>
                ))}

                {/* Next Page */}
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

                {/* Last Page */}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white disabled:opacity-50"
                >
                  Last
                </Button>
              </div>
            </div>

            {/* Quick Page Jump */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <span className="text-sm text-gray-500">Go to page:</span>
              <input
                type="number"
                min="1"
                max={totalPages}
                value={currentPage}
                onChange={(e) => {
                  const page = Number.parseInt(e.target.value);
                  if (page >= 1 && page <= totalPages) {
                    setCurrentPage(page);
                  }
                }}
                className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0fa3ba] focus:border-[#0fa3ba]"
              />
              <span className="text-sm text-gray-500">
                of {totalPages.toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
