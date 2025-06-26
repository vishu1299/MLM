import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import PaymentSect from "./components/payment";
import LoginSection from "./components/loginsec";

const stats = [
  {
    title: "Total Users",
    value: "1517",
    change: "+2.5%",
    direction: "up",
    color: "text-green-500",
    bg: "gradient-bg",
  },
  {
    title: "Active Users",
    value: "1492",
    change: "+0.5%",
    direction: "up",
    color: "text-green-500",
    bg: "bg-white",
  },
  {
    title: "Email Unverified",
    value: "1502",
    change: "-0.2%",
    direction: "down",
    color: "text-red-500",
    bg: "bg-white",
  },
  {
    title: "Mobile Unverified Users",
    value: "0",
    change: "-1.2%",
    direction: "down",
    color: "text-red-500",
    bg: "bg-white",
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-4  rounded-lg shadow ${item.bg} flex flex-col justify-between`}
            style={
              item.bg === "gradient-bg"
                ? {
                    background:
                      "linear-gradient(to right, #57C6D14D, #57C6D100)",
                    color: "bg-[#2C2C2C] font-bold",
                  }
                : {}
            }
          >
            <div className="text-sm  mb-1 text-[#2C2C2C] font-medium  font-manrope ">
              {item.title}
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="text-2xl   text-[#2C2C2C]  font-bold  font-manrope">
                {item.value}
              </div>
              <div className="flex items-center justify-center  gap-1 text-[18px] font-medium">
                {item.direction === "up" ? (
                  <HiMiniArrowTrendingUp className=" text-green-500 mt-6 text-lg " />
                ) : (
                  <img
                    src="/assets/image/icon/arrow-2.png"
                    alt="down"
                    className=" self-end mb-1"
                  />
                )}
                <div className="flex flex-col justify-end">
                  <div className="  ml-2">
                    {item.direction === "up" ? (
                      <FaCaretUp className={item.color} />
                    ) : (
                      <FaCaretDown className={item.color} />
                    )}
                  </div>
                  <p className={item.color}>{item.change}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <PaymentSect />
      </div>
      <div>
        <LoginSection />
      </div>
    </div>
  );
}
