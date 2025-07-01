"use client";

import type React from "react";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";

interface AddRankModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddRankModal({ isOpen, onClose }: AddRankModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    rankBadge: null as File | null,
    rankStage: "",
    rankName: "",
    groupVolume: "",
    personalVolume: "",
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, rankBadge: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleClose = () => {
    setFormData({
      rankBadge: null,
      rankStage: "",
      rankName: "",
      groupVolume: "",
      personalVolume: "",
    });
    onClose();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-white to-gray-50 border-gray-200 text-gray-900 shadow-xl">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            New Rank
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rank Badge Upload */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-900">
              Rank Badge <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <div className="border-2 border-dashed border-[#27ACC1]/30 rounded-lg p-8 text-center hover:border-[#27ACC1]/50 transition-colors bg-gradient-to-br from-[#27ACC1]/5 to-[#27ACC1]/10">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-[#27ACC1]/10 rounded-full">
                    <Upload className="w-6 h-6 text-[#27ACC1]" />
                  </div>
                  <div className="text-gray-600">
                    {formData.rankBadge ? (
                      <span className="text-[#27ACC1] font-medium">
                        {formData.rankBadge.name}
                      </span>
                    ) : (
                      <span>Click to upload rank badge image</span>
                    )}
                  </div>
                </div>
              </div>
              <Button
                type="button"
                className="w-full mt-4 bg-gradient-to-r from-[#27ACC1] to-[#27ACC1]/90 hover:from-[#27ACC1]/90 hover:to-[#27ACC1]/80 text-white font-medium py-3 shadow-lg"
                onClick={triggerFileInput}
              >
                Rank Badge
              </Button>
            </div>
          </div>

          {/* Form Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rank Stage */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-900">
                Rank Stage <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.rankStage}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, rankStage: value }))
                }
              >
                <SelectTrigger className="bg-white border-gray-300 text-gray-900 h-12 focus:border-[#27ACC1] focus:ring-[#27ACC1]">
                  <SelectValue placeholder="Select Stage" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200 shadow-lg">
                  <SelectItem
                    className="text-gray-900 hover:bg-[#27ACC1]/10 focus:bg-[#27ACC1]/10"
                    value="bronze"
                  >
                    Bronze
                  </SelectItem>
                  <SelectItem
                    className="text-gray-900 hover:bg-[#27ACC1]/10 focus:bg-[#27ACC1]/10"
                    value="silver"
                  >
                    Silver
                  </SelectItem>
                  <SelectItem
                    className="text-gray-900 hover:bg-[#27ACC1]/10 focus:bg-[#27ACC1]/10"
                    value="gold"
                  >
                    Gold
                  </SelectItem>
                  <SelectItem
                    className="text-gray-900 hover:bg-[#27ACC1]/10 focus:bg-[#27ACC1]/10"
                    value="platinum"
                  >
                    Platinum
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Rank Name */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-900">
                Rank Name <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Rank Name"
                value={formData.rankName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, rankName: e.target.value }))
                }
                className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12 focus:border-[#27ACC1] focus:ring-[#27ACC1]"
              />
            </div>
          </div>

          {/* Volume Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Group Volume */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-900">
                Group Volume <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  placeholder="Group Volume"
                  value={formData.groupVolume}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      groupVolume: e.target.value,
                    }))
                  }
                  className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12 focus:border-[#27ACC1] focus:ring-[#27ACC1]"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#27ACC1]/10 text-[#27ACC1] px-2 py-1 rounded text-xs font-medium">
                  EP
                </div>
              </div>
            </div>

            {/* Personal Volume */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-900">
                Personal Volume <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  placeholder="Personal Volume"
                  value={formData.personalVolume}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      personalVolume: e.target.value,
                    }))
                  }
                  className="bg-white border-gray-300 text-gray-900 placeholder-gray-500 h-12 focus:border-[#27ACC1] focus:ring-[#27ACC1]"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#27ACC1]/10 text-[#27ACC1] px-2 py-1 rounded text-xs font-medium">
                  EP
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#27ACC1] to-[#27ACC1]/90 hover:from-[#27ACC1]/90 hover:to-[#27ACC1]/80 text-white font-medium py-4 text-lg mt-8 shadow-lg transition-all duration-200"
          >
            Add Rank
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
