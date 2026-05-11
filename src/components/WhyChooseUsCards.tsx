"use client";

import {
  Phone,
  Lightbulb,
  Package,
  DollarSign,
  Store,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect-card";

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Brain: Lightbulb,
  Package,
  DollarSign,
  Store,
  Zap,
};

interface WhyUsItem {
  icon: string;
  title: string;
  body: string;
}

interface Props {
  items: WhyUsItem[];
}

export default function WhyChooseUsCards({ items }: Props) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => {
        const Icon = iconMap[item.icon] ?? Zap;
        return (
          <li key={i} className="list-none">
            <div className="relative h-full rounded-2xl border border-gray-100 p-2">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <div className="relative flex h-full flex-col gap-6 overflow-hidden rounded-xl bg-white p-8 shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-[#174470]/5 flex items-center justify-center group-hover:bg-[#FA8725]/10 transition-colors flex-shrink-0">
                  <Icon className="w-7 h-7 text-[#174470]" strokeWidth={1.75} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#174470]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
