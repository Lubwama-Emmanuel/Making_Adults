import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutMitch from "./pages/AboutMitch";
import Leaflet from "./pages/Leaflet";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/mitch" element={<AboutMitch />} />
        <Route path="/leaflet" element={<Leaflet />} />
      </Routes>
    </BrowserRouter>
  );
}
