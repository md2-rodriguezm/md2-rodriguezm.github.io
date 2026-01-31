import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="full-viewport flex items-center justify-center bg-background">
        <div className="text-center section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-8xl md:text-9xl text-border">404</span>
            <h1 className="heading-lg mt-6 mb-4">Page Not Found</h1>
            <p className="body-md text-muted-foreground mb-12">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors focus-ring"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
