"use client";

import { useState } from "react";
import type { Contact } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Building2, Voicemail, Calendar, Users } from "lucide-react";

interface ContactSidebarProps {
  contact: Contact;
}

export function ContactSidebar({ contact }: ContactSidebarProps) {
  const [notes, setNotes] = useState("");

  return (
    <div className="flex h-screen w-[280px] flex-col border-l border-zinc-800/50">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white">Contact Info</h3>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Phone className="h-3 w-3" />
            {contact.phone}
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <Mail className="h-3 w-3" />
            {contact.email}
          </div>
        </div>
      </div>

      <Separator className="bg-zinc-800/50" />

      <div className="p-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-zinc-400" />
          <h3 className="text-sm font-semibold text-white">{contact.company}</h3>
        </div>
        <p className="mt-1 text-xs text-zinc-500">{contact.openRoles} open roles</p>
      </div>

      <Separator className="bg-zinc-800/50" />

      <div className="p-4">
        <h3 className="mb-3 text-xs font-medium text-zinc-400">Quick Actions</h3>
        <div className="space-y-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 border-zinc-800 text-xs text-zinc-300"
          >
            <Voicemail className="h-3.5 w-3.5" />
            Drop Voicemail
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 border-zinc-800 text-xs text-zinc-300"
          >
            <Calendar className="h-3.5 w-3.5" />
            Schedule Meeting
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start gap-2 border-zinc-800 text-xs text-zinc-300"
          >
            <Users className="h-3.5 w-3.5" />
            Add to Campaign
          </Button>
        </div>
      </div>

      <Separator className="bg-zinc-800/50" />

      <div className="flex-1 p-4">
        <label className="mb-2 block text-xs font-medium text-zinc-400">Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add notes..."
          className="h-24 w-full resize-none rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
        />
      </div>
    </div>
  );
}
