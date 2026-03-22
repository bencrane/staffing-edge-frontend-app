export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  companyDomain: string;
  phone: string;
  email: string;
  location: string;
  status: "hot" | "warm" | "new";
  openRoles: number;
  roleTypes: string[];
  companyLocations: string[];
  lastPosted: string;
  roleGrowth: number;
  signals: string[];
  outreachHistory: {
    channel: "email" | "linkedin" | "phone" | "voicemail" | "sms";
    action: string;
    timestamp: string;
  }[];
}

export interface Message {
  id: string;
  contactId: string;
  direction: "inbound" | "outbound";
  channel: "email" | "linkedin" | "sms";
  content: string;
  timestamp: string;
}

export interface ConversationEvent {
  id: string;
  contactId: string;
  type: "email_opened" | "linkedin_sent" | "voicemail_dropped" | "call_connected";
  label: string;
  timestamp: string;
}

export const contacts: Contact[] = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Mitchell",
    title: "VP of Talent Acquisition",
    company: "ProLogistix",
    companyDomain: "prologistix.com",
    phone: "(713) 555-0142",
    email: "s.mitchell@prologistix.com",
    location: "Houston, TX",
    status: "hot",
    openRoles: 47,
    roleTypes: ["Warehouse Associate", "Forklift Operator", "Shipping Clerk"],
    companyLocations: ["Houston, TX", "Dallas, TX", "San Antonio, TX"],
    lastPosted: "2 hours ago",
    roleGrowth: 23,
    signals: ["Opened 4 emails", "Connected on LinkedIn", "Visited pricing page"],
    outreachHistory: [
      { channel: "email", action: "Opened 4x", timestamp: "2 days ago" },
      { channel: "linkedin", action: "Accepted connection", timestamp: "1 day ago" },
      { channel: "voicemail", action: "Dropped VM", timestamp: "4 hours ago" },
    ],
  },
  {
    id: "2",
    firstName: "Marcus",
    lastName: "Thompson",
    title: "HR Director",
    company: "Cardinal Health",
    companyDomain: "cardinalhealth.com",
    phone: "(614) 555-0298",
    email: "m.thompson@cardinalhealth.com",
    location: "Columbus, OH",
    status: "hot",
    openRoles: 62,
    roleTypes: ["Pharmacy Tech", "Warehouse Lead", "Quality Inspector"],
    companyLocations: ["Columbus, OH", "Dublin, OH", "Groveport, OH"],
    lastPosted: "1 hour ago",
    roleGrowth: 15,
    signals: ["Replied to email", "Downloaded case study"],
    outreachHistory: [
      { channel: "email", action: "Replied", timestamp: "3 hours ago" },
      { channel: "phone", action: "Connected 2m 14s", timestamp: "1 day ago" },
      { channel: "email", action: "Opened 2x", timestamp: "3 days ago" },
    ],
  },
  {
    id: "3",
    firstName: "Jennifer",
    lastName: "Park",
    title: "Staffing Manager",
    company: "Amazon Logistics",
    companyDomain: "amazon.com",
    phone: "(206) 555-0177",
    email: "j.park@amazon.com",
    location: "Seattle, WA",
    status: "warm",
    openRoles: 134,
    roleTypes: ["Sortation Associate", "Delivery Driver", "Warehouse Associate"],
    companyLocations: ["Seattle, WA", "Kent, WA", "Tacoma, WA", "Everett, WA"],
    lastPosted: "30 minutes ago",
    roleGrowth: 41,
    signals: ["Opened 2 emails", "Viewed LinkedIn profile"],
    outreachHistory: [
      { channel: "email", action: "Opened 2x", timestamp: "1 day ago" },
      { channel: "linkedin", action: "Viewed profile", timestamp: "2 days ago" },
    ],
  },
  {
    id: "4",
    firstName: "David",
    lastName: "Hernandez",
    title: "Regional HR Manager",
    company: "FedEx Ground",
    companyDomain: "fedex.com",
    phone: "(901) 555-0334",
    email: "d.hernandez@fedex.com",
    location: "Memphis, TN",
    status: "warm",
    openRoles: 28,
    roleTypes: ["Package Handler", "Operations Manager", "Driver"],
    companyLocations: ["Memphis, TN", "Nashville, TN"],
    lastPosted: "1 day ago",
    roleGrowth: 8,
    signals: ["Opened 1 email"],
    outreachHistory: [
      { channel: "email", action: "Opened 1x", timestamp: "2 days ago" },
      { channel: "voicemail", action: "Dropped VM", timestamp: "3 days ago" },
    ],
  },
  {
    id: "5",
    firstName: "Rachel",
    lastName: "Kim",
    title: "Director of Nursing Recruitment",
    company: "HCA Healthcare",
    companyDomain: "hcahealthcare.com",
    phone: "(615) 555-0421",
    email: "r.kim@hcahealthcare.com",
    location: "Nashville, TN",
    status: "new",
    openRoles: 89,
    roleTypes: ["RN", "CNA", "Medical Assistant", "LPN"],
    companyLocations: ["Nashville, TN", "Austin, TX", "Denver, CO", "Miami, FL"],
    lastPosted: "3 hours ago",
    roleGrowth: 32,
    signals: [],
    outreachHistory: [],
  },
  {
    id: "6",
    firstName: "Brian",
    lastName: "O'Connor",
    title: "Talent Acquisition Lead",
    company: "XPO Logistics",
    companyDomain: "xpo.com",
    phone: "(203) 555-0189",
    email: "b.oconnor@xpo.com",
    location: "Greenwich, CT",
    status: "new",
    openRoles: 35,
    roleTypes: ["Freight Handler", "Dock Worker", "Dispatcher"],
    companyLocations: ["Greenwich, CT", "Charlotte, NC", "Portland, OR"],
    lastPosted: "6 hours ago",
    roleGrowth: 12,
    signals: ["Visited website"],
    outreachHistory: [
      { channel: "email", action: "Sent intro", timestamp: "1 day ago" },
    ],
  },
  {
    id: "7",
    firstName: "Lisa",
    lastName: "Nguyen",
    title: "VP of People Operations",
    company: "Medline Industries",
    companyDomain: "medline.com",
    phone: "(847) 555-0256",
    email: "l.nguyen@medline.com",
    location: "Northfield, IL",
    status: "warm",
    openRoles: 51,
    roleTypes: ["Production Worker", "Quality Control", "Machine Operator"],
    companyLocations: ["Northfield, IL", "Mundelein, IL", "Chicago, IL"],
    lastPosted: "4 hours ago",
    roleGrowth: 19,
    signals: ["Opened 3 emails", "Clicked link"],
    outreachHistory: [
      { channel: "email", action: "Clicked link", timestamp: "5 hours ago" },
      { channel: "email", action: "Opened 3x", timestamp: "1 day ago" },
      { channel: "phone", action: "No answer", timestamp: "2 days ago" },
    ],
  },
];

