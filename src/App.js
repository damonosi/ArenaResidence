import "./App.css";

import Footer from "./pages/footerPage.jsx";
import Header from "./pages/Header.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ParteneriPage from "./pages/ParteneriPage.jsx";
import ClientPage from "./pages/ClientPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
  return (
    <>
      <div className="site-wrapper">
        <div class="doc-loader">
          <img alt="Arena Residence" />
        </div>
        <Header />

        <div id="content" className="site-content center-relative">
          <HomePage />

          <ParteneriPage />

          <AboutPage />

          <ClientPage />

          <ContactPage />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
