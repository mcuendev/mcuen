import DashboardNavbar from "@/components/layout/DashboardNavbar";
import { UserProvider } from "@/context/user-context";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login");
  }

  const publicUser = {
    username: user.username,
    email: user.email,
    given_name: user.given_name,
    family_name: user.family_name,
    full_name: user.picture,
  };

  return (
    <UserProvider user={publicUser}>
      <DashboardNavbar />
      <main className="flex-1 pt-21 container mx-auto p-4 md:px-10">
        {children}
      </main>
    </UserProvider>
  );
}
