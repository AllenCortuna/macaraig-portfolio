import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  style: ["normal", "italic",],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Imarie Macaraig Portfolio",
  description: " E-Portfolio of Imarie Macaraig",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex justify-center items-start bg-[#fbfaf7] h-screen overflow-auto text-zinc-700 text-sm">{children}</main>
      </body>
    </html>
  );
}