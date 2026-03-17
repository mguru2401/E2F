import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="careers">
            <Route index element={<Careers />} />
            <Route path=":jobId" element={<JobDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
