
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MedicalTourism from "./pages/MedicalTourism";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/medical-tourism" element={<MedicalTourism />} />
          {/* Placeholder routes for remaining pages */}
          <Route path="/services" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Services Page - Coming Soon</h1></div>} />
          <Route path="/gallery" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Gallery Page - Coming Soon</h1></div>} />
          <Route path="/blogs" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Blogs Page - Coming Soon</h1></div>} />
          <Route path="/faqs" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">FAQs Page - Coming Soon</h1></div>} />
          <Route path="/news" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">News & Events Page - Coming Soon</h1></div>} />
          <Route path="/store" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Medical Store Page - Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
