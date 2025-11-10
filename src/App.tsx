import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { UseCasesPage } from "./components/UseCasesPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { PricingPage } from "./components/PricingPage";
import { FAQPage } from "./components/FAQPage";
import { ContactPage } from "./components/ContactPage";
import { HostDashboard } from "./components/HostDashboard";
import { Toaster } from "./components/ui/sonner";
import { AuthForm } from "./components/AuthForm";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login"); // 👈 added

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // 👇 updated navigation to support mode
  const handleNavigate = (page: string, mode: "login" | "signup" = "login") => {
    if (page === "login") setAuthMode(mode);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "use-cases":
        return <UseCasesPage onNavigate={handleNavigate} />;
      case "features":
        return <FeaturesPage onNavigate={handleNavigate} />;
      case "pricing":
        return <PricingPage onNavigate={handleNavigate} />;
      case "faq":
        return <FAQPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      case "dashboard":
        return <HostDashboard onNavigate={handleNavigate} />;
      case "login":
        return <AuthForm onNavigate={handleNavigate} defaultView={authMode} />; // 👈 passes login/signup
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const hideLayout = currentPage === "login";

  return (
    <div className="min-h-screen bg-white">
      {!hideLayout && <Navbar currentPage={currentPage} onNavigate={handleNavigate} />}
      <main>{renderPage()}</main>
      {!hideLayout && <Footer onNavigate={handleNavigate} />}
      <Toaster />
    </div>
  );
}
