
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1 pt-32">{/* 8rem padding-top */}
        <Hero/>

      </main>
      <Footer/>
    
    </div>
  );
}
