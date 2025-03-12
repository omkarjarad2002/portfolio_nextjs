"use client";
import { useState } from "react";
import { Copy } from "lucide-react";

function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "omkarjarad2019@email.com"; // Replace with actual email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-8 rounded-lg">
      {/* Left Side Image */}
      <div className="full md:w-1/3">
        {" "}
        {/* Reduced width */}
        <img
          src="/email.webp"
          alt="Illustration"
          className="w-4/5 sm:w-3/5 rounded-lg shadow-lg mx-auto" // Adjusted width
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-400 mt-2">
          Feel free to reach out for collaborations or any inquiries.
        </p>

        <button
          onClick={handleCopy}
          className="flex items-center mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition"
        >
          {copied ? "Copied!" : "Copy Email"}
          <Copy className="ml-2" size={18} />
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
