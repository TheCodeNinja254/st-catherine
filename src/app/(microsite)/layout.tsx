import React from "react";
import MainLayout from "@/layout/main_layout";
import "@/theme/global.css";

export const metadata = {
  title: "St. Catherine Of Siena - Parish",
  description: "St. Catherine Of Siena - Archdiocese of Nairobi, Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ paddingBottom: 0, margin: 0 }}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
