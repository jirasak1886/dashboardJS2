import Image from "next/image";

export default function Home1() {
  return (
    <div className="relative min-h-screen p-8 sm:p-20 font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center gap-12">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80"
    alt="Sea background"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black opacity-40"></div>
</div>


      {/* เนื้อหา */}
      <main className="row-start-2 bg-white rounded-xl shadow-md p-8 w-full max-w-md text-center sm:text-left relative z-10">
        <p className="text-3xl font-bold text-gray-900 mb-2">Jirasak Waennak</p>
        <p className="text-lg text-gray-600">652021044</p>
      </main>

      {/* footer */}
      <footer className="row-start-3 flex gap-8 flex-wrap justify-center text-gray-200 text-sm max-w-md w-full relative z-10">
        <FooterLink href="https://www.tsu.ac.th" label="🏫 TSU Website" />
        <FooterLink href="mailto:jirasak@example.com" label="✉️ Contact Me" />
        <FooterLink href="https://github.com/jirasak1886" label="🐙 GitHub" />
      </footer>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors hover:text-purple-400 underline underline-offset-2 cursor-pointer"
    >
      {label}
    </a>
  );
}
