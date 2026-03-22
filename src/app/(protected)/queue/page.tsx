"use client";

import { useState } from "react";
import { contacts, type Contact } from "@/lib/mock-data";
import { ContactList } from "@/components/queue/contact-list";
import { ContactDetail } from "@/components/queue/contact-detail";
import { ActionPanel } from "@/components/queue/action-panel";

export default function QueuePage() {
  const [selected, setSelected] = useState<Contact>(contacts[0]);

  const handleNextLead = () => {
    const currentIndex = contacts.findIndex((c) => c.id === selected.id);
    const nextIndex = (currentIndex + 1) % contacts.length;
    setSelected(contacts[nextIndex]);
  };

  return (
    <div className="flex h-screen">
      <ContactList selectedId={selected.id} onSelect={setSelected} />
      <ContactDetail contact={selected} />
      <ActionPanel contact={selected} onNextLead={handleNextLead} />
    </div>
  );
}
