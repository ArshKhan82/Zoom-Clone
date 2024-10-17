import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MeetingModalProps {
   isOpen: boolean;
   onClose: () => void;
   title: string;
   className?: string; // Made className optional
   children: React.ReactNode;
   handleClick: () => void;
   buttonText?: string; // Made buttonText optional
   image?: string; // Made image optional
   buttonIcon?: string; // Made buttonIcon optional
}

const MeetingModal = ({
   isOpen,
   onClose,
   title,
   className = "", // Default to an empty string
   children,
   handleClick,
   buttonText = "Schedule Meeting", // Default button text
   image,
   buttonIcon,
}: MeetingModalProps) => {
   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
            <div className="flex flex-col gap-6">
               {image && (
                  <div className="flex justify-center">
                     <Image
                        src={image}
                        alt="Meeting illustration"
                        width={72}
                        height={72}
                     />
                  </div>
               )}

               <h1
                  className={cn(
                     "text-3xl font-bold leading-[42px]",
                     className
                  )}>
                  {title}
               </h1>
               {children}
               <button
                  className="flex items-center gap-1 bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onClick={handleClick}>
                  {buttonIcon && (
                     <Image
                        src={buttonIcon}
                        alt="Button icon"
                        width={13}
                        height={13}
                     />
                  )}
                  {buttonText}
               </button>
            </div>
         </DialogContent>
      </Dialog>
   );
};

export default MeetingModal;
