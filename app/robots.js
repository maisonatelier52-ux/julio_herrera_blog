export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://julio-herrera-blog.vercel.app/sitemap.xml",
    host: "https://julio-herrera-blog.vercel.app",
  };
}