import "./App.css";
import "./fonts.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Mision from "./pages/Nosotros/Mision";
import Historia from "./pages/Nosotros/NuestraHistoria";
import Equipo from "./pages/Nosotros/NuestroEquipo";
import Inspiracion from "./pages/Nosotros/Inspiracion";
import Reconocimientos from "./pages/Nosotros/Reconocimientos";
import CasosExito from "./pages/Nosotros/CasosExito";
import ModeloSenda from "./pages/Nosotros/ModeloSenda";
import MapaColegio from "./pages/Nosotros/MapaColegio";
import Maternal from "./pages/Oferta/Maternal";
import Preescolar from "./pages/Oferta/Preescolar";
import Primaria from "./pages/Oferta/Primaria";
import Secundaria from "./pages/Oferta/Secundaria";
import AfterSchool from "./pages/Oferta/AfterSchool";
import Deportes from "./pages/Oferta/Deportes";
import AplicaSenda from "./pages/Admision/AplicaSenda";
import Colegiaturas from "./pages/Admision/Colegiaturas";
import PlaneaVisita from "./pages/Admision/PlaneaVisita";
import ProcesoAdmision from "./pages/Admision/ProcesoAdmision";
import Blog from "./pages/VidaSenda/Blog";
import ProximosEventos from "./pages/VidaSenda/ProximosEventos";
import AvisoPrivacidad from "./pages/AvisoPrivacidad";
import Contacto from "./pages/Contacto";
import Blog1 from "./pages/VidaSenda/Blog1";
import ScrollToTop from "./components/ScrollToTop";
import Blog2 from "./pages/VidaSenda/Blog2";
import Blog3 from "./pages/VidaSenda/Blog3";
import Blog4 from "./pages/VidaSenda/Blog4";
import CEFRFramework from "./pages/Nosotros/CEFRFramework"


function App() {
  return (
    <>
      <div>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/misionyvision" element={<Mision />} />
          <Route path="/nuestra-historia" element={<Historia />} />
          <Route path="/inspiracion-conviccion" element={<Inspiracion />} />
          <Route
            path="/reconocimientos-certificaciones"
            element={<Reconocimientos />}
          />
          <Route path="/casos-de-exito" element={<CasosExito />} />
          <Route path="/modelo-senda" element={<ModeloSenda />} />
          <Route path="/cefr-framework" element={<CEFRFramework />} />
          <Route path="/mapa-del-colegio" element={<MapaColegio />} />
          <Route path="/nuestro-equipo" element={<Equipo />} />
          <Route path="/maternal" element={<Maternal />} />
          <Route path="/preescolar" element={<Preescolar />} />
          <Route path="/primaria" element={<Primaria />} />
          <Route path="/secundaria" element={<Secundaria />} />
          <Route path="/after-school" element={<AfterSchool />} />
          <Route path="/deportes" element={<Deportes />} />
          <Route path="/aplica-al-senda" element={<AplicaSenda />} />
          <Route path="/colegiaturas" element={<Colegiaturas />} />
          <Route path="/planea-tu-visita" element={<PlaneaVisita />} />
          <Route path="/proceso-de-admision" element={<ProcesoAdmision />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-1" element={<Blog1 />} />
          <Route path="/blog-2" element={<Blog2 />} />
          <Route path="/blog-3" element={<Blog3 />} />
          <Route path="/blog-4" element={<Blog4 />} />
          <Route path="/proximos-eventos" element={<ProximosEventos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
