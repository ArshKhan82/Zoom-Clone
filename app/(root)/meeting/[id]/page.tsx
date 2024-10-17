"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "@/components/ui/MeetingSetup";
import MeetingRoom from "@/components/ui/MeetingRoom";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/ui/Loader";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
   const { isLoaded } = useUser();
   const [isSetupComplete, setIsSetupComplete] = useState(false);
   const { call, isCallLoading } = useGetCallById(id);

   if (!isLoaded || isCallLoading) return <Loader />;

   return (
      <div className="h-screen w-full">
         <StreamCall call={call}>
            <StreamTheme>
               {!isSetupComplete ? (
                  <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
               ) : (
                  <MeetingRoom />
               )}
            </StreamTheme>
         </StreamCall>
      </div>
   );
};

export default Meeting;
