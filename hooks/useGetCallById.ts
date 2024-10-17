import { useEffect, useState } from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCallById = (id: string | string[]) => {
   const [call, setCall] = useState<Call>();
   const [isCallLoading, setIsCallLoading] = useState(true);
   const client = useStreamVideoClient();

   useEffect(() => {
      if (!client) {
         return;
      }

      const loadCall = async () => {
         try {
            const { calls } = await client.queryCalls({
               filter_conditions: { id },
            });
            if (calls.length > 0) {
               setCall(calls[0]);
            }
         } catch (error) {
            console.error("Error loading call:", error);
         } finally {
            setIsCallLoading(false);
         }
      };

      loadCall();
   }, [client, id]);

   return { call, isCallLoading };
};

//  import { Client } from "@clerk/nextjs/server";
//  import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
//  import { useEffect, useState } from "react"

//  export const useGetCallById = (id: string | string[]) => {
//     const [call, setcall] = useState<Call>();
//     const [isCallLoading, setisCallLoading] = useState(true);
//     const client = useStreamVideoClient();
//  useEffect(
// ()=>{
//     if(!client) {return};
//  const loadCall =async()=>{
//     // const {calls}=await client.queryCalls(filter_conditions:{id})} if (calls.length > 0) setcall(calls[0]); setisCallLoading(false)} loadCall();},[client,id]);

//     useEffect(() => {
//         const loadCall = async () => {
//           try {
//             const { calls } = await client.queryCalls({ filter_conditions: { id } });
//             if (calls.length > 0) {
//               setcall(calls[0]);
//             }
//           } catch (error) {
//             console.error('Error loading call:', error);
//           } finally {
//             setisCallLoading(false);
//           }
//         };

//         loadCall();
//       }, [client, id]);

//     return {call, isCallLoading};
