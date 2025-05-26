import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import About from "./pages/About";
import Contributors from "./pages/Contributors";
import Partners from "./pages/Partners";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import JoinMission from "./pages/JoinMission";
import SchedulePickup from "./pages/SchedulePickup";
import StartDonating from "./pages/StartDonating";
import BecomeVolunteer from "./pages/BecomeVolunteer";
import StartContributing from "./pages/StartContributing";
import ApplyPartner from "./pages/ApplyPartner";
import ContributorProfile from "./pages/ContributorProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col page-gradient">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contributors" element={<Contributors />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/join-mission" element={<JoinMission />} />
              <Route path="/schedule-pickup" element={<SchedulePickup />} />
              <Route path="/start-donating" element={<StartDonating />} />
              <Route path="/become-volunteer" element={<BecomeVolunteer />} />
              <Route path="/start-contributing" element={<StartContributing />} />
              <Route path="/apply-partner" element={<ApplyPartner />} />
              <Route path="/profile" element={<ContributorProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
