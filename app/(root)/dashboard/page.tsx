import ArtworkList from "@/components/artworks/ArtworkList";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { fetchQuery } from "convex/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const artworks = await fetchQuery(api.artworks.queries.listArtworks);

  if (!user) {
    redirect("/");
  }

  return (
    <main>
      <h1>Welcome {user.given_name ?? user.email}</h1>
      <Button asChild variant={"link"}>
        <Link href={"/dashboard/add"}>Añadir Artwork</Link>
      </Button>

      <div>
        <ArtworkList artworks={artworks} path="/dashboard" />
      </div>
    </main>
  );
};
export default DashboardPage;
