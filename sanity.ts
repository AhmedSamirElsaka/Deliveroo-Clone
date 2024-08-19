import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "yc4r5t8a",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source: any) => imageBuilder.image(source);

export default client;
