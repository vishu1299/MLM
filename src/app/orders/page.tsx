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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import {
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Eye,
  ShoppingBag,
  MapPin,
  CreditCard,
  CheckCircle,
} from "lucide-react";

interface OrderData {
  id: string;
  orderId: string;
  totalAmount: string;
  shippingAddress: string;
  paymentMethod: string;
  status: string;
}

const mockOrders: OrderData[] = [
  {
    id: "1",
    orderId: "#1470",
    totalAmount: "$13.00",
    shippingAddress: "vergerger...",
    paymentMethod: "card",
    status: "Delivered",
  },
  {
    id: "2",
    orderId: "#1469",
    totalAmount: "$208.00",
    shippingAddress: "UPGRADE...",
    paymentMethod: "card",
    status: "Delivered",
  },
  {
    id: "3",
    orderId: "#1468",
    totalAmount: "$33.80",
    shippingAddress: "Nanya...",
    paymentMethod: "card",
    status: "Delivered",
  },
  {
    id: "4",
    orderId: "#1467",
    totalAmount: "$33.80",
    shippingAddress: "Ngoreal...",
    paymentMethod: "card",
    status: "Delivered",
  },
  {
    id: "5",
    orderId: "#1466",
    totalAmount: "$85.80",
    shippingAddress: "Lagos...",
    paymentMethod: "card",
    status: "Delivered",
  },
  {
    id: "6",
    orderId: "#1465",
    totalAmount: "$33.80",
    shippingAddress: "Lagos...",
    paymentMethod: "card",
    status: "Delivered",
  },
  {
    id: "7",
    orderId: "#1464",
    totalAmount: "$85.80",
    shippingAddress: "Goldboss...",
    paymentMethod: "card",
    status: "Delivered",
  },
];

function TakeawayModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="h-10 border-[#27ACC1] text-[#27ACC1] hover:bg-[#27ACC1] hover:text-white bg-transparent"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Takeaway
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#27ACC1] text-xl font-semibold">
            Create Takeaway Order
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="customer" className="text-[#27ACC1] font-medium">
                Customer Name <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-[#27ACC1] focus:ring-[#27ACC1]">
                  <SelectValue placeholder="Select Customer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="customer1">John Doe</SelectItem>
                  <SelectItem value="customer2">Jane Smith</SelectItem>
                  <SelectItem value="customer3">Mike Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="office-address"
                className="text-[#27ACC1] font-medium"
              >
                Office Address <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="office-address"
                placeholder="address"
                className="border-[#27ACC1] focus:ring-[#27ACC1] min-h-[80px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="product" className="text-[#27ACC1] font-medium">
                Product <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-[#27ACC1] focus:ring-[#27ACC1]">
                  <SelectValue placeholder="Select Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="product1">Product A</SelectItem>
                  <SelectItem value="product2">Product B</SelectItem>
                  <SelectItem value="product3">Product C</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="text-[#27ACC1] font-medium">
                Price <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="price"
                  placeholder="price"
                  className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm">₦</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-[#27ACC1] font-medium">
                Quantity <span className="text-red-500">*</span>
              </Label>
              <Input
                id="quantity"
                placeholder="quantity"
                type="number"
                className="border-[#27ACC1] focus:ring-[#27ACC1]"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="total-amount"
                className="text-[#27ACC1] font-medium"
              >
                Total Amount <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="total-amount"
                  placeholder="amount"
                  className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 text-sm">₦</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="payment-method"
                className="text-[#27ACC1] font-medium"
              >
                Payment Method <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-[#27ACC1] focus:ring-[#27ACC1]">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Credit Card</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              className="bg-[#27ACC1] hover:bg-[#27ACC1]/90 text-white px-8 py-2 text-lg"
              onClick={() => setOpen(false)}
            >
              Sell Product
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function UserRankTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredOrders = useMemo(() => {
    return mockOrders;
  }, []);

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(
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
                Orders
              </h1>
              <p className="text-gray-500 text-sm">Monitor order status</p>
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
              <TakeawayModal />
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
                      <div className="flex items-center">Sr No.</div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      <div className="flex items-center">Order Id</div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">
                      <div className="flex items-center">Total Amount (₦)</div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[180px]">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-black" />
                        Shipping Address
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      <div className="flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-black" />
                        Payment Method
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[100px]">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-black" />
                        Status
                      </div>
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 text-center min-w-[200px]">
                      <div className="flex items-center justify-center">
                        Action
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedOrders.map((order, index) => (
                    <TableRow
                      key={order.id}
                      className="hover:bg-[#0fa3ba]/5 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-4 px-3">
                        <span className="font-medium text-gray-500 text-base">
                          {startIndex + index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-[#0fa3ba] text-base">
                          {order.orderId}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base">
                          {order.totalAmount}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-gray-700 text-base">
                          {order.shippingAddress}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="text-gray-700 text-base capitalize">
                          {order.paymentMethod}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {order.status}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="flex items-center justify-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border border-green-600 text-green-600"
                          >
                            Delivered
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border border-blue-600 text-blue-600"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Order Details
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
                {Math.min(startIndex + itemsPerPage, filteredOrders.length)} of{" "}
                {filteredOrders.length} results
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
