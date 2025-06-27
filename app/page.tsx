import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between p-8 sm:p-20 text-blue-900 font-sans overflow-hidden">

      {/* 🖼️ พื้นหลังทะเลจาก Unsplash */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
          zIndex: 0,
        }}
      />

      {/* 🌊 คลื่น SVG ด้านล่าง */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg viewBox="0 0 1440 320" className="w-full h-32">
          <path fill="#ffffff" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,192C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* 🧭 Main Content */}
      <main className="relative z-20 flex flex-col items-center sm:items-start text-center sm:text-left gap-8">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg animate-bounce">
          🏖️ Welcome to your Personal Dashboard!
        </h1>
      </main>

      {/* 🐠 Footer */}
      <footer className="w-full bg-white-100 p-2 mt-5 rounded fixed bottom-0 left-0">
  <p className="text-center">Dashboard specific footer</p>
</footer>

    </div>
  );
}
