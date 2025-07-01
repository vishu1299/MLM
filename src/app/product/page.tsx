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
import { Textarea } from "@/components/ui/textarea";

import {
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Edit,
  Plus,
} from "lucide-react";

interface ProductData {
  id: string;
  name: string;
  emiralPoints: string;
  quantity: number;
  status: "Enable" | "Disable";
}

const mockProducts: ProductData[] = [
  {
    id: "1",
    name: "Emiral Ulcer Elixir 75cl",
    emiralPoints: "13 ",
    quantity: 1,
    status: "Disable",
  },
  {
    id: "2",
    name: "3 Product Bundle 75cl",
    emiralPoints: "39 ",
    quantity: 3,
    status: "Disable",
  },
  {
    id: "3",
    name: "5 Product Bundle 75cl",
    emiralPoints: "65",
    quantity: 5,
    status: "Disable",
  },
  {
    id: "4",
    name: "Emiral Elixir 50cl",
    emiralPoints: "10",
    quantity: 1,
    status: "Disable",
  },
  {
    id: "5",
    name: "1.5 reorder",
    emiralPoints: "9",
    quantity: 1,
    status: "Enable",
  },
  {
    id: "6",
    name: "1.5 reorder",
    emiralPoints: "1,000",
    quantity: 1,
    status: "Disable",
  },
  {
    id: "7",
    name: "375 reorder",
    emiralPoints: "250",
    quantity: 1,
    status: "Disable",
  },
];

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
      <DialogContent className="sm:max-w-[800px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#27ACC1] text-xl font-semibold">
            Add Plan
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#27ACC1] font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter plan name"
                className="border-[#27ACC1] focus:ring-[#27ACC1]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="text-[#27ACC1] font-medium">
                Price <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="price"
                  placeholder="Enter price"
                  className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm">₦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-[#27ACC1] font-medium">
                Quantity <span className="text-red-500">*</span>
              </Label>
              <Input
                id="quantity"
                placeholder="Enter quantity"
                type="number"
                className="border-[#27ACC1] focus:ring-[#27ACC1]"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-[#27ACC1] font-medium"
              >
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Enter description"
                className="border-[#27ACC1] focus:ring-[#27ACC1] min-h-[80px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="emiral-point"
                className="text-[#27ACC1] font-medium"
              >
                Emiral Point
              </Label>
              <div className="relative">
                <Input
                  id="emiral-point"
                  placeholder="Enter emiral points"
                  className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm">EP</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="product-image"
                className="text-[#27ACC1] font-medium"
              >
                Product Image
              </Label>
              <div className="relative">
                <Input
                  id="product-image"
                  type="file"
                  accept="image/*"
                  className="border border-[#38b2c6] "
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              className="bg-[#27ACC1] hover:bg-[#27ACC1]/90 text-white px-8 py-2 text-lg"
              onClick={() => setOpen(false)}
            >
              Add Plan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProductTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredProducts = useMemo(() => {
    return mockProducts;
  }, []);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
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
                Products
              </h1>
              <p className="text-gray-500 text-sm">Manage product inventory</p>
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
                    <TableHead className="w-20 py-4 px-3 font-bold text-gray-700">
                      Sr No.
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[300px]">
                      Name
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      Emiral Points
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[100px]">
                      Quantity
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      Status
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 text-center min-w-[120px]">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedProducts.map((product, index) => (
                    <TableRow
                      key={index}
                      className="hover:bg-[#0fa3ba]/5 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-4 px-3">
                        <span className="font-medium text-gray-500 text-base">
                          {startIndex + index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base">
                          {product.name}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {product.emiralPoints} ₦
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-gray-700 text-base">
                          {product.quantity}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        {product.status === "Enable" ? (
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
                        <div className="flex items-center justify-center">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border-blue-600 border text-blue-600 bg-transparent"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
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
                {Math.min(startIndex + itemsPerPage, filteredProducts.length)}{" "}
                of {filteredProducts.length} results
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
