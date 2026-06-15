"use client";

import Link from "next/link";
import { Heart, Home, Search, ShoppingBag, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@snugged/ui";

const items = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/shop", icon: Search, label: "Shop" },
  { href: "/cart", icon: ShoppingBag, label: "Cart" },
  { href: "/wishlist", icon: Heart, label: "Saved" },
  { href: "/account", icon: UserRound, label: "Account" }
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-3 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-md items-center justify-between rounded-full bg-blush px-4 py-3 text-white shadow-soft md:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full transition",
              active ? "bg-white/18" : "hover:bg-white/12",
            )}
            aria-label={item.label}
          >
            <Icon size={21} />
          </Link>
        );
      })}
    </nav>
  );
}
