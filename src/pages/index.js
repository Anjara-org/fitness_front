import Navbar from "../pages/components/Navbar.js";
import Global from "../pages/components/frontOffice/global.jsx";
import TrainingProgram from "../pages/components/frontOffice/types.jsx";
import Footer from "../pages/components/Footer.js";
export default function home() {
  return (
    <>
      <Navbar />
      <Global />
      <TrainingProgram />
      <Footer />
    </>
  );
}
