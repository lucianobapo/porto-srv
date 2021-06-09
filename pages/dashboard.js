import Link from "next/link";

import useAuth from "../hooks/useAuth";

function Dashboard() {
  const { user } = useAuth();
  console.log("user", user);

  return (
    <div>
      <h1>Dashboard: {user?.displayName}</h1>
      <Link href="/sobre">
        <a>Acessar página Sobre</a>
      </Link>
    </div>
  );
}

export default Dashboard;
