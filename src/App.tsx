import "./App.css"
import Banner from "./features/banner/Banner"
import CommonQueries from "./features/common queries/CommonQueries"
import ContactUs from "./features/contact us/ContactUs"
import EssentialServices from "./features/essential services/EssentialServices"
import Footer from "./features/footer/Footer"
import VehicleHistory from "./features/in depth vehicle history/VehicleHistory"
import IndustriesWeServe from "./features/industries we serve/IndustriesWeServe"
import JobCard from "./features/jobcard/JobCard"
import MoreTools from "./features/more tools for management/MoreTools"
import SimplifySales from "./features/simplify sales/SimplifySales"
import WhySixNexD from "./features/why 6nexd/WhySixNexD"

function App() {
  return (
    <>
      <Banner />
      <EssentialServices />
      <JobCard />
      <SimplifySales/>
      <VehicleHistory/>
      <MoreTools/>
      <IndustriesWeServe/>
      <WhySixNexD/>
      <CommonQueries/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default App
