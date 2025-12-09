import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote",
  description: "Ready to start your project? Contact Força Builders in Rochelle Park, NJ. Call 973-449-5343 or email jean@forcabuilders.com.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
