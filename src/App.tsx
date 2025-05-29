import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import About from "./pages/About";
import Contributors from "./pages/Contributors";
import Partners from "./pages/Partners";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import JoinMission from "./pages/JoinMission";
import SchedulePickup from "./pages/SchedulePickup";
import StartDonating from "./pages/StartDonating";
import BecomeVolunteer from "./pages/BecomeVolunteer";
import StartContributing from "./pages/StartContributing";
import ApplyPartner from "./pages/ApplyPartner";
import ContributorProfile from "./pages/ContributorProfile";
import { useEffect } from "react";

const queryClient = new QueryClient();

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col page-gradient">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/join-mission" element={<JoinMission />} />
                <Route path="/start-donating" element={<StartDonating />} />
                <Route 
                  path="/schedule-pickup" 
                  element={
                    <ProtectedRoute>
                      <SchedulePickup />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/become-volunteer" 
                  element={
                    <ProtectedRoute>
                      <BecomeVolunteer />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/start-contributing" element={<StartContributing />} />
                <Route 
                  path="/apply-partner" 
                  element={
                    <ProtectedRoute>
                      <ApplyPartner />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <ContributorProfile />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <Chatbot />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
