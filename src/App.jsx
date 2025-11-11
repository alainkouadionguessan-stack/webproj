import React, { useEffect } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

export default function App() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map',
      style: 'https://demotiles.maplibre.org/style.json',
      center: [-5.5, 7.5],
      zoom: 6
    });
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <header className="bg-[#00B050] text-white font-bold flex justify-between items-center px-8 py-3 border-b-4 border-[#00B050]">
        <img src="/logo_acf.png" alt="Action Contre la Faim" className="h-12" />
        <nav className="flex gap-4">
          <button className="bg-white text-[#00B050] px-4 py-2 rounded font-semibold hover:bg-[#e6f4ea]">ACCUEIL</button>
          <button className="bg-white text-[#00B050] px-4 py-2 rounded font-semibold hover:bg-[#e6f4ea]">ZONES D'INTERVENTION</button>
          <button className="bg-white text-[#00B050] px-4 py-2 rounded font-semibold hover:bg-[#e6f4ea]">IMPLANTATION</button>
          <button className="bg-white text-[#00B050] px-4 py-2 rounded font-semibold hover:bg-[#e6f4ea]">OUTILS GEOSPATIAUX</button>
        </nav>
      </header>

      <div className="flex flex-1">
        <aside className="w-28 bg-[#f7f7f7] border-r flex flex-col items-center py-4 gap-4">
          {['/icon1.png','/icon2.png','/icon3.png','/icon4.png','/icon5.png'].map((icon, i) => (
            <div key={i} className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md">
              <img src={icon} alt={`icon-${i}`} className="w-8 h-8" />
            </div>
          ))}
        </aside>

        <main className="flex-1 flex flex-col items-center justify-start bg-cover bg-center" style={{ backgroundImage: 'url(/background_map.jpg)' }}>
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-[#0050C8] tracking-wide">GEOPORTAIL</h1>
            <h2 className="text-2xl font-bold text-[#0050C8]">ACTION CONTRE LA FAIM CÔTE D'IVOIRE</h2>
          </div>

          <div className="mt-6 flex flex-col gap-4 w-11/12">
            <img src="/geo_network.jpg" alt="Carte réseau" className="w-full h-56 object-cover rounded shadow" />
            <img src="/population_acf.jpg" alt="Population ACF" className="w-full h-64 object-cover rounded shadow" />
          </div>

          <div id="map" className="w-11/12 h-96 mt-6 border rounded shadow overflow-hidden"></div>
        </main>
      </div>

      <footer className="text-center text-sm text-gray-600 py-2 border-t">
        ACTION CONTRE LA FAIM CÔTE D’IVOIRE — 2025
      </footer>
    </div>
  );
}
