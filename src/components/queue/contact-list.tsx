"use client";

import { contacts, type Contact } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const statusColors = {
  hot: "bg-red-500/15 text-red-500 border-red-500/20",
  warm: "bg-amber-500/15 text-amber-500 border-amber-500/20",
  new: "bg-blue-500/15 text-blue-500 border-blue-500/20",
};

function getInitials(first: string, last: string) {
  return `${first[0]}${last[0]}`;
}

function getAvatarColor(name: string) {
  const colors = [
    "bg-emerald-600",
    "bg-blue-600",
    "bg-violet-600",
    "bg-rose-600",
    "bg-amber-600",
    "bg-cyan-600",
    "bg-pink-600",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

interface ContactListProps {
  selectedId: string;
  onSelect: (contact: Contact) => void;
}

export function ContactList({ selectedId, onSelect }: ContactListProps) {
  return (
    <div className="flex h-screen w-[280px] flex-col border-r border-zinc-800/50">
      <div className="flex items-center justify-between px-4 py-4">
        <h2 className="text-sm font-semibold text-white">Today&apos;s Queue</h2>
        <Badge variant="secondary" className="text-xs">
          {contacts.length}
        </Badge>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 px-2 pb-4">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => onSelect(contact)}
              className={cn(
                "flex w-full items-start gap-3 rounded-md px-3 py-3 text-left transition-colors",
                selectedId === contact.id
                  ? "bg-zinc-900 ring-1 ring-zinc-800"
                  : "hover:bg-zinc-900/50"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white",
                  getAvatarColor(`${contact.firstName} ${contact.lastName}`)
                )}
              >
                {getInitials(contact.firstName, contact.lastName)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium text-zinc-100">
                    {contact.firstName} {contact.lastName}
                  </p>
                  <Badge
                    variant="outline"
                    className={cn("shrink-0 text-[10px] uppercase", statusColors[contact.status])}
                  >
                    {contact.status}
                  </Badge>
                </div>
                <p className="truncate text-xs text-zinc-500">{contact.company}</p>
                <p className="text-xs text-zinc-600">{contact.openRoles} open roles</p>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
