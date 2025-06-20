import { Metadata } from "next";
import { Fira_Code, Fira_Sans_Extra_Condensed } from "next/font/google";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Murilo Sopi",
  description: "Teste",
};

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

const firaSans = Fira_Sans_Extra_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
