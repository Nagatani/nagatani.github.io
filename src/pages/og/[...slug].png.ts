import { getCollection } from "astro:content";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import fs from "node:fs/promises";
import path from "node:path";
import type { APIRoute } from 'astro';

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { data } = props;
  const fontPath = path.resolve("./public/fonts/NotoSansJP-Bold.otf");
  const fontData = await fs.readFile(fontPath);

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          height: "100%",
          width: "100%",
          backgroundColor: "#111",
          color: "#f8f9fa",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: '"Noto Sans JP"',
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                fontSize: "28px",
                opacity: 0.8,
                marginBottom: "16px",
              },
              children: data.pubDate.toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: "64px",
                fontWeight: 700,
                lineHeight: 1.2,
                // Satori supports CSS clamping / truncation? satori doesn't support line-clamp out of box but wraps.
                // We'll let it wrap.
              },
              children: data.title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "40px",
                right: "40px",
                fontSize: "24px",
                opacity: 0.6,
              },
              children: "nagatani.github.io",
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans JP",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );

  const resvg = new Resvg(svg);
  const png = resvg.render().asPng();

  return new Response(png as unknown as BodyInit, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
