//import StreamVideoProvider from "@/providers/StreamClientProvider";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
   return (
      <main>
         <StreamVideoProvider>{children}</StreamVideoProvider>
      </main>
   );
};
export default RootLayout;

// import StreamVideoProvider from "@/providers/StreamClientProvider";
// import { Metadata } from "next";
// export const metadata: Metadata = {
//    title: "YOOM",
//    description: "Video calling app",
//    icons: "/icons/logo.svg",
// };
// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//    return (
//       <main>
//          <StreamVideoProvider>{children}</StreamVideoProvider>
//       </main>
//    );
// };
// export default RootLayout;
