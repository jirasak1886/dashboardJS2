// app/dashboard/profile/[userId]/page.tsx
import { notFound } from 'next/navigation';

// Mock data ผู้ใช้สมติ
const mockUsers = [
  { id: 'user123', name: 'John Doe', email: 'john@example.com', bio: 'Web developer from NY' },
  { id: 'jane-smith', name: 'Jane Smith', email: 'jane@example.com', bio: 'Graphic designer from LA' },
  { id: 'naphat', name: 'Naphat Example', email: 'naphat@example.com', bio: 'Product Manager' },
];

interface Props {
  params: {
    userId: string;
  };
}

export default function UserProfilePage({ params }: Props) {
  const user = mockUsers.find(u => u.id === params.userId);

  if (!user) {
    notFound(); // แสดงหน้า 404 ถ้าไม่เจอ user
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8 text-black">
      <h1 className="text-4xl font-extrabold mb-6 border-b pb-4 border-gray-300">
        Profile of User: <span className="text-purple-700">{user.name}</span>
      </h1>

      <div className="space-y-4 text-lg">
        <div>
          <p className="font-semibold text-gray-700">User ID</p>
          <p className="text-gray-900">{user.id}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Email</p>
          <p className="text-gray-900">{user.email}</p>
        </div>

        <div>
          <p className="font-semibold text-gray-700">Bio</p>
          <p className="text-gray-900">{user.bio || 'No bio available'}</p>
        </div>
      </div>
    </div>
  );
}
