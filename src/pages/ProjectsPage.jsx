import MyProfile from "../components/MyProfile";
import WhyHireMe from "../components/WhyHireMe";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import MerryMatch from "../components/MerryMatch";

function ProjectsPage() {
  return (
    <div className="flex flex-col bg-[#FAF4F2] h-screen relative">
      <Navbar />
      <p className="text-[40px] text-center mt-10 mb-400px] font-medium">
        My Projects
      </p>
      <MerryMatch />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
