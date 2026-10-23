import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}, ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 700,
            color: "#c4b5fd",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#4338ca",
              borderRadius: 12,
              color: "#ffffff",
              fontSize: 32,
            }}
          >
            M
          </div>
          {siteConfig.brand}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 36, color: "#c4b5fd" }}>{siteConfig.role}</div>
        </div>
        <div style={{ fontSize: 24, color: "#a1a1aa" }}>mahfujmohot.com</div>
      </div>
    ),
    { ...size },
  );
}
