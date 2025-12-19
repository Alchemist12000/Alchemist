import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: {
    default: "ALCHEMIST",
    template: "%s | ALCHEMIST",
  },
  description: "Operator at the intersection of Markets, Systems & Web3",
  metadataBase: new URL("https://alchemist-taupe.vercel.app/"),
  openGraph: {
    title: "ALCHEMIST",
    description: "Markets, Systems & Web3",
    url: "https://alchemist-taupe.vercel.app/",
    siteName: "ALCHEMIST",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALCHEMIST",
    description: "Markets, Systems & Web3",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="border-b border-gray-800 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between">
            <Link href="/" className="font-bold">ALCHEMIST</Link>
            <div className="flex gap-6 text-gray-400 text-sm">
              <Link href="/about">About</Link>
              <Link href="/work">Work</Link>
              <Link href="/systems">Systems</Link>
              <a href="https://x.com/_web3alchemist" target="_blank">X</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}