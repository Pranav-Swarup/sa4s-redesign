
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const Index = lazy(() => import("./pages/Index"));
const Tools = lazy(() => import("./pages/Tools"));
const Showcases = lazy(() => import("./pages/Showcases"));
const Work = lazy(() => import("./pages/Work"));
const Publications = lazy(() => import("./pages/Publications"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Research = lazy(() => import("./pages/Research"));
const Team = lazy(() => import("./pages/Team"));
const Vacancies = lazy(() => import("./pages/Vacancies"));
const Gallery = lazy(() => import("./pages/Gallery"));
const News = lazy(() => import("./pages/News"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AgenticAI = lazy(() => import("./pages/AgenticAI"));
const AutoSE = lazy(() => import("./pages/AutoSE"));
const Spotlight = lazy(() => import("./pages/Spotlight"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Suspense fallback={<div className="container mx-auto px-4 py-16 text-gray-600">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/showcases" element={<Showcases />} />
              <Route path="/work" element={<Work />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogPost />} />
              <Route path="/research" element={<Research />} />
              <Route path="/team" element={<Team />} />
              <Route path="/vacancies" element={<Vacancies />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/spotlight" element={<Spotlight />} />
              <Route path="/agenticai" element={<AgenticAI />} />
              <Route path="/autose" element={<AutoSE />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
