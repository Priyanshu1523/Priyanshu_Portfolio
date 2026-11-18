import React from 'react';

export default function Marquee({ reverse = false, speed = "marquee" }) {
  const items = [
    "FULL-STACK ENGINEERING",
    "CUSTOM ODOO MODULES",
    "ERPNEXT & FRAPPE",
    "REACT.JS & NODE.JS",
    "ENTERPRISE AUTOMATION",
    "POSTGRESQL & REST APIS",
    "AI-DRIVEN WORKFLOWS",
    "CLEAN ARCHITECTURE"
  ];

  return (
    <div className="w-full overflow-hidden py-5 bg-[#0B3D2E] text-[#D6C29A] border-y border-[#D6C29A]/20 select-none">
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 gap-6">
            <span className="font-editorial text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-[#D6C29A]/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
