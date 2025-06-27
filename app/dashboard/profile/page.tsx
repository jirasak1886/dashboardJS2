// app/dashboard/profile/page.tsx
import Link from 'next/link';

export default function ProfileListPage() {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md text-black">
      <h1 className="text-4xl font-extrabold mb-8 border-b pb-4 border-gray-300">
        User Profiles
      </h1>
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard/profile/user123"
            className="flex items-center gap-3 text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            <span className="text-xl">👤</span> View John Doe's Profile
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profile/jane-smith"
            className="flex items-center gap-3 text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            <span className="text-xl">👩‍🎨</span> View Jane Smith's Profile
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profile/naphat"
            className="flex items-center gap-3 text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            <span className="text-xl">🧑‍💻</span> View Naphat's Profile
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/profile/invalid-id"
            className="flex items-center gap-3 text-red-600 hover:text-red-800 hover:underline transition"
          >
            <span className="text-xl">❌</span> View an Invalid Profile (404)
          </Link>
        </li>
      </ul>
    </div>
  );
}
