import dotenv from "dotenv";
dotenv.config();
import ImageKit from "@imagekit/nodejs";
import fs from "fs";
import { toFile } from "@imagekit/nodejs";

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export const uploadImage = async (file) => {
  try {
    const files = await toFile(file);
    const response = await client.files.upload({
      file: files,
      fileName: Date.now() + ".jpg",
      folder: "notes_summarizer_profile",
    });

    return response.url;
  } catch (err) {
    throw err;
  }
};
