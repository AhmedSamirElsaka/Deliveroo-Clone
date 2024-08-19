import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "yc4r5t8a",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source) => imageBuilder.image(source);

export default client;
