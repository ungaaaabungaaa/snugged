import { Sparkles } from "lucide-react";

export function TryOnResultPlaceholder() {
  return (
    <div className="mt-4 rounded-[8px] border border-line p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-blush/10 text-blush">
          <Sparkles size={19} />
        </span>
        <div>
          <p className="font-semibold">Try-on job placeholder</p>
          <p className="text-sm text-muted">
            This will create a provider job, save the result image URL, and attach it to the customer
            after checkout auth.
          </p>
        </div>
      </div>
    </div>
  );
}
