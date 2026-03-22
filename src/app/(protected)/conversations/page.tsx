"use client";

import { useState } from "react";
import { contacts, messages, type Contact } from "@/lib/mock-data";
import { ConversationList } from "@/components/conversations/conversation-list";
import { ConversationThread } from "@/components/conversations/conversation-thread";
import { ContactSidebar } from "@/components/conversations/contact-sidebar";

export default function ConversationsPage() {
  // Default to first contact that has messages
  const contactsWithMessages = contacts.filter((c) =>
    messages.some((m) => m.contactId === c.id)
  );
  const [selected, setSelected] = useState<Contact>(contactsWithMessages[0] || contacts[0]);

  return (
    <div className="flex h-screen">
      <ConversationList selectedId={selected.id} onSelect={setSelected} />
      <ConversationThread contact={selected} />
      <ContactSidebar contact={selected} />
    </div>
  );
}
