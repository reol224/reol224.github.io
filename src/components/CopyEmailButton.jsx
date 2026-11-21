import { useState } from "react";
import { getConfigData } from "../data/configReader";

export default function CopyEmailButton() {
  const [buttonText, setButtonText] = useState("Copy email");
  const { email } = getConfigData();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => setButtonText("Email copied"))
      .catch((error) => {
        console.error("Copy error:", error);
      });
  };

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className="copy-email-button"
      aria-live="polite"
    >
      {buttonText}
    </button>
  );
}
