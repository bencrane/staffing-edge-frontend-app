import { Sidebar } from "@/components/sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-60 flex-1">{children}</main>
    </div>
  );
}
