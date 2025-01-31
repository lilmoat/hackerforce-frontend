import Image from "next/image";

// 🔹 Subscription Plans Data
const subscriptionPlans = [
  {
    price: "$12.99",
    type: "Monthly",
    duration: "1 month subscription",
    benefits: [
      "Access to all content",
      "Access chambers",
      "Access to Colosseums",
      "Become a HF Member",
    ],
    bgColor: "bg-[#1d1e1f]",
    buttonBg: "bg-[#972123]",
    textColor: "text-[#a0a0a0]",
  },
  {
    price: "$64.99",
    type: "BI-Annual",
    duration: "6 month subscription",
    benefits: [
      "Access to all content",
      "Access chambers",
      "Access to Colosseums",
      "1 Month free",
    ],
    bgColor: "bg-[#972123]",
    buttonBg: "bg-white",
    textColor: "text-white",
  },
  {
    price: "$129.99",
    type: "Yearly",
    duration: "12 month subscription",
    benefits: [
      "Access to all content",
      "Access chambers",
      "Access to Colosseums",
      "3 Months free",
    ],
    bgColor: "bg-[#1d1e1f]",
    buttonBg: "bg-[#972123]",
    textColor: "text-[#a0a0a0]",
  },
];

export default function Subscription() {
  return (
    <section className="relative w-full max-w-[1440px]">
      <div className="py-[100px] flex flex-col items-center gap-[50px]">
        {/* Header Section */}
        <SubscriptionHeader />

        {/* Subscription Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {subscriptionPlans.map((plan, index) => (
            <SubscriptionCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ COMPONENTS ------------------ */

// 🔹 Subscription Header
const SubscriptionHeader = () => (
  <div className="flex flex-col items-center text-center gap-2">
    {/* Pricing Label */}
    <div className="px-2 bg-[#972123] flex justify-center items-center">
      <span className="text-white text-xl font-inconsolata">Pricing</span>
    </div>

    {/* Title */}
    <h2 className="text-white text-[40px] font-orbitron font-medium leading-[48px]">
      Subscriptions
    </h2>

    {/* Description */}
    <p className="w-[650px] text-[#a0a0a0] text-lg font-inconsolata leading-relaxed">
      Whether you’re looking to pay monthly, or save some money in the long run
      and purchase a yearly subscription, we’ve got you covered.
    </p>
  </div>
);

// 🔹 Subscription Plan Card
const SubscriptionCard = ({
  plan,
}: {
  plan: {
    price: string;
    type: string;
    duration: string;
    benefits: string[];
    bgColor: string;
    buttonBg: string;
    textColor: string;
  };
}) => (
  <div className={`p-6 ${plan.bgColor} rounded-lg flex flex-col gap-6`}>
    {/* Plan Icon */}
    <div className="w-20 h-20 relative">
      <Image
        src="/imgs/about/aboutIcon.png"
        alt="Plan Icon"
        width={80}
        height={80}
        className="rounded-2xl"
      />
    </div>

    {/* Pricing & Plan Type */}
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-[40px] font-orbitron font-medium leading-[48px]">
        {plan.price}
      </h3>
      <div className="flex items-center gap-2">
        <div className="px-2 bg-[#2f3132] flex justify-center items-center">
          <span className="text-white text-xl font-inconsolata">
            {plan.type}
          </span>
        </div>
        <p
          className={`${plan.textColor} text-lg font-inconsolata leading-relaxed`}
        >
          - {plan.duration}
        </p>
      </div>
    </div>

    {/* Benefits List */}
    <ul className={`${plan.textColor} text-lg font-inconsolata leading-normal`}>
      {plan.benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </ul>

    {/* Select Subscription Button */}
    <button
      className={`w-full px-6 py-3 ${plan.buttonBg} rounded-lg text-center`}
    >
      <span
        className={`text-base font-orbitron font-medium ${
          plan.buttonBg === "bg-white" ? "text-[#181a1b]" : "text-white"
        }`}
      >
        Select Subscription
      </span>
    </button>
  </div>
);
