
import { Inter, Poppins } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ajay | Full-Stack Developer",
  description: "Personal portfolio of Ajay - Full-Stack Developer (2 YOE)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body className={`${inter.className} bg-white dark:bg-gray-950`}>
  <ThemeProvider>
    <Navbar />
          {children}
           <Footer />
  </ThemeProvider>
</body>

    </html>
  );
}
