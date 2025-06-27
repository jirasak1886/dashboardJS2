export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8 text-black">
      <h2 className="text-2xl font-bold mb-6">🛠 Settings Page</h2>

      {/* Account Settings */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">🔐 Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="email">Update Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="password">Change Password</label>
            <input
              id="password"
              type="password"
              placeholder="New password"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="inline-flex items-center">
              <input type="checkbox" className="mr-2" />
              Enable Two-Factor Authentication (2FA)
            </label>
          </div>
        </div>
      </section>

      {/* Appearance Settings */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">🎨 Appearance Settings</h3>
        <div className="space-y-4">
          <label className="block font-medium mb-1" htmlFor="theme">Theme Selection</label>
          <select
            id="theme"
            className="w-full border rounded px-3 py-2"
            defaultValue="light"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System Default</option>
          </select>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">🔔 Notification Settings</h3>
        <div className="space-y-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            Email Notifications
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" />
            In-app Sounds
          </label>
          <label className="inline-flex items-center">
            <input type="checkbox" className="mr-2" />
            Daily Summary
          </label>
        </div>
      </section>

      {/* Save and Cancel Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Save Changes
        </button>
        <button className="border px-4 py-2 rounded hover:bg-gray-100 transition">
          Cancel
        </button>
      </div>
    </div>
  );
}
