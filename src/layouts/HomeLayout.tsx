import Header from "./Home/header";
import Footer from "./Home/footer";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
