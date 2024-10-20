// import Link from "next/link";
// import Image from "next/image";
// import React from "react";

// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import MobileNav from "./MobileNav";

// function Navbar() {
//    return (
//       <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
//          <Link href="/" className="flex items-center gap-1">
//             <Image
//                src="/icons/logo.svg"
//                alt="yoom-logo"
//                width={32}
//                height={32}
//                className="max-sm:size-10"
//             />
//             <p className="text-[26px] font-extrabold text-white max-sm:hidden">
//                Yoom
//             </p>
//          </Link>

//          <div className="felx-between gap-5">
//             {/* clerk user management */}
//             <SignedIn>
//                <UserButton />
//             </SignedIn>
//             <SignedOut>
//                <SignInButton />
//             </SignedOut>
//             <MobileNav />
//          </div>
//       </nav>
//    );
// }

// export default Navbar;

import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./MobileNav";

const Navbar = () => {
   return (
      <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
         <Link href="/" className="flex items-center gap-1">
            <Image
               src="/icons/logo.svg"
               width={32}
               height={32}
               alt="yoom logo"
               className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden">
               YOOM
            </p>
         </Link>
         <div className="flex-between gap-5">
            <SignedIn>
               <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>

            <MobileNav />
         </div>
      </nav>
   );
};

export default Navbar;
