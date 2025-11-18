// app/dashboard/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Header, Footer } from '@/components/homepage';
import Link from 'next/link';
import { db } from '@/lib/db';
import { categories } from '@/lib/schema';

// Fetch all categories
async function fetchCategories() {
  try {
    const result = await db
      .select({
        id: categories.id,
        name: categories.name,
        slug: categories.slug,
      })
      .from(categories)
      .orderBy(categories.name);
    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/register');
  }

  const allCategories = await fetchCategories();

  return (
    <div className="min-h-screen bg-white">
      <Header categories={allCategories} />
      <main>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-semibold mb-6">Welcome to your Dashboard</h1>
            <div className="space-y-4">
              <p className="text-gray-700">
                Logged in as: <strong className="text-gray-900">{session.user?.email || session.user?.name}</strong>
              </p>
              
              <div className="border-t pt-4">
                <h2 className="text-xl font-medium mb-3">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-900">Profile Settings</h3>
                    <p className="text-sm text-blue-700 mt-1">Manage your account settings</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-900">Activity</h3>
                    <p className="text-sm text-green-700 mt-1">View your recent activity</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-purple-900">Support</h3>
                    <p className="text-sm text-purple-700 mt-1">Get help and support</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <Link
                  href="/logout"
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
