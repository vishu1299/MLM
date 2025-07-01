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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";

interface PinData {
  id: string;
  userAdmin: string;
  userAdminSubtext: string;
  batchId: string;
  amount: string;
  creationDate: string;
  creationDateSubtext: string;
}

const mockPins: PinData[] = [
  {
    id: "1",
    userAdmin: "Created via admin",
    userAdminSubtext: "admin",
    batchId: "15885",
    amount: "6 ₦",
    creationDate: "2025-07-01 06:27 AM",
    creationDateSubtext: "1 second ago",
  },
  {
    id: "2",
    userAdmin: "Created via admin",
    userAdminSubtext: "admin",
    batchId: "15884",
    amount: "12 ₦",
    creationDate: "2025-07-01 05:15 AM",
    creationDateSubtext: "1 hour ago",
  },
  {
    id: "3",
    userAdmin: "Created via admin",
    userAdminSubtext: "admin",
    batchId: "15883",
    amount: "25 ₦",
    creationDate: "2025-06-30 11:30 PM",
    creationDateSubtext: "7 hours ago",
  },
  {
    id: "4",
    userAdmin: "Created via admin",
    userAdminSubtext: "admin",
    batchId: "15882",
    amount: "50 ₦",
    creationDate: "2025-06-30 09:45 PM",
    creationDateSubtext: "9 hours ago",
  },
  {
    id: "5",
    userAdmin: "Created via admin",
    userAdminSubtext: "admin",
    batchId: "15881",
    amount: "100 ₦",
    creationDate: "2025-06-30 02:20 PM",
    creationDateSubtext: "16 hours ago",
  },
];

function CreateBatchModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="h-10 border-[#27ACC1] text-[#27ACC1] hover:bg-[#27ACC1] hover:text-white bg-transparent"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Pin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#27ACC1] text-xl font-semibold">
            Create Pin
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-[#27ACC1] font-medium">
              Amount <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="amount"
                placeholder="Enter Amount"
                className="border-[#27ACC1] focus:ring-[#27ACC1] pr-16"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="bg-gray-100 px-3 py-1 rounded text-gray-600 text-sm font-medium">
                  ₦
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="total-pins" className="text-[#27ACC1] font-medium">
              Total Number of Pin <span className="text-red-500">*</span>
            </Label>
            <Input
              id="total-pins"
              placeholder="Enter Number"
              type="number"
              className="border-[#27ACC1] focus:ring-[#27ACC1]"
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button
              className="bg-[#27ACC1] hover:bg-[#27ACC1]/90 text-white px-8 py-2 text-lg w-full"
              onClick={() => setOpen(false)}
            >
              Create
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function PinsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredPins = useMemo(() => {
    return mockPins;
  }, []);

  const totalPages = Math.ceil(filteredPins.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPins = filteredPins.slice(
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
                All Pins
              </h1>
              <p className="text-gray-500 text-sm">Manage pin batches</p>
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
              <CreateBatchModal />
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
                      Batch Id
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Amount
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Pins
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[180px]">
                      Creation Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedPins.map((pin, index) => (
                    <TableRow
                      key={pin.id}
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
                            {pin.userAdmin}
                          </div>
                          <div className="text-sm text-gray-500">
                            {pin.userAdminSubtext}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {pin.batchId}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base">
                          {pin.amount}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <Button
                          size="sm"
                          className="h-8 bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Pins
                        </Button>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900 text-base">
                            {pin.creationDate}
                          </div>
                          <div className="text-sm text-gray-500">
                            {pin.creationDateSubtext}
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
                {Math.min(startIndex + itemsPerPage, filteredPins.length)} of{" "}
                {filteredPins.length} results
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
