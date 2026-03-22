"use client";

import { contacts, messages, type Contact } from "@/lib/mock-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

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

function getLastMessage(contactId: string) {
  const contactMessages = messages.filter((m) => m.contactId === contactId);
  return contactMessages[contactMessages.length - 1];
}

interface ConversationListProps {
  selectedId: string;
  onSelect: (contact: Contact) => void;
}

export function ConversationList({ selectedId, onSelect }: ConversationListProps) {
  // Only show contacts that have messages
  const contactsWithMessages = contacts.filter((c) =>
    messages.some((m) => m.contactId === c.id)
  );

  return (
    <div className="flex h-screen w-[360px] flex-col border-r border-zinc-800/50">
      <div className="px-4 py-4">
        <h2 className="text-sm font-semibold text-white">Conversations</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 px-2 pb-4">
          {contactsWithMessages.map((contact) => {
            const lastMsg = getLastMessage(contact.id);
            const hasUnread = contact.status === "hot";
            return (
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
                <div className="relative shrink-0">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white",
                      getAvatarColor(`${contact.firstName} ${contact.lastName}`)
                    )}
                  >
                    {getInitials(contact.firstName, contact.lastName)}
                  </div>
                  {hasUnread && (
                    <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-zinc-950 bg-emerald-500" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className={cn("truncate text-sm", hasUnread ? "font-semibold text-white" : "font-medium text-zinc-200")}>
                      {contact.firstName} {contact.lastName}
                    </p>
                    {lastMsg && (
                      <span className="shrink-0 text-[10px] text-zinc-600">
                        {lastMsg.timestamp}
                      </span>
                    )}
                  </div>
                  <p className="truncate text-xs text-zinc-500">{contact.company}</p>
                  {lastMsg && (
                    <p className="mt-0.5 truncate text-xs text-zinc-600">
                      {lastMsg.direction === "outbound" ? "You: " : ""}
                      {lastMsg.content}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
