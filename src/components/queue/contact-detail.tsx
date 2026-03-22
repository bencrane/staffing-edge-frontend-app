"use client";

import type { Contact } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Mail,
  Linkedin,
  Phone,
  Voicemail,
  MessageSquare,
  MapPin,
  TrendingUp,
  Building2,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

const statusColors = {
  hot: "bg-red-500/15 text-red-500 border-red-500/20",
  warm: "bg-amber-500/15 text-amber-500 border-amber-500/20",
  new: "bg-blue-500/15 text-blue-500 border-blue-500/20",
};

const channelIcons = {
  email: Mail,
  linkedin: Linkedin,
  phone: Phone,
  voicemail: Voicemail,
  sms: MessageSquare,
};

interface ContactDetailProps {
  contact: Contact;
}

export function ContactDetail({ contact }: ContactDetailProps) {
  return (
    <ScrollArea className="h-screen flex-1">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-xl font-semibold text-white">
              {contact.firstName} {contact.lastName}
            </h2>
            <Badge
              variant="outline"
              className={cn("text-[10px] uppercase", statusColors[contact.status])}
            >
              {contact.status}
            </Badge>
          </div>
          <p className="text-sm text-zinc-400">
            {contact.title} at {contact.company}
          </p>
          <div className="mt-2 flex items-center gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {contact.location}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              {contact.phone}
            </span>
          </div>
        </div>

        {/* Signals */}
        {contact.signals.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {contact.signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20"
              >
                {signal}
              </span>
            ))}
          </div>
        )}

        {/* Company Intelligence */}
        <div className="mb-6 rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-zinc-400" />
              <h3 className="text-sm font-semibold text-white">{contact.company}</h3>
            </div>
            {contact.roleGrowth > 0 && (
              <span className="flex items-center gap-1 text-xs font-medium text-emerald-400">
                <TrendingUp className="h-3 w-3" />
                +{contact.roleGrowth} roles this week
              </span>
            )}
          </div>

          <div className="mb-3 flex items-center gap-6 text-xs text-zinc-400">
            <span>{contact.openRoles} open roles</span>
            <span>{contact.companyLocations.length} locations</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Last posted {contact.lastPosted}
            </span>
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            {contact.roleTypes.map((role) => (
              <Badge key={role} variant="secondary" className="text-xs">
                {role}
              </Badge>
            ))}
          </div>

          <div className="text-xs text-zinc-500">
            {contact.companyLocations.join(" \u00b7 ")}
          </div>
        </div>

        {/* Outreach History */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Outreach History</h3>
          {contact.outreachHistory.length === 0 ? (
            <p className="text-xs text-zinc-600">No outreach history yet</p>
          ) : (
            <div className="space-y-3">
              {contact.outreachHistory.map((entry, i) => {
                const Icon = channelIcons[entry.channel];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800">
                      <Icon className="h-3.5 w-3.5 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-200">{entry.action}</p>
                      <p className="text-xs text-zinc-600">{entry.timestamp}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
