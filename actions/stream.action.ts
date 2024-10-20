"use server";

import { currentUser } from "@clerk/nextjs/server";

import { StreamClient } from "@stream-io/node-sdk";
// import { currentUser } from "@clerk/nextjs/server";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
   const user = await currentUser();

   if (!user) {
      throw new Error("User is not authenticated");
   }
   if (!STREAM_API_KEY) {
      throw new Error("Stream API key secret is missing");
   }
   if (!STREAM_API_SECRET) {
      throw new Error("Stream API secret is missing");
   }

   const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

   const expirationTime = Math.floor(Date.now() / 1000) + 3600;
   const issuedAt = Math.floor(Date.now() / 1000) - 60;

   return streamClient.generateUserToken({
      user_id: user.id,
      exp: expirationTime,
      iat: issuedAt,
   });
};

// "use server";

// import { currentUser } from "@clerk/nextjs/server";
// import { StreamClient } from "@stream-io/node-sdk";

// const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
// const apiSecret = process.env.STREAM_SECRET_KEY;

// export const tokenProvider = async () => {
//   const user = await currentUser();

//   if (!user) {
//     throw new Error("User not found");
//   }
//   if (!apiKey) {
//     throw new Error("No API key");
//   }
//   if (!apiSecret) {
//     throw new Error("No API Secret");
//   }

//   const client = new StreamClient(apiKey as string, apiSecret as string);

//   const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
//   const issued = Math.floor(Date.now() / 1000) - 60;

//   return client.createToken(user.id, exp, issued);
// };
