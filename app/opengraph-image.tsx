import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Especialidades Dentales Terranova - Guadalajara";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1B6E90 0%, #2B8FAD 50%, #3DBFAA 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.12)",
            borderRadius: "20px",
            padding: "50px 70px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255,255,255,0.25)",
            width: "100%",
            maxWidth: "1000px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              color: "#7DD3FC",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "24px",
              fontFamily: "sans-serif",
              fontWeight: 600,
            }}
          >
            ⭐ 4.8 · 62 Reseñas Google · Guadalajara
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            Especialidades Dentales
            <br />
            Terranova
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.85)",
              textAlign: "center",
              fontFamily: "sans-serif",
              fontWeight: 400,
            }}
          >
            Ortodoncia · Endodoncia · Implantología · Estética Dental y más
          </div>
          <div
            style={{
              marginTop: "36px",
              background: "white",
              color: "#1B6E90",
              padding: "14px 40px",
              borderRadius: "100px",
              fontSize: "22px",
              fontWeight: 700,
              fontFamily: "sans-serif",
            }}
          >
            Agenda tu cita hoy
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
