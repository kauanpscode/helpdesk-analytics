import Header from "./Home/header";
import Footer from "./Home/footer";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
