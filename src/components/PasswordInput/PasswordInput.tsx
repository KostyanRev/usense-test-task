import React, { useState } from "react";

import {
  getPasswordStrength,
  sectionColors,
} from "../../utils/passwordStrength";
import { StrengthIndicator } from "./StrengthIndicator";
import EyeHidePsw from "/svg/eye-psw-hide.svg";
import EyeShowPsw from "/svg/eye-psw-show.svg";

export const PasswordInput: React.FC = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const strength = getPasswordStrength(password);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex w-80 flex-col items-center">
      <div className="relative w-full">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the password"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-2"
        >
          <img
            src={showPassword ? EyeShowPsw : EyeHidePsw}
            alt={showPassword ? "Show password" : "Hide password"}
            width={25}
            height={25}
          />
        </button>
      </div>
      <StrengthIndicator colors={sectionColors[strength]} />
    </div>
  );
};
