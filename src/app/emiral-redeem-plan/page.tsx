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
  Edit,
  Eye,
  EyeOff,
  Plus,
} from "lucide-react";

interface RewardData {
  id: string;
  name: string;
  emiralPoints: string;
  reward: string;
  status: "Enabled" | "Disabled";
}

const mockRewards: RewardData[] = [
  {
    id: "1",
    name: "Travel",
    emiralPoints: "79,200 EP",
    reward: "1,500.00 ₦",
    status: "Disabled",
  },
  {
    id: "2",
    name: "Car",
    emiralPoints: "168,000 EP",
    reward: "4,500.00 ₦",
    status: "Disabled",
  },
  {
    id: "3",
    name: "BRONZE",
    emiralPoints: "2,360 EP",
    reward: "33.00 ₦",
    status: "Enabled",
  },
  {
    id: "4",
    name: "SILVER",
    emiralPoints: "6,200 EP",
    reward: "133.00 ₦",
    status: "Enabled",
  },
  {
    id: "5",
    name: "GOLD",
    emiralPoints: "14,700 EP",
    reward: "400.00 ₦",
    status: "Enabled",
  },
];

function AddRewardModal() {
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
          Add Reward
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#27ACC1] text-xl font-semibold">
            Add Reward
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="reward-name"
                className="text-[#27ACC1] font-medium"
              >
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="reward-name"
                placeholder="Enter reward name"
                className="border-[#27ACC1] focus:ring-[#27ACC1]"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="emiral-points"
                className="text-[#27ACC1] font-medium"
              >
                Emiral Points <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="emiral-points"
                  placeholder="Enter emiral points"
                  className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm">EP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="reward-amount"
                className="text-[#27ACC1] font-medium"
              >
                Reward Amount <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="reward-amount"
                  placeholder="Enter reward amount"
                  className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm">USD</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status" className="text-[#27ACC1] font-medium">
                Status <span className="text-red-500">*</span>
              </Label>
              <select
                id="status"
                className="w-full px-3 py-2 border border-[#27ACC1] rounded-md focus:ring-[#27ACC1] focus:border-[#27ACC1]"
              >
                <option value="Enabled">Enabled</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              className="bg-[#27ACC1] hover:bg-[#27ACC1]/90 text-white px-8 py-2 text-lg"
              onClick={() => setOpen(false)}
            >
              Add Reward
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function RewardsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredRewards = useMemo(() => {
    return mockRewards;
  }, []);

  const totalPages = Math.ceil(filteredRewards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRewards = filteredRewards.slice(
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
                Rewards
              </h1>
              <p className="text-gray-500 text-sm">Manage reward system</p>
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
              <AddRewardModal />
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
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[150px]">
                      Name
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      Emiral Points
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Reward
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Status
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 text-center min-w-[200px]">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedRewards.map((reward, index) => (
                    <TableRow
                      key={reward.id}
                      className="hover:bg-[#0fa3ba]/5 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-4 px-3">
                        <span className="font-medium text-gray-500 text-base">
                          {startIndex + index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base">
                          {reward.name}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {reward.emiralPoints}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {reward.reward}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        {reward.status === "Enabled" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Enabled
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            Disabled
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="flex items-center justify-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          {reward.status === "Enabled" ? (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                            >
                              <EyeOff className="w-4 h-4 mr-1" />
                              Disable
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Enable
                            </Button>
                          )}
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
                {Math.min(startIndex + itemsPerPage, filteredRewards.length)} of{" "}
                {filteredRewards.length} results
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
