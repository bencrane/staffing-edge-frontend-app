"use client";

import { useState } from "react";
import type { Contact } from "@/lib/mock-data";
import { messages, conversationEvents } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Phone, Mail, Linkedin, MessageSquare, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const channelOptions = [
  { key: "email" as const, label: "Email", icon: Mail },
  { key: "linkedin" as const, label: "LinkedIn", icon: Linkedin },
  { key: "sms" as const, label: "SMS", icon: MessageSquare },
];

const channelIcon = {
  email: Mail,
  linkedin: Linkedin,
  sms: MessageSquare,
};

interface ConversationThreadProps {
  contact: Contact;
}

export function ConversationThread({ contact }: ConversationThreadProps) {
  const [channel, setChannel] = useState<"email" | "linkedin" | "sms">("email");
  const [messageText, setMessageText] = useState("");

  const contactMessages = messages.filter((m) => m.contactId === contact.id);
  const contactEvents = conversationEvents.filter((e) => e.contactId === contact.id);

  // Interleave messages and events by simple ordering
  const timeline = [
    ...contactMessages.map((m) => ({ ...m, _type: "message" as const })),
    ...contactEvents.map((e) => ({ ...e, _type: "event" as const })),
  ];

  return (
    <div className="flex h-screen flex-1 flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-800/50 px-6 py-4">
        <div>
          <h2 className="text-sm font-semibold text-white">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="text-xs text-zinc-500">
            {contact.title} at {contact.company}
          </p>
        </div>
        <Button size="sm" variant="outline" className="gap-2 border-zinc-800 text-zinc-300">
          <Phone className="h-3.5 w-3.5" />
          Call
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1">
        <div className="space-y-4 p-6">
          {timeline.map((item) => {
            if (item._type === "event") {
              return (
                <div key={item.id} className="flex justify-center">
                  <span className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] text-zinc-500 ring-1 ring-zinc-800">
                    {item.label}
                  </span>
                </div>
              );
            }

            const isOutbound = item.direction === "outbound";
            const Icon = channelIcon[item.channel];

            return (
              <div
                key={item.id}
                className={cn("flex", isOutbound ? "justify-end" : "justify-start")}
              >
                <div className={cn("max-w-[420px]")}>
                  <div
                    className={cn(
                      "rounded-lg px-4 py-3 text-sm",
                      isOutbound
                        ? "bg-emerald-600/20 text-emerald-50 ring-1 ring-emerald-500/20"
                        : "bg-zinc-800 text-zinc-200 ring-1 ring-zinc-700/50"
                    )}
                  >
                    {item.content}
                  </div>
                  <div
                    className={cn(
                      "mt-1 flex items-center gap-1.5 text-[10px] text-zinc-600",
                      isOutbound ? "justify-end" : "justify-start"
                    )}
                  >
                    <Icon className="h-3 w-3" />
                    {item.timestamp}
                  </div>
                </div>
              </div>
            );
          })}
          {contactMessages.length === 0 && (
            <p className="text-center text-sm text-zinc-600">No messages yet</p>
          )}
        </div>
      </ScrollArea>

      {/* Compose */}
      <div className="border-t border-zinc-800/50 p-4">
        <div className="mb-3 flex gap-1">
          {channelOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setChannel(opt.key)}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                channel === opt.key
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-500 hover:text-zinc-300"
              )}
            >
              <opt.icon className="h-3 w-3" />
              {opt.label}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder={`Send via ${channel}...`}
            className="flex-1 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
          />
          <Button size="sm" className="bg-emerald-600 text-white hover:bg-emerald-700">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="mt-2 text-[10px] text-zinc-600">Replies sync automatically</p>
      </div>
    </div>
  );
}
