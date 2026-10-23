import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { getProjectBySlug, getProjectDetail } from "@/lib/projects";

export const alt = "Project by Mahfuj Mahtab Mohot";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const RASTER = /\.(png|jpe?g|webp)$/i;

function mimeType(path) {
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".webp")) return "image/webp";
  return "image/jpeg";
}

async function screenshotDataUrl(imagePath) {
  if (!imagePath || !RASTER.test(imagePath)) return null;

  const file = await readFile(join(process.cwd(), "public", imagePath));
  return `data:${mimeType(imagePath)};base64,${file.toString("base64")}`;
}

export default async function ProjectOpenGraphImage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const detail = getProjectDetail(slug);
  const screenshot = await screenshotDataUrl(detail?.heroImage);
  const title = project?.name ?? "Project";

  return new ImageResponse(
    screenshot ? (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <img
          src={screenshot}
          alt=""
          width={1200}
          height={630}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ) : (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f1224",
          color: "#f8f7ff",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, color: "#c4b5fd" }}>Mahfuj Mahtab Mohot</div>
        <div style={{ fontSize: 72, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 24, color: "#a1a1aa" }}>mahfujmohot.com</div>
      </div>
    ),
    { ...size },
  );
}
