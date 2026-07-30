import PropTypes from "prop-types";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://owusuansah.vercel.app"),
  title: "Owusu Ansah — Backend & Full-stack Engineer",
  description:
    "Owusu Ansah builds secure APIs, digital identity infrastructure, and thoughtful web products from Kumasi, Ghana.",
  keywords: [
    "Owusu Ansah",
    "backend engineer",
    "full-stack developer",
    "Django developer",
    "API developer",
    "Ghana software engineer",
  ],
  authors: [{ name: "Owusu Ansah" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Owusu Ansah — Backend & Full-stack Engineer",
    description:
      "Secure APIs, digital identity infrastructure, and thoughtful web products.",
    url: "/",
    siteName: "Owusu Ansah",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Owusu Ansah — Secure digital products that earn trust",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owusu Ansah — Backend & Full-stack Engineer",
    description:
      "Secure APIs, digital identity infrastructure, and thoughtful web products.",
    images: ["/og-card.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
