import Icon from "@/components/Icon";
import { useState } from "react";

const SecuritySetting = ({ show }: { show: boolean }) => {
  // Move useState ABOVE early return
  const [showPasswords, setShowPasswords] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  if (!show) return null; // Now it's safe to return early

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const passwordFields = [
    {
      label: "New Password",
      stateKey: "newPassword",
      placeholder: "**********",
    },
    {
      label: "Confirm New Password",
      stateKey: "confirmPassword",
      placeholder: "**********",
    },
  ];

  return (
    <div className="grow shrink basis-0 self-stretch flex flex-col items-end gap-8">
      {/* Section Header */}
      <SectionHeader title="Security" description="Change your password" />

      {/* Password Fields */}
      <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4">
        {passwordFields.map(({ label, stateKey, placeholder }, index) => (
          <PasswordInput
            key={index}
            label={label}
            placeholder={placeholder}
            isVisible={showPasswords[stateKey as keyof typeof showPasswords]}
            toggleVisibility={() =>
              togglePasswordVisibility(stateKey as keyof typeof showPasswords)
            }
          />
        ))}
      </div>

      <div className="w-full border border-grey/50" />

      {/* Change Password Button */}
      <SaveButton label="Change Password" />
    </div>
  );
};

export default SecuritySetting;

/* ========================
 * 🔥 REUSABLE COMPONENTS
 * ======================= */

//  Section Header Component
const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="self-stretch">
    <h2 className="text-white text-2xl font-bold font-['Orbitron']">{title}</h2>
    <p className="text-[#a0a0a0] text-base font-normal font-['Inconsolata']">
      {description}
    </p>
  </div>
);

//  Password Input Component
const PasswordInput = ({
  label,
  placeholder,
  isVisible,
  toggleVisibility,
}: {
  label: string;
  placeholder: string;
  isVisible: boolean;
  toggleVisibility: () => void;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-[#a0a0a0] text-base font-normal font-['Inconsolata']">
      {label}
    </label>
    <div className="px-4 py-3 bg-[#141516] rounded-lg flex items-center">
      <input
        type={isVisible ? "text" : "password"}
        placeholder={placeholder}
        className="w-full text-white text-base font-medium font-['Inconsolata'] bg-transparent outline-none
        placeholder:text-grey"
      />
      <button
        onClick={toggleVisibility}
        className="w-6 h-6 flex justify-center items-center"
      >
        <Icon name={"EyeIcon"} size={18} />
      </button>
    </div>
  </div>
);

//  Save Button Component
const SaveButton = ({ label }: { label: string }) => (
  <button className="px-6 py-3 bg-[#972123] hover:bg-[#7a1b1f] transition duration-200 rounded-lg text-white text-base font-medium font-['Orbitron'] w-full md:w-auto">
    {label}
  </button>
);
