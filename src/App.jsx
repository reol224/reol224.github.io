import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  return (
    <div className="ide-container">
      <div className="ide-main">
        <Navbar />
        <main className="editor-area">
          <div className="editor-content">
            <SiteRoutes />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
