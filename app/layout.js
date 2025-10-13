import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

export const metadata = {
  title: "Ajay Duraisamy | Full Stack Developer",
  description:
    "Ajay Duraisamy is a passionate Full Stack Developer dedicated to crafting immersive UI experiences with React and Next.js. Known for clean code and elegant interfaces.",
  keywords:
    "Ajay Duraisamy, Full Stack Developer, React Developer, Next.js Developer, Web Developer, UI Developer, Web Development, JavaScript, HTML, CSS",
  author: "Ajay Duraisamy",
  robots: "index, follow",
  canonical: "https://emonsingha.vercel.app",
  openGraph: {
    ...openGraphImage,
    title: "Ajay Duraisamy | Full Stack Developer",
    type: "website",
    url: "https://emonsingha.vercel.app/",
    description:
      "Ajay Duraisamy is a passionate Full Stack Developer who excels in creating engaging UI experiences with a focus on React and Next.js. Explore his portfolio to see his work.",
    site_name: "Ajay Duraisamy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@EmonSingha209",
    title: "Ajay Duraisamy | Full Stack Developer",
    description:
      "Discover the work of Ajay Duraisamy, a dedicated Full Stack Developer specializing in React and Next.js, known for clean code and beautiful UI designs.",
    image: "https://emonsingha.vercel.app/img/ogImage.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
