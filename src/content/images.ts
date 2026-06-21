/** Local Unsplash photography shipped in `public/media` (reliable; no remote CDN dependency). */
export const images = {
  droneAutonomy: "/media/2025/03/ivan-bandura-Wv2U24G2F78-unsplash.jpg",
  dronePrecision: "/media/2025/03/dmitry-sergeev-W2aDNCdFR8k-unsplash.jpg",
  droneFleet: "/media/2022/06/alex-perez-P93ijX1URuU-unsplash-1.jpg",
  aerialPhotography: "/media/2025/03/greg-bulla-qJvCmiSyB-g-unsplash.jpg",
  aerialCity: "/media/2025/03/daniele-buso-kQVj2y5ITkA-unsplash.jpg",
  aerialLandscape: "/media/2025/03/wolfgang-weiser-el8EOJhVjEU-unsplash.jpg",
  surveillance: "/media/2025/03/lukas-juhas-2JJz3u_R_Ik-unsplash.jpg",
  delivery: "/media/2022/05/chuttersnap-Q_KdjKxntH8-unsplash.jpg",
  agriculture: "/media/2022/05/barna-kovacs-yDZ0vi_wk00-unsplash-1.jpg",
  borderSecurity: "/media/2025/03/daniel-balaure-n2e_XAPtMic-unsplash.jpg",
  environment: "/media/2025/03/wolfgang-weiser-el8EOJhVjEU-unsplash.jpg",
  events: "/media/2025/03/patty-brito-Y-3Dt0us7e0-unsplash-1.jpg",
  filmMedia: "/media/2024/10/scott-rodgerson-ffH_GkINfyY-unsplash.jpg",
  infrastructure: "/media/2024/10/clayton-cardinalli-alD9WqRKkHc-unsplash.jpg",
  mapping: "/media/2025/03/kabiur-rahman-riyad-YzZJUXjb9aw-unsplash.jpg",
  medical: "/media/2025/03/ben-kuo-Sy3-Si2xPpQ-unsplash.jpg",
  military: "/media/2025/03/andreas-felske-RFVu8Bq7Ld8-unsplash.jpg",
  mining: "/media/2025/03/blake-wisz-Xn5FbEM9564-unsplash.jpg",
  pipeline: "/media/2025/03/denys-nevozhai-7nrsVjvALnA-unsplash.jpg",
  police: "/media/2024/10/bence-balla-schottner-tuE79f2eyAI-unsplash-1.jpg",
  publicSafety: "/media/2025/03/lukas-juhas-2JJz3u_R_Ik-unsplash.jpg",
  retail: "/media/2024/10/sherman-yang-VBBGigIuaDY-unsplash.jpg",
  urban: "/media/2025/03/daniele-buso-kQVj2y5ITkA-unsplash.jpg",
  team: "/media/2022/05/liliya-grek-llZSoMixr0Y-unsplash.jpg",
  technology: "/media/2022/06/denys-nevozhai-guNIjIuUcgY-unsplash.jpg",
  operations: "/media/2025/03/ben-kuo-Sy3-Si2xPpQ-unsplash.jpg",
} as const;

export type ImageRef = { src: string; alt: string };

export function img(src: string, alt: string): ImageRef {
  return { src, alt };
}
