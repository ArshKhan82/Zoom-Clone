"use client";
import { useEffect, useState } from "react";
import {
   DeviceSettings,
   VideoPreview,
   useCall,
   useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Button } from "./button";

// import Alert from "./Alert";

const MeetingSetup = ({
   setIsSetupComplete,
}: {
   setIsSetupComplete: (value: boolean) => void;
}) => {
   // https://getstream.io/video/docs/react/guides/call-and-participant-state/#call-state
   const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
   const callStartsAt = useCallStartsAt();
   const callEndedAt = useCallEndedAt();
   const callTimeNotArrived =
      callStartsAt && new Date(callStartsAt) > new Date();
   const callHasEnded = !!callEndedAt;

   const call = useCall();

   if (!call) {
      throw new Error(
         "useStreamCall must be used within a StreamCall component."
      );
   }

   // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
   const [isMicCamToggled, setIsMicCamToggled] = useState(false);

   useEffect(() => {
      if (isMicCamToggled) {
         call.camera.disable();
         call.microphone.disable();
      } else {
         call.camera.enable();
         call.microphone.enable();
      }
   }, [isMicCamToggled, call.camera, call.microphone]);

   //    if (callTimeNotArrived)
   //       return (
   //          <Alert
   //             title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
   //          />
   //       );

   //    if (callHasEnded)
   //       return (
   //          <Alert
   //             title="The call has been ended by the host"
   //             iconUrl="/icons/call-ended.svg"
   //          />
   //       );

   return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
         <h1 className="text-center text-2xl font-bold">Setup</h1>
         <VideoPreview />
         <div className="flex h-16 items-center justify-center gap-3">
            <label className="flex items-center justify-center gap-2 font-medium">
               <input
                  type="checkbox"
                  checked={isMicCamToggled}
                  onChange={(e) => setIsMicCamToggled(e.target.checked)}
               />
               Join with mic and camera off
            </label>
            <DeviceSettings />
         </div>
         <Button
            className="rounded-md bg-green-500 px-4 py-2.5"
            onClick={() => {
               call.join();

               setIsSetupComplete(true);
            }}>
            Join meeting
         </Button>
      </div>
   );
};

export default MeetingSetup;

// "use client";
// import {
//    DeviceSelectorAudioInput,
//    DeviceSelectorVideo,
//    DeviceSettings,
//    useCall,
//    VideoPreview,
// } from "@stream-io/video-react-sdk";
// import React, { useEffect, useState } from "react";
// import { Button } from "./button";

// interface MeetingSetupProps {
//    setIsSetupComplete: (value: boolean) => void;
// }

// const MeetingSetup = ({ setIsSetupComplete }: MeetingSetupProps) => {
//    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
//    const call = useCall();

//    if (!call) {
//       throw new Error(
//          "Call is not available. useCall must be used within StreamCall Component"
//       );
//    }

//    useEffect(() => {
//       if (isMicCamToggledOn) {
//          call?.camera.disable();
//          call?.microphone.disable();
//       } else {
//          call?.camera.enable();
//          call?.microphone.enable();
//       }
//    }, [isMicCamToggledOn, call]);

//    return (
//       <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
//          <h1 className="text-2xl font-bold">Setup</h1>
//          <VideoPreview />
//          <div className="flex h-16 items-center justify-center gap-3">
//             <label className="flex items-center justify-center gap-2 font-medium">
//                <input
//                   type="checkbox"
//                   checked={isMicCamToggledOn}
//                   onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
//                />
//                Join with mic and camera off
//             </label>
//             <DeviceSettings />
//          </div>
//          <Button
//             className="rounded-md bg-green-500 px-4 py-2.5"
//             onClick={() => {
//                if (call) {
//                   call.join();
//                   setIsSetupComplete(true);
//                }
//             }}>
//             Join Meeting
//          </Button>
//       </div>
//    );
// };

// export default MeetingSetup;
/*
"use client";
import {
   DeviceSelectorAudioInput,
   DeviceSelectorVideo,
   DeviceSettings,
   useCall,
   VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

const MeetingSetup = () => {
   const [isSetupComplete, setIsSetupComplete] = useState(false);
   const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
   const call = useCall();

   if (!call) {
      throw new Error(
         "Call is not available. useCall must be used within StreamCall Component"
      );
   }

   useEffect(() => {
      if (isMicCamToggledOn) {
         call?.camera.disable();
         call?.microphone.disable();
      } else {
         call?.camera.enable();
         call?.microphone.enable();
      }
   }, [isMicCamToggledOn, call]);

   // Conditionally render the meeting room if setup is complete
   if (isSetupComplete) {
      return <MeetingRoom call={call} />; // Render your meeting room component here
   }

   // Otherwise render the meeting setup
   return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
         <h1 className="text-2xl font-bold">Setup</h1>
         <VideoPreview />
         <div className="flex h-16 items-center justify-center gap-3">
            <label className="flex items-center justify-center gap-2 font-medium">
               <input
                  type="checkbox"
                  checked={isMicCamToggledOn}
                  onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
               />
               Join with mic and camera off
            </label>
            <DeviceSettings />
         </div>
         <Button
            className="rounded-md bg-green-500 px-4 py-2.5"
            onClick={() => {
               call.join();
               setIsSetupComplete(true); // Switch to the meeting room
            }}>
            Join Meeting
         </Button>
      </div>
   );
};

// Simulated Meeting Room component
const MeetingRoom = ({ call }: { call: any }) => {
   return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
         <h1 className="text-2xl font-bold">Meeting Room</h1>
         <p>Call ID: {call.id}</p>
         
      </div>
   );
};

export default MeetingSetup;*/
