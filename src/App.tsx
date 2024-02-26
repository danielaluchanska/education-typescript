import  Navbar from "@/components/Navbar/Navbar"
import { useState, useEffect } from 'react'
import { SelectedPage } from "@/shared/types"
import Home from "./components/Home/Home";
import Benefits from "./components/Benefits/Benefits";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <>
      <div className='app bg-gray-20 bg' >
     <Navbar 
     isTopOfPage={isTopOfPage}
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}/>
     <Home setSelectedPage={setSelectedPage}/>
     <Benefits setSelectedPage={setSelectedPage}/>
     <ContactUs setSelectedPage={setSelectedPage}/>
     <Footer />
     </div>
    </>
  )
}

export default App
