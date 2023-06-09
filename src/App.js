import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./routes/home/home.component";
import Startup from "./routes/startup/startup.component";
import Investor from "./routes/investor/investor.component";
import Authentication from "./routes/auth/auth.component";
import About from "./routes/about/about.component";
import AddListing from "./routes/add-listing/add-listing.component";
import Contact from "./routes/contact/contact.component";
import Pricing from "./routes/pricing/pricing.component";
import Community from "./routes/community/community.component";
import Privacy from "./routes/privacy/privacy.component";
import Terms from "./routes/terms/terms.comopent";
import Cancellation from "./routes/cancellation/cancellation.component";
import Shipping from "./routes/shipping/shipping.component";
import Search from "./components/search/search.component";
import FAQ from "./routes/faq/faq.component";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="startup" element={<Startup />} />
        <Route path="investor" element={<Investor />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="about" element={<About />} />
        <Route path="addListing" element={<AddListing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pricing" element={<Pricing />} />

        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="refund" element={<Cancellation />} />

        <Route path="shipping" element={<Shipping />} />
        <Route path="guidelines" element={<Community />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
