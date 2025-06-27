export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded p-6 mt-5">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">👤 User Profile</h2>

      <div className="space-y-2 text-gray-700">
        <p><strong>Name:</strong> Jirasak Waennak</p>
        <p><strong>Email:</strong> 652021044@tsu.ac.th</p>
        <p><strong>Phone:</strong> 089-123-4567</p>
        <p><strong>Birthday:</strong> January 1, 2000</p>
        <p><strong>Address:</strong> 99/1 Moo 5, Muang District, Phatthalung, Thailand</p>
      </div>

      <div className="mt-6 text-right">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
