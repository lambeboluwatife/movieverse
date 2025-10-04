import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MovieVerse",
    template: "%s | MovieVerse",
  },
  description:
    "MovieVerse is your gateway to the universe of cinema. Discover movies from every genre, era, and culture, all in one place. Whether you're a casual viewer or a film enthusiast, MovieVerse helps you explore, track, and engage with films like never before. With a sleek design and smart discovery tools, it’s more than a platform, it’s where stories come alive in the vast galaxy of cinema.",
  twitter: {
    card: "summary_large_image",
    title: "MovieVerse",
    description:
      "🚀 Discover movies in the universe of cinema. 🎬 Explore, track & engage with films across every genre & era. #MovieVerse",
    creator: "@Danibholie",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 800,
        height: 418,
        alt: "MovieVerse",
      },
    ],
  },
  openGraph: {
    title: "MovieVerse",
    description:
      "MovieVerse is your gateway to the universe of cinema. Discover movies from every genre, era, and culture, all in one place.",
    url: "https://yourdomain.com", // Replace with your domain
    siteName: "MovieVerse",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with your image URL
        width: 800,
        height: 418,
        alt: "MovieVerse",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
