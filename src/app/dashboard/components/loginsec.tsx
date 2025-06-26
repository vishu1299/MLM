"use client";
import React, { useState } from "react";

type TabType = "Monthly" | "Weekly" | "Yearly";
type SectionType = "browser" | "os" | "country";

interface ActiveTabState {
  browser: TabType;
  os: TabType;
  country: TabType;
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-[12px]  font-medium    ${
      active
        ? "bg-[#E0FCFF]  border-2 border-[#208892] text-[#208892] font-medium"
        : "  text-[12px]  font-medium text-[#BEBEBE] bg-[#FEFEFE]  border-2 border-[#BEBEBE]"
    }`}
  >
    {children}
  </button>
);

const LoginSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTabState>({
    browser: "Monthly",
    os: "Monthly",
    country: "Monthly",
  });

  const handleTabChange = (section: SectionType, tab: TabType) => {
    setActiveTab((prev) => ({
      ...prev,
      [section]: tab,
    }));
  };

  return (
    <div className="mt-8 space-y-4">
      {/* Headings */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-2">
        <div>
          <h3 className="text-[20px]  font-bold text-[#2C2C2C] font-[Poppins] ">
            Login by Browser
          </h3>
        </div>
        <div>
          <h3 className="text-[20px]  font-bold text-[#2C2C2C] font-[Poppins] ">
            Login by OS
          </h3>
        </div>
        <div>
          <h3 className="text-[20px]  font-bold text-[#2C2C2C]  font-[font-[Poppins]] ">
            Login by Country
          </h3>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">
        {/* Browser Card */}
        <div className="bg-white rounded-2xl lg:p-6 p-2 shadow-sm">
          <div className="mb-4 flex gap-1 ">
            {(["Monthly", "Weekly", "Yearly"] as TabType[]).map((tab) => (
              <TabButton
                key={tab}
                active={activeTab.browser === tab}
                onClick={() => handleTabChange("browser", tab)}
              >
                {tab}
              </TabButton>
            ))}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#2C2C2C]  font-medium text-[12px] font-manrope">
                    Handled Browser
                  </span>
                  <span className="text-[#37363B] font-medium text-[14px] font-poppins">
                    36
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#2C2C2C]  font-medium text-[12px] font-manrope">
                    Chrome
                  </span>
                  <span className="text-[#37363B] font-medium text-[14px] font-poppins">
                    22
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#2C2C2C]  font-medium text-[12px] font-manrope">
                    Firefox
                  </span>
                  <span className="text-[#37363B] font-medium text-[14px] font-poppins">
                    24
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#2C2C2C]  font-medium text-[12px] font-manrope">
                    Safari
                  </span>
                  <span className="text-[#37363B] font-medium text-[14px] font-poppins">
                    32
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OS Card */}
        <div className="bg-white rounded-2xl lg:p-6 p-3 shadow-sm">
          <div className="mb-4 flex gap-1">
            {(["Monthly", "Weekly", "Yearly"] as TabType[]).map((tab) => (
              <TabButton
                key={tab}
                active={activeTab.os === tab}
                onClick={() => handleTabChange("os", tab)}
              >
                {tab}
              </TabButton>
            ))}
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-3  gap-2 text-center mt-8">
            {[
              { label: "Android", value: 32 },
              { label: "Windows", value: 42 },
              { label: "iPhone", value: 224 },
              { label: "Mac OS", value: 56 },
              { label: "Linux", value: 21 },
            ].map(({ label, value }) => (
              <div key={label} className="  ">
                <p className="text-[12px] font-bold text-[#2C2C2C] font-manrope ">
                  {value}
                </p>
                <p className="text-[12px] text-[#2C2C2C] font-medium font-manrope mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Country Card */}
        <div className="bg-white rounded-2xl lg:p-6 p-3  shadow-sm">
          <div className="mb-4 flex gap-1">
            {(["Monthly", "Weekly", "Yearly"] as TabType[]).map((tab) => (
              <TabButton
                key={tab}
                active={activeTab.country === tab}
                onClick={() => handleTabChange("country", tab)}
              >
                {tab}
              </TabButton>
            ))}
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-3  gap-2 text-center mt-8">
            {[
              { label: "Nigeria", value: 32 },
              { label: "Netherlands", value: 42 },
              { label: "Country", value: 224 },
              { label: "Benin", value: 56 },
              { label: "Ghana", value: 21 },
            ].map(({ label, value }) => (
              <div key={label} className="">
                <p className="text-[12px] font-bold text-[#2C2C2C] font-manrope">
                  {value}
                </p>
                <p className="text-[12px] text-[#2C2C2C] font-medium font-manrope mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
