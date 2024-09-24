import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient ({
  projectId: process.env.NEXT_PROJECT_ID || "vwv5f7l4",
  apiVersion: "2024-01-01",
  dataset: "production",
  useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}