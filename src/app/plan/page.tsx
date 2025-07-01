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
  Settings,
  Plus,
} from "lucide-react";

interface PackageData {
  id: string;
  name: string;
  amount: string;
  emiralPoints: string;
  referralBonus: string;
  bottles: number;
  benefitLoss: string;
  status: "Enabled" | "Disabled";
}

const mockPackages: PackageData[] = [
  {
    id: "1",
    name: "Starter Package",
    amount: "45.00 ₦",
    emiralPoints: "45.00 EP",
    referralBonus: "0.00 ₦",
    bottles: 3,
    benefitLoss: "Admin Benefit 33.00 ₦",
    status: "Enabled",
  },
  {
    id: "2",
    name: "SMALL BUSINESS PACKAGE",
    amount: "100.00 ₦",
    emiralPoints: "115.00 EP",
    referralBonus: "0.00 ₦",

    bottles: 8,
    benefitLoss: "Admin Benefit 88.00 ₦",
    status: "Enabled",
  },
  {
    id: "3",
    name: "Big Business",
    amount: "250.00 ₦",
    emiralPoints: "290.00 EP",
    referralBonus: "0.00 ₦",
    bottles: 21,
    benefitLoss: "Admin Benefit 238.00 ₦",
    status: "Enabled",
  },
  {
    id: "4",
    name: "emi",
    amount: "32.00 ₦",
    emiralPoints: "23.00 EP",
    referralBonus: "0.00 ₦",
    bottles: 23,
    benefitLoss: "Admin Benefit 31.95 ₦",
    status: "Disabled",
  },
  {
    id: "5",
    name: "INVESTOR PLUS PACKAGE",
    amount: "1,000.00 ₦",
    emiralPoints: "1,200.00 EP",
    referralBonus: "0.00 ₦",
    bottles: 90,
    benefitLoss: "Admin Benefit 1,000.00 ₦",
    status: "Enabled",
  },
  {
    id: "6",
    name: "Business pack Cameroon",
    amount: "1,080.00 ₦",
    emiralPoints: "702.00 EP",
    referralBonus: "0.00 ₦",
    bottles: 54,
    benefitLoss: "Admin Benefit 1,080.00 ₦",
    status: "Enabled",
  },
  {
    id: "7",
    name: "INVESTOR PACKAGE (cameroon)",
    amount: "2,040.00 ₦",
    emiralPoints: "1,326.00 EP",
    referralBonus: "0.00 ₦",
    bottles: 102,
    benefitLoss: "Admin Benefit 2,040.00 ₦",
    status: "Enabled",
  },
  {
    id: "8",
    name: "SMALL BUSINESS (Cameroon)",
    amount: "300.00 ₦",
    emiralPoints: "195.00 EP",
    referralBonus: "0.00 ₦",
    bottles: 15,
    benefitLoss: "Admin Benefit 299.99 ₦",
    status: "Enabled",
  },
  {
    id: "9",
    name: "Mini package",
    amount: "13.00 ₦",
    emiralPoints: "13.00 EP",
    referralBonus: "0.00 ₦",
    bottles: 1,
    benefitLoss: "Admin Benefit 11.94 ₦",
    status: "Enabled",
  },
];

function MatrixSettingModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="h-10 border-[#0fa3ba] text-[#0fa3ba] hover:bg-[#0fa3ba] hover:text-white bg-transparent"
        >
          <Settings className="w-4 h-4 mr-2" />
          Matrix Setting
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#27ACC1] text-xl font-semibold">
            Matrix Setting Update
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-2">
            <Label
              htmlFor="matrix-height"
              className="text-[#27ACC1] font-medium"
            >
              Matrix Height <span className="text-red-500">*</span>
            </Label>
            <Input
              id="matrix-height"
              placeholder="7"
              defaultValue="7"
              type="number"
              className="border-[#27ACC1] focus:ring-[#27ACC1]"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="matrix-width"
              className="text-[#27ACC1] font-medium"
            >
              Matrix Width <span className="text-red-500">*</span>
            </Label>
            <Input
              id="matrix-width"
              placeholder="10"
              defaultValue="10"
              type="number"
              className="border-[#27ACC1] focus:ring-[#27ACC1]"
            />
          </div>
          <div className="flex justify-center pt-4">
            <Button
              className="bg-[#27ACC1] hover:bg-[#27ACC1]/90 text-white px-8 py-2 text-lg w-full"
              onClick={() => setOpen(false)}
            >
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function AddPlanModal() {
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
          Add Plan
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#27ACC1] text-xl font-semibold">
            Plan Create
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {/* Name and Price */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="plan-name" className="text-[#27ACC1] font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="plan-name"
                placeholder="Enter plan name"
                className="border-[#27ACC1] focus:ring-[#27ACC1]"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="plan-price"
                className="text-[#27ACC1] font-medium"
              >
                Price <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="plan-price"
                  placeholder="Enter price"
                  className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Tiers 1-10 */}
          <div className="grid grid-cols-2 gap-6">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="space-y-2">
                <Label
                  htmlFor={`referral-tier-${i + 1}`}
                  className="text-[#27ACC1] font-medium"
                >
                  Referral Tier {i + 1} <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id={`referral-tier-${i + 1}`}
                    placeholder="Enter percentage"
                    className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 text-sm">%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emiral Points and Bottles */}
          <div className="grid grid-cols-2 gap-6">
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
            <div className="space-y-2">
              <Label htmlFor="bottles" className="text-[#27ACC1] font-medium">
                Bottles <span className="text-red-500">*</span>
              </Label>
              <Input
                id="bottles"
                placeholder="Enter number of bottles"
                type="number"
                className="border-[#27ACC1] focus:ring-[#27ACC1]"
              />
            </div>
          </div>

          {/* Level Commissions */}
          <div className="space-y-4">
            <h3 className="text-[#27ACC1] text-lg font-semibold">
              Level Commissions
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {Array.from({ length: 7 }, (_, i) => (
                <div key={i} className="space-y-2">
                  <Label
                    htmlFor={`level-${i + 1}`}
                    className="text-[#27ACC1] font-medium"
                  >
                    Level {i + 1} <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id={`level-${i + 1}`}
                      placeholder="Enter percentage"
                      className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-500 text-sm">%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              className="bg-[#27ACC1] hover:bg-[#27ACC1]/90 text-white px-8 py-2 text-lg w-full"
              onClick={() => setOpen(false)}
            >
              Plan Create
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function PackagesTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredPackages = useMemo(() => {
    return mockPackages;
  }, []);

  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPackages = filteredPackages.slice(
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
                Packages
              </h1>
              <p className="text-gray-500 text-sm">Manage package plans</p>
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
              <MatrixSettingModal />
              <AddPlanModal />
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
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[80px]">
                      S.No
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[200px]">
                      Name
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Amount
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Emiral Points
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Referral Bonus
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[80px]">
                      Bottles
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[180px]">
                      Benefit / Loss
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[100px]">
                      Status
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 text-center min-w-[200px]">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedPackages.map((pkg, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-[#0fa3ba]/5 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-4 px-3">
                        <div className="text-gray-900 text-base font-medium">
                          {startIndex + index + 1}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-gray-900 text-base">
                          {pkg.name}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-[#0fa3ba] text-base">
                          {pkg.amount}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-[#0fa3ba] text-base">
                          {pkg.emiralPoints}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-gray-700 text-base">
                          {pkg.referralBonus}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-gray-700 text-base">
                          {pkg.bottles}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-gray-700 text-base">
                          {pkg.benefitLoss}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        {pkg.status === "Enabled" ? (
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
                          {pkg.status === "Enabled" ? (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                            >
                              Disable
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-8 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                            >
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
                {Math.min(startIndex + itemsPerPage, filteredPackages.length)}{" "}
                of {filteredPackages.length} results
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
