import getCurrentUser from "@/app/actions/getCurrentuser";
import DesktopSidebar from "./Desktopsidebar";

async function Sidebar({ children }: {
  children: React.ReactNode,
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full  ">
      <DesktopSidebar currentUser={currentUser!} />
      <main className="lg:pl-20 h-full">
        {children}
      </main>
    </div>
  )
}

export default Sidebar;