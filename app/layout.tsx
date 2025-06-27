import './globals.css'; // Global styles for the entire application
import Link from 'next/link';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="sticky top-0 z-50 bg-gray-800 text-white px-8 py-4 flex items-center justify-between gap-5">
          {/* โลโก้ next.svg ซ้ายสุด */}
          <div className="relative w-10 h-10 flex-shrink-0 bg-white rounded-md overflow-hidden">
            <Image src="/next.svg" alt="Next.js Logo" fill style={{ objectFit: 'contain' }} />
          </div>

          {/* ลิงก์ navbar ชิดซ้าย */}
          <div className="flex gap-6 items-center flex-grow">
            <Link href="/" className="text-white no-underline hover:underline">
              Home
            </Link>
            <Link href="/dashboard" className="text-white no-underline hover:underline">
              Dashboard
            </Link>
            <Link href="/about" className="text-white no-underline hover:underline">
              About
            </Link>
          </div>

          {/* User Icon SVG */}
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25v-1.125a6.375 6.375 0 0112.75 0v1.125"
              />
            </svg>
          </div>
        </nav>

        <div className="p-5 border border-gray-300 m-5 min-h-[calc(100vh-150px)]">
          {children}
        </div>

        <footer className="bg-gray-200 p-3 text-center mt-5">
          <p>&copy; {new Date().getFullYear()} My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
