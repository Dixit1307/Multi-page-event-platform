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
  const [currentPage, setCurrentPage] = useState(() => {
    // 👇 if token already exists, go to dashboard directly
    return localStorage.getItem("authToken") ? "dashboard" : "home";
  });

  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // ✅ Handle navigation between pages
  const handleNavigate = (page: string, mode: "login" | "signup" = "login") => {
    if (page === "login") setAuthMode(mode);

    // ✅ Redirect to dashboard after login if token exists
    if (page === "login" && localStorage.getItem("authToken")) {
      setCurrentPage("dashboard");
    } else {
      setCurrentPage(page);
    }
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    setCurrentPage("home");
  };

  // ✅ Render current page
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
        // ✅ Only show dashboard if logged in
        return localStorage.getItem("authToken") ? (
          <HostDashboard onNavigate={handleNavigate} />
        ) : (
          <AuthForm onNavigate={handleNavigate} defaultView="login" />
        );
      case "login":
        return <AuthForm onNavigate={handleNavigate} defaultView={authMode} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Navbar hides only on login page */}
      {currentPage !== "login" && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      <main>{renderPage()}</main>

      {/* ✅ Footer hides on login & dashboard pages */}
      {currentPage !== "login" && currentPage !== "dashboard" && (
        <Footer onNavigate={handleNavigate} />
      )}

      <Toaster />
    </div>
  );
}
