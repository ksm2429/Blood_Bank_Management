
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DonorRegister from "./pages/DonorRegister";
import BloodRequest from "./pages/BloodRequest";
import BloodInventory from "./pages/BloodInventory";
import AdminDashboard from "./pages/AdminDashboard";
import DonorSearch from "./pages/DonorSearch";
import BloodRequests from "./pages/BloodRequests";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<DonorRegister />} />
          <Route path="/request" element={<BloodRequest />} />
          <Route path="/inventory" element={<BloodInventory />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/donors" element={<DonorSearch />} />
          <Route path="/requests" element={<BloodRequests />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
