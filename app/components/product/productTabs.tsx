"use client";

import { useState } from "react";

export default function ProductTabs({
  slug,
  description,
  additionalInfo,
}: {
  slug: string;
  description: string[];
  additionalInfo?: Record<string, string>;
}) {
  const [activeTab, setActiveTab] = useState<"description" | "additional">(
    "description"
  );

  return (
    <div className="mt-16 bg-white rounded-2xl shadow">
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-6 py-4 font-medium transition ${
            activeTab === "description"
              ? "border-b-2 border-[var(--honey-gold)] text-[var(--deep-honey-brown)]"
              : "text-gray-500"
          }`}
        >
          Description
        </button>

        {additionalInfo && (
          <button
            onClick={() => setActiveTab("additional")}
            className={`px-6 py-4 font-medium transition ${
              activeTab === "additional"
                ? "border-b-2 border-[var(--honey-gold)] text-[var(--deep-honey-brown)]"
                : "text-gray-500"
            }`}
          >
            Additional Information
          </button>
        )}
      </div>

      <div className="p-8 text-gray-700 space-y-6">
        {activeTab === "description" && slug === "up-and-running-hive" && (
          <>
            <p className="text-lg font-medium">{description[0]}</p>
            <ul className="space-y-2">
              {description.slice(1, 7).map((line, i) => (
                <li key={i}>• {line}</li>
              ))}
            </ul>
            <p>{description.slice(7).join(" ")}</p>
          </>
        )}

        {activeTab === "description" && slug === "package-bees" && (
          <>
            <p className="text-lg font-medium">{description[0]}</p>
            <ul className="space-y-2">
              {description.slice(1, 4).map((line, i) => (
                <li
                  key={i}
                  className={
                    line.includes("2025 Sold Out")
                      ? "font-semibold"
                      : undefined
                  }
                >
                  • {line}
                </li>
              ))}
            </ul>

            <p className="text-lg font-medium">{description[4]}</p>
            <div className="space-y-2">
              {description.slice(5).map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </>
        )}

        {activeTab === "description" && slug === "queen-bees" && (
          <>
            <ul className="space-y-3">
              {description.map((line, i) => (
                <li
                  key={i}
                  className={
                    line.includes("2025 Sold Out")
                      ? "font-semibold"
                      : undefined
                  }
                >
                  • {line}
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === "additional" && additionalInfo && (
          <div className="space-y-3">
            {Object.entries(additionalInfo).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
