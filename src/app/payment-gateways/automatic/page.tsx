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
  Download,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Edit,
  EyeOff,
} from "lucide-react";

interface PaymentGatewayData {
  id: string;
  gateway: string;
  supportedCurrency: number;
  enabledCurrency: number;
  status: "Enabled";
}

const mockPaymentGateways: PaymentGatewayData[] = [
  {
    id: "1",
    gateway: "Authorize.net",
    supportedCurrency: 11,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "2",
    gateway: "Blockchain",
    supportedCurrency: 1,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "3",
    gateway: "Cashmaal",
    supportedCurrency: 2,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "4",
    gateway: "Coinbase Commerce",
    supportedCurrency: 166,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "5",
    gateway: "Coingate",
    supportedCurrency: 2,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "6",
    gateway: "CoinPayments",
    supportedCurrency: 88,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "7",
    gateway: "CoinPayments Fiat",
    supportedCurrency: 22,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "8",
    gateway: "Flutterwave",
    supportedCurrency: 25,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "9",
    gateway: "Instamojo",
    supportedCurrency: 1,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "10",
    gateway: "Mercado Pago",
    supportedCurrency: 11,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "11",
    gateway: "Mollie",
    supportedCurrency: 30,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "12",
    gateway: "NMI",
    supportedCurrency: 35,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "13",
    gateway: "Payeer",
    supportedCurrency: 3,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "14",
    gateway: "Paypal",
    supportedCurrency: 25,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "15",
    gateway: "Paypal Express",
    supportedCurrency: 25,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "16",
    gateway: "PayStack",
    supportedCurrency: 2,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "17",
    gateway: "PayTM",
    supportedCurrency: 51,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "18",
    gateway: "Perfect Money",
    supportedCurrency: 2,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "19",
    gateway: "RazorPay",
    supportedCurrency: 1,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "20",
    gateway: "Skrill",
    supportedCurrency: 39,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "21",
    gateway: "Stripe Hosted",
    supportedCurrency: 18,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "22",
    gateway: "Stripe Storefront",
    supportedCurrency: 18,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "23",
    gateway: "Stripe Checkout",
    supportedCurrency: 18,
    enabledCurrency: 0,
    status: "Enabled",
  },
  {
    id: "24",
    gateway: "VoguePay",
    supportedCurrency: 6,
    enabledCurrency: 0,
    status: "Enabled",
  },
];

export default function PaymentGatewaysTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const filteredGateways = useMemo(() => {
    return mockPaymentGateways;
  }, []);

  const totalPages = Math.ceil(filteredGateways.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedGateways = filteredGateways.slice(
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
                Payment Gateways
              </h1>
              <p className="text-gray-500 text-sm">
                Manage payment gateway configurations
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
                      Gateway
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      Supported Currency
                    </TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[140px]">
                      Enabled Currency
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
                  {paginatedGateways.map((gateway, index) => (
                    <TableRow
                      key={gateway.id}
                      className="hover:bg-[#0fa3ba]/5 transition-colors border-b border-gray-100"
                    >
                      <TableCell className="py-4 px-3">
                        <span className="font-medium text-gray-500 text-base">
                          {startIndex + index + 1}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base">
                          {gateway.gateway}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base text-center">
                          {gateway.supportedCurrency}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base text-center">
                          {gateway.enabledCurrency}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {gateway.status}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="flex items-center justify-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border border-blue-600  text-blue-600"
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                          >
                            <EyeOff className="w-4 h-4 mr-1" />
                            Disable
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
                {Math.min(startIndex + itemsPerPage, filteredGateways.length)}{" "}
                of {filteredGateways.length} results
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
