"use client"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"

import { Download, RefreshCw, ChevronLeft, ChevronRight, Edit, EyeOff, Plus } from "lucide-react"

interface ManualGatewayData {
  id: string
  gateway: string
  status: "Enabled" | "Disabled"
}

const mockManualGateways: ManualGatewayData[] = [
  { id: "1", gateway: "DISTRIBUTORS", status: "Enabled" },
  { id: "2", gateway: "BANK TRANSFER", status: "Enabled" },
  { id: "3", gateway: "CASH PAYMENT", status: "Disabled" },
  { id: "4", gateway: "MOBILE MONEY", status: "Enabled" },
  { id: "5", gateway: "CRYPTO WALLET", status: "Disabled" },
]

function AddGatewayModal() {
  const [open, setOpen] = useState(false)
  const [instruction, setInstruction] = useState("")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="h-10 border-[#27ACC1] text-[#27ACC1] hover:bg-[#27ACC1] hover:text-white bg-transparent"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] bg-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#27ACC1] text-xl font-semibold">Add Manual Gateway</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {/* Gateway Name, Currency, Rate */}
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="gateway-name" className="text-[#27ACC1] font-medium">
                Gateway Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="gateway-name"
                placeholder="Enter gateway name"
                className="border-[#27ACC1] focus:ring-[#27ACC1]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency" className="text-[#27ACC1] font-medium">
                Currency <span className="text-red-500">*</span>
              </Label>
              <Input id="currency" placeholder="Enter currency" className="border-[#27ACC1] focus:ring-[#27ACC1]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rate" className="text-[#27ACC1] font-medium">
                Rate <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 text-sm">1 USD =</span>
                </div>
                <Input id="rate" placeholder="Enter rate" className="border-[#27ACC1] focus:ring-[#27ACC1] pl-20" />
              </div>
            </div>
          </div>

          {/* Range Section */}
          <div className="space-y-4">
            <div className="bg-[#27ACC1]/10 p-4 rounded-lg">
              <h3 className="text-[#27ACC1] text-lg font-semibold mb-4">Range</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="min-amount" className="text-[#27ACC1] font-medium">
                    Minimum Amount <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="min-amount"
                      placeholder="Enter minimum amount"
                      className="border-[#27ACC1] focus:ring-[#27ACC1] pr-16"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="bg-gray-100 px-3 py-1 rounded text-gray-600 text-sm font-medium">USD</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-amount" className="text-[#27ACC1] font-medium">
                    Maximum Amount <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="max-amount"
                      placeholder="Enter maximum amount"
                      className="border-[#27ACC1] focus:ring-[#27ACC1] pr-16"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="bg-gray-100 px-3 py-1 rounded text-gray-600 text-sm font-medium">USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charge Section */}
          <div className="space-y-4">
            <div className="bg-[#27ACC1]/10 p-4 rounded-lg">
              <h3 className="text-[#27ACC1] text-lg font-semibold mb-4">Charge</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fixed-charge" className="text-[#27ACC1] font-medium">
                    Fixed Charge <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="fixed-charge"
                      placeholder="Enter fixed charge"
                      className="border-[#27ACC1] focus:ring-[#27ACC1] pr-16"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="bg-gray-100 px-3 py-1 rounded text-gray-600 text-sm font-medium">USD</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="percent-charge" className="text-[#27ACC1] font-medium">
                    Percent Charge <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="percent-charge"
                      placeholder="Enter percent charge"
                      className="border-[#27ACC1] focus:ring-[#27ACC1] pr-12"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="bg-gray-100 px-3 py-1 rounded text-gray-600 text-sm font-medium">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deposit Instruction */}
          <div className="space-y-4">
            <div className="bg-[#27ACC1]/10 p-4 rounded-lg">
              <h3 className="text-[#27ACC1] text-lg font-semibold mb-4">Deposit Instruction</h3>
              <div className="space-y-2">
                <SimpleMDE
                  value={instruction}
                  onChange={setInstruction}
                  options={{
                    spellChecker: false,
                    placeholder: "Enter deposit instructions...",
                    status: false,
                  }}
                  className="border border-[#27ACC1] rounded"
                />
              </div>
            </div>
          </div>

          {/* User Data */}
          <div className="space-y-4">
            <div className="bg-[#27ACC1]/10 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#27ACC1] text-lg font-semibold">User Data</h3>
                <Button size="sm" className="bg-[#27ACC1] hover:bg-[#27ACC1]/90 text-white">
                  <Plus className="w-4 h-4 mr-1" />
                  Add New
                </Button>
              </div>
              <div className="bg-white p-4 rounded border border-[#27ACC1]/20 min-h-[60px] flex items-center justify-center text-gray-500">
                No user data fields added yet
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              className="bg-[#27ACC1] hover:bg-[#27ACC1]/90 text-white px-8 py-2 text-lg w-full"
              onClick={() => setOpen(false)}
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ManualGatewaysTable() {
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10

  const filteredGateways = useMemo(() => {
    return mockManualGateways
  }, [])

  const totalPages = Math.ceil(filteredGateways.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedGateways = filteredGateways.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Manual Gateways</h1>
              <p className="text-gray-500 text-sm">Manage manual payment gateways</p>
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
              <AddGatewayModal />
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
                    <TableHead className="w-20 py-4 px-3 font-bold text-gray-700">Sr No.</TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[300px]">Gateway</TableHead>
                    <TableHead className="py-4 px-3 font-bold text-gray-700 min-w-[120px]">Status</TableHead>
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
                        <span className="font-medium text-gray-500 text-base">{startIndex + index + 1}</span>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        <div className="font-semibold text-gray-900 text-base">{gateway.gateway}</div>
                      </TableCell>
                      <TableCell className="py-4 px-3">
                        {gateway.status === "Enabled" ? (
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
                          <Button size="sm" className="h-8 bg-blue-900 hover:bg-blue-800 text-white">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          {gateway.status === "Enabled" ? (
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
                Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredGateways.length)} of{" "}
                {filteredGateways.length} results
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
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
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
  )
}
