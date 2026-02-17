import Navbar from '@/components/Navbar';
import ProjectsGrid from '@/components/ProjectsGrid';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        {/* Minimal header for Projects page */}
        <section className="pt-32 pb-8 bg-background">
          <div className="section-container">
            <span className="caption text-primary">Portfolio</span>
            <h1 className="heading-lg mt-4">Projects</h1>
            <div className="w-16 h-px bg-primary mt-6" />
          </div>
        </section>
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
