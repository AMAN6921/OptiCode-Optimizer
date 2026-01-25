import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ProgressBar } from "@/components/ProgressBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background circuit-pattern">
      <ProgressBar />
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <ScrollToTop />
    </div>
  );
}
