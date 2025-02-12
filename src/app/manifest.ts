import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Name.",
    short_name: "Short name.",
    description: "Description",
    start_url: "/",
    display: "standalone",
    theme_color: "#313A48",
    background_color: "#313A48",
    icons: [],
  }
}
