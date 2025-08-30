import React from "react";
export default function Stepper({ steps }) {
  return (
    <div className="flex flex-col">
      {steps.map((step, i) => {
        const isDone = step.status === "done";
        const isLast = i === steps.length - 1;

        return (
          <div key={i} className="flex items-start">
            <div className="flex flex-col items-center mr-3">
              {isDone ? (
                <span className="w-5 h-5 flex items-center justify-center text-green-900 text-base leading-none">
                  ✔
                </span>
              ) : (
                <span className="w-5 h-5 rounded-full border-2 border-gray-400 bg-white inline-block" />
              )}
              {!isLast && <div className="w-1 h-10 bg-[#10f836]" />}
            </div>
              <span className="text-sm md:text-lg lg:text-xl">
          {step.label}
        </span>
          </div>
        );
      })}
    </div>
  );
}
