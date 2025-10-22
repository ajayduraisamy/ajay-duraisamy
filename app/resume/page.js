import ResumeViewer from "@/components/ResumeViewer";
export const metadata = {
  title: "Resume | Ajay Duraisamy",
  description:
    "Explore the professional resume of Ajay Duraisamy, a passionate Jr. Software Engineer with expertise in React and Next.js.",
  robots: "index, follow",
  canonical: "https://ajay-duraisamy.vercel.app/resume",
  openGraph: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Resume",
    url: "https://ajay-duraisamy.vercel.app/resume",
    
    description:
      "Explore the professional resume of Ajay Duraisamy, a passionate Jr. Software Engineer with expertise in React and Next.js.",
  },
};
export default function Resume() {
  return (
    <div className="grid w-full pt-16 md:pt-5 overflow-auto bg-background place-items-center">
      <ResumeViewer
        file="/resume/Full_Stack_Developer_Ajay.pdf"
        downloadName="Ajay-duraisamy-Resume"
      />
    </div>
  );
}
