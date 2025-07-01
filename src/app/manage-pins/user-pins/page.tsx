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

interface PinUsageData {
  id: string;
  userAdmin: string;
  userAdminSubtext: string;
  batchId: string;
  amount: string;
  pin: string;
  status: "Used" | "Unused";
  statusSubtext: string;
  creationDate: string;
  creationDateSubtext: string;
}

const mockPinUsage: PinUsageData[] = [
  {
    id: "1",
    userAdmin: "Created via john2025",
    userAdminSubtext: "@john2025",
    batchId: "39436",
    amount: "45 ₦",
    pin: "99521198",
    status: "Used",
    statusSubtext: "1 month ago",
    creationDate: "2025-05-14 08:59 AM",
    creationDateSubtext: "1 month ago",
  },
  {
    id: "2",
    userAdmin: "Created via manager2",
    userAdminSubtext: "@manager2",
    batchId: "67000",
    amount: "330 ₦",
    pin: "22717491",
    status: "Used",
    statusSubtext: "1 month ago",
    creationDate: "2025-05-06 12:38 PM",
    creationDateSubtext: "1 month ago",
  },
  {
    id: "3",
    userAdmin: "Created via debbieberrie",
    userAdminSubtext: "@debbieberrie",
    batchId: "94757",
    amount: "45 ₦",
    pin: "33344677",
    status: "Used",
    statusSubtext: "6 months ago",
    creationDate: "2024-12-30 10:11 AM",
    creationDateSubtext: "6 months ago",
  },
  {
    id: "4",
    userAdmin: "Created via debbieberrie",
    userAdminSubtext: "@debbieberrie",
    batchId: "18092",
    amount: "45 ₦",
    pin: "26352217",
    status: "Used",
    statusSubtext: "6 months ago",
    creationDate: "2024-12-11 05:18 AM",
    creationDateSubtext: "6 months ago",
  },
  {
    id: "5",
    userAdmin: "Created via endy001",
    userAdminSubtext: "@endy001",
    batchId: "89616",
    amount: "45 ₦",
    pin: "21675009",
    status: "Used",
    statusSubtext: "9 months ago",
    creationDate: "2024-09-15 11:50 AM",
    creationDateSubtext: "9 months ago",
  },
];

export default function PinUsageTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredPinUsage = useMemo(() => {
    return mockPinUsage;
  }, []);

  const totalPages = Math.ceil(filteredPinUsage.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPinUsage = filteredPinUsage.slice(
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
                Pin Usage
              </h1>
              <p className="text-gray-500 text-sm">
                Track pin usage and status
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
                  {paginatedPinUsage.map((pinUsage, index) => (
                    <TableRow
                      key={pinUsage.id}
                      className="hover:bg-[#0fa3ba]/5 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-4 px-3">
                        <span className="font-medium text-gray-500 text-base">
                          {startIndex + index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-1">
                          <div className="font-semibold text-gray-900 text-base">
                            {pinUsage.userAdmin}
                          </div>
                          <div className="text-sm text-[#0fa3ba] font-medium cursor-pointer hover:underline">
                            {pinUsage.userAdminSubtext}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {pinUsage.batchId}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base">
                          {pinUsage.amount}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-mono text-gray-900 text-base font-semibold">
                          {pinUsage.pin}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {pinUsage.status}
                          </span>
                          <div className="text-sm text-gray-500">
                            {pinUsage.statusSubtext}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900 text-base">
                            {pinUsage.creationDate}
                          </div>
                          <div className="text-sm text-gray-500">
                            {pinUsage.creationDateSubtext}
                          </div>
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
                {Math.min(startIndex + itemsPerPage, filteredPinUsage.length)}{" "}
                of {filteredPinUsage.length} results
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
