"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  TrendingUp,
  Coins,
  Wallet,
  CreditCard,
  List,
  Users,
  HandCoins,
  Lock,
  Check,
  X,
  Key,
  Bell,
  User,
  UserX,
  Edit,
  Save,
} from "lucide-react";

export default function Component() {
  const [formData, setFormData] = useState({
    firstName: "Ephraim",
    lastName: "Chibuike Edeh",
    email: "apostledrephraim@gmail.com",
    mobile: "234915127049",
    address: "# 7 Usung Close",
    city: "Oron",
    state: "AKWA IBOM",
    zipCode: "AKWA IBOM",
    country: "Nigeria",
  });

  const statsCards = [
    { title: "Total Balance", value: "$0.00", icon: Coins, trend: true },
    { title: "Deposits", value: "$0.00", icon: Wallet, trend: true },
    { title: "Withdrawals", value: "1502", icon: CreditCard, trend: true },
    { title: "Transactions", value: "0", icon: List, trend: true },
    {
      title: "Total Referral Commission",
      value: "$0.00",
      icon: Users,
      trend: true,
    },
    {
      title: "Total Level Commissions",
      value: "$0.00",
      icon: HandCoins,
      trend: true,
    },
    {
      title: "Total Created Pin",
      value: "1502",
      icon: CreditCard,
      trend: true,
    },
    { title: "Total Used Pin", value: "0", icon: Lock, trend: true },
  ];

  const verificationStatus = [
    { label: "Email Verification", status: "Verified", verified: true },
    { label: "Mobile Verification", status: "Unverified", verified: false },
    { label: "2FA Verification", status: "Verified", verified: true },
    { label: "KYC", status: "Unverified", verified: false },
  ];

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              User Details
            </h1>
            <p className="text-gray-600">Manage your user details here</p>
          </div>
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Username / Email" className="pl-10 bg-white" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((card, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {card.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {card.value}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {card.trend && (
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                    )}
                    <card.icon className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
          >
            <Check className="h-4 w-4 mr-2" />
            Balance
          </Button>
          <Button
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
          >
            <X className="h-4 w-4 mr-2" />
            Balance
          </Button>
          <Button
            variant="outline"
            className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          >
            <Key className="h-4 w-4 mr-2" />
            Logins
          </Button>
          <Button
            variant="outline"
            className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button
            variant="outline"
            className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          >
            <User className="h-4 w-4 mr-2" />
            Login as user
          </Button>
          <Button
            variant="outline"
            className="bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
          >
            <UserX className="h-4 w-4 mr-2" />
            Ban user
          </Button>
        </div>

        {/* Update Form */}
        <Card className="bg-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">Update</CardTitle>
              <Edit className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" className="text-gray-600">
                Clear all
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip/Postal Code</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, zipCode: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    setFormData({ ...formData, country: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Nigeria">Nigeria</SelectItem>
                    <SelectItem value="Ghana">Ghana</SelectItem>
                    <SelectItem value="Kenya">Kenya</SelectItem>
                    <SelectItem value="South Africa">South Africa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Verification Status */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t">
              {verificationStatus.map((item, index) => (
                <div key={index} className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    {item.label}
                  </Label>
                  <Badge
                    variant={item.verified ? "default" : "destructive"}
                    className={
                      item.verified
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
