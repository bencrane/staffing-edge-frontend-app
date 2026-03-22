"use client";

import { useState } from "react";
import type { Contact } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const dispositions = [
  "No Answer",
  "Left VM",
  "Callback",
  "Meeting Set",
  "Not Interested",
];

interface ActionPanelProps {
  contact: Contact;
  onNextLead: () => void;
}

export function ActionPanel({ contact, onNextLead }: ActionPanelProps) {
  const [notes, setNotes] = useState("");
  const [selectedDisposition, setSelectedDisposition] = useState<string | null>(null);

  return (
    <div className="flex h-screen w-[300px] flex-col border-l border-zinc-800/50">
      {/* Call Button */}
      <div className="p-4">
        <Button className="w-full gap-2 bg-emerald-600 text-white hover:bg-emerald-700">
          <Phone className="h-4 w-4" />
          Call Now
        </Button>
      </div>

      {/* Call Notes */}
      <div className="flex-1 px-4">
        <label className="mb-2 block text-xs font-medium text-zinc-400">
          Call Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add notes during or after call..."
          className="h-32 w-full resize-none rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
        />

        {/* Disposition */}
        <div className="mt-4">
          <label className="mb-2 block text-xs font-medium text-zinc-400">
            Disposition
          </label>
          <div className="grid grid-cols-2 gap-2">
            {dispositions.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDisposition(d === selectedDisposition ? null : d)}
                className={cn(
                  "rounded-md border px-3 py-2 text-xs font-medium transition-colors",
                  selectedDisposition === d
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                )}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Save & Next */}
      <div className="border-t border-zinc-800/50 p-4">
        <Button
          onClick={onNextLead}
          className="w-full gap-2 bg-zinc-800 text-zinc-100 hover:bg-zinc-700"
        >
          Save & Next Lead
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
