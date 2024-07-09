import Hero from "./Components/Hero/Hero"
import './App.css'
import Services from "./Components/Services/Services"
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy"
import { BannerX } from "./Components/Banner/Banner"


function App() {
  

  return (
    <div className="overflow-x-hidden">
     
      <Hero/>
      <Services/>
      <WhereToBuy/>
       <BannerX/>
    </div>
  )
}

export default App
