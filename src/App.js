import Header from "./components/common/header";
import Lp from "./pages/lp";
import "./styles/main.css";

function App() {
  return (
    <>
      <Header />
      <Lp />
    </>
    // <Router>
    //   <Preloader load={load} />
    //   <div className="App" id={load ? "no-scroll" : "scroll"}>
    //     <Header />
    //     <ScrollToTop />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/project" element={<Projects />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/resume" element={<Resume />} />
    //       <Route path="*" element={<Navigate to="/" />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
