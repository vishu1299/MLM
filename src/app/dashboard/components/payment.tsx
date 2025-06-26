import { ExternalLink } from "lucide-react";

export default function PaymentSect() {
  const data = [
    {
      title: "Total Commissions",
      price: "$109,189.62",
    },
    {
      title: "Total Plans",
      price: "9",
    },
    {
      title: "All Pins",
      price: "1981",
    },
    {
      title: "Used Pins",
      price: "1537",
    },
  ];

  const statCard = `relative overflow-hidden flex flex-col justify-between bg-white rounded-xl p-6  w-full h-[150px] shadow transition`;

  const ChartIcon = ({ type }: { type: "up" | "down" }) => {
    const heights = type === "up" ? [6, 10, 18, 26, 34] : [36, 28, 20, 12, 6];

    return (
      <div className="absolute bottom-0 right-0 flex items-end gap-[2px]">
        {type === "up" ? (
          <img
            src="/assets/image/icon/arrow-up.png"
            alt=""
            className=" opacity-50  absolute bottom-[14px] right-2 "
          />
        ) : (
          <img
            src="/assets/image/icon/arrow-down.png"
            alt=""
            className=" opacity-50  absolute bottom-[20px] right-0"
          />
        )}
        <div className="flex items-end gap-[2px]">
          {heights.map((h, i) => (
            <div
              key={i}
              className={`w-[8px] ${
                type === "up" ? "bg-[#25B836]/50" : "bg-red-300"
              }`}
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    );
  };

  const TopRightIcon = () => (
    <ExternalLink className="absolute lg:top-5 lg:right-6 top-1 right-1  text-gray-400" />
  );

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-2 mt-6">
        <div className="border rounded-2xl lg:p-6 p-2  border-[#57C6D1] bg-white ">
          <div className="flex items-center flex-wrap justify-between mb-6">
            <h2 className="text-[20px]  font-bold text-[#25B836] font-manrope">
              Deposits
            </h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-full text-[12px]  font-medium  font-manrope bg-[#E0FCFF] text-[#208892]  border-2 border-[#208892]">
                Daily
              </button>
              <button className="px-3 py-1 rounded-full text-[12px]  font-medium  font-manrope  text-[#BEBEBE]  bg-[#FEFEFE] border-2 border-[#BEBEBE]">
                Monthly
              </button>
              <button className="px-3 py-1 rounded-full text-[12px]  font-medium  font-manrope text-[#BEBEBE] bg-[#FEFEFE]  border-2 border-[#BEBEBE]">
                Yearly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            {[
              { label: "Pending Deposited", value: "$0" },
              { label: "Total Deposited", value: "$209,499.00", chart: "up" },
              { label: "Rejected Deposited", value: "$0" },
              { label: "Deposited Charge", value: "$0" },
            ].map((item, index) => (
              <div
                key={index}
                className={statCard}
                style={{
                  boxShadow: "0px 8px 30px rgba(128, 128, 128, 0.35)",
                }}
              >
                <span className="text-[14px] font-medium  font-manrope text-[#2C2C2C]">
                  {item.label}
                </span>
                <TopRightIcon />
                <span
                  className={` text-lg lg:text-[24px]  font-bold ${
                    item.chart === "up"
                      ? "text-[#25B836] lg:mb-0 mb-6 "
                      : "text-[#939393]"
                  }`}
                >
                  {item.value}
                </span>
                {item.chart === "up" && <ChartIcon type="up" />}
              </div>
            ))}
          </div>
        </div>

        {/* Withdrawals */}
        <div className="border rounded-2xl lg:p-6 p-2 shadow-sm border-[#57C6D1] bg-gray-50">
          <div className="flex items-center flex-wrap justify-between mb-6">
            <h2 className="text-[20px]  font-bold text-[#F1416C] font-manrope">
              Withdrawals
            </h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-full text-[12px]  font-medium  font-manrope bg-[#E0FCFF] text-[#208892]  border-2 border-[#208892]">
                Daily
              </button>
              <button className="px-3 py-1 rounded-full text-[12px]  font-medium  font-manrope  text-[#BEBEBE]  bg-[#FEFEFE] border-2 border-[#BEBEBE]">
                Monthly
              </button>
              <button className="px-3 py-1 rounded-full text-[12px]  font-medium  font-manrope text-[#BEBEBE] bg-[#FEFEFE]  border-2 border-[#BEBEBE]">
                Yearly
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Pending Withdrawals", value: "$0" },
              { label: "Total Withdrawn", value: "$25,484.63", chart: "down" },
              { label: "Rejected Withdrawals", value: "$0" },
              { label: "Withdrawals Charge", value: "$513.34" },
            ].map((item, index) => (
              <div
                key={index}
                className={statCard}
                style={{
                  boxShadow: "0px 8px 30px rgba(128, 128, 128, 0.35)",
                }}
              >
                <TopRightIcon />
                <span className="text-[14px] font-medium  font-manrope text-[#2C2C2C]">
                  {item.label}
                </span>
                <span
                  className={`text-lg md:text-[24px]  font-manrope font-bold ${
                    item.chart === "down"
                      ? "text-[#F1416C] lg:mb-0 mb-6"
                      : "text-[#939393]"
                  }`}
                >
                  {item.value}
                </span>
                {item.chart === "down" && <ChartIcon type="down" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid  grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-md font-manrope"
            style={{
              boxShadow: "0px 8px 30px rgba(128, 128, 128, 0.35)",
            }}
          >
            <p className="text-[14px] font-medium  font-manrope text-[#2C2C2C]">
              {item.title}
            </p>
            <p
              className={`text-[24px] font-bold  font-manrope ${
                item.price.includes("$") ? "text-green-600" : "text-[#939393]"
              }`}
            >
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
