export default function DashboardHomePage() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow mt-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">🏠 Home</h1>
      <p className="mb-2 text-lg">
        Welcome to your personal dashboard!
      </p>
      <p className="text-gray-600">
        Use the navigation above to explore <span className="font-semibold">settings</span> and <span className="font-semibold">profile</span>.
      </p>
    </div>
  );
}
