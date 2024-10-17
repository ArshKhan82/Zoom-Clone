import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { Metadata } from "next";
// import Sidebar from "@/components/ui/sidebar";

export const metadata: Metadata = {
   title: "YOOM",
   description: "Video calling app",
   icons: "/icons/logo.svg",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <main className="relative">
         <Navbar />

         <div className="flex">
            <Sidebar />

            <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
               <div className="w-full ">{children}</div>
            </section>
         </div>
      </main>
   );
};

export default HomeLayout;

/**
 * Documentation:
 * HomeLayout component that provides a layout structure for the home page.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 *
 * @returns {JSX.Element} The JSX element representing the layout.
 */
