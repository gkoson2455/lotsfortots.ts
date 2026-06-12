import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lots For Tots | 乐多探索坊",
  description: "Lots For Tots 乐多探索坊位于巴生 Bukit Raja，提供专业的儿童早教与探索课程。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  );
}