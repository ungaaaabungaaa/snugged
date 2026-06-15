import Link from "next/link";
import { Heart, Package, Sparkles, UserRound } from "lucide-react";

export default function AccountPage() {
  const links = [
    { href: "/account/orders", label: "Orders", icon: Package },
    { href: "/account/wishlist", label: "Synced Wishlist", icon: Heart },
    { href: "/account/try-ons", label: "AI Try-ons", icon: Sparkles }
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-blush/10 text-blush">
          <UserRound size={44} />
        </div>
        <h1 className="mt-5 text-4xl font-black">Account</h1>
        <p className="mt-2 text-muted">Created only during checkout after phone OTP verification.</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="rounded-[8px] border border-line p-5 hover:border-blush">
              <Icon className="text-blush" />
              <h2 className="mt-4 font-bold">{item.label}</h2>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