export const messages: Message[] = [
  {
    id: "m1",
    contactId: "1",
    direction: "outbound",
    channel: "email",
    content: "Hi Sarah, I noticed ProLogistix has been growing rapidly in the Houston area. We specialize in staffing warehouse and logistics roles and would love to discuss how we can help fill your open positions.",
    timestamp: "Mon 9:15 AM",
  },
  {
    id: "m2",
    contactId: "1",
    direction: "inbound",
    channel: "email",
    content: "Thanks for reaching out. We are actually looking for help with our warehouse associate positions. Can you send over some information about your rates?",
    timestamp: "Mon 2:30 PM",
  },
  {
    id: "m3",
    contactId: "1",
    direction: "outbound",
    channel: "email",
    content: "Absolutely! I've attached our rate sheet for warehouse roles in the Houston market. We can typically have candidates on-site within 48 hours. Would you have time for a quick call this week?",
    timestamp: "Mon 3:45 PM",
  },
  {
    id: "m4",
    contactId: "1",
    direction: "outbound",
    channel: "linkedin",
    content: "Sarah, great connecting with you here! Looking forward to discussing how we can support ProLogistix's staffing needs.",
    timestamp: "Tue 10:00 AM",
  },
  {
    id: "m5",
    contactId: "2",
    direction: "outbound",
    channel: "email",
    content: "Marcus, congratulations on Cardinal Health's expansion in the Columbus area. I'd love to discuss your staffing needs for the new distribution center.",
    timestamp: "Wed 8:30 AM",
  },
  {
    id: "m6",
    contactId: "2",
    direction: "inbound",
    channel: "email",
    content: "Good timing — we're ramping up hiring for Q2. Let's set up a call next week to discuss our needs for pharmacy techs and warehouse leads.",
    timestamp: "Wed 11:15 AM",
  },
  {
    id: "m7",
    contactId: "3",
    direction: "outbound",
    channel: "email",
    content: "Jennifer, I see Amazon Logistics has 134 open roles in the Seattle metro. We have a deep bench of warehouse and delivery talent in the PNW. Worth a conversation?",
    timestamp: "Thu 7:45 AM",
  },
  {
    id: "m8",
    contactId: "4",
    direction: "outbound",
    channel: "sms",
    content: "Hi David, this is Alex from StaffEdge. Following up on the voicemail I left about FedEx Ground's staffing needs in Memphis. Would love to connect.",
    timestamp: "Fri 1:00 PM",
  },
];

export const conversationEvents: ConversationEvent[] = [
  {
    id: "e1",
    contactId: "1",
    type: "email_opened",
    label: "Opened email \u00b7 Mon 3:12 PM",
    timestamp: "Mon 3:12 PM",
  },
  {
    id: "e2",
    contactId: "1",
    type: "linkedin_sent",
    label: "LinkedIn connection sent",
    timestamp: "Tue 9:55 AM",
  },
  {
    id: "e3",
    contactId: "1",
    type: "voicemail_dropped",
    label: "Voicemail dropped (32s)",
    timestamp: "Tue 4:30 PM",
  },
  {
    id: "e4",
    contactId: "2",
    type: "email_opened",
    label: "Opened email \u00b7 Wed 9:00 AM",
    timestamp: "Wed 9:00 AM",
  },
  {
    id: "e5",
    contactId: "2",
    type: "call_connected",
    label: "Call connected \u00b7 2m 14s",
    timestamp: "Thu 10:30 AM",
  },
];
