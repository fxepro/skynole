import type { Split } from "@/components/sections/FeatureSplits";
import type { SolutionCard } from "@/components/sections/SolutionsShowcase";
import type { PageHeaderContent } from "./types";
import { images, img } from "./images";
import { solutionCards } from "./solutions";

export const dronesHeader: PageHeaderContent = {
  eyebrow: "Drones",
  title: "Three designs, built for autonomy",
  description:
    "Customizable, scalable drone platforms engineered for precision, safety, and real-time intelligence — designed and developed in the United States.",
};

export const dronePlatformCards: SolutionCard[] = solutionCards;

export const droneSplits: Split[] = [
  {
    title: "Unparalleled Autonomy",
    body:
      "Powered by advanced AI and machine learning, our drones fly and operate independently — learning and adapting to their surroundings and making real-time decisions without human intervention.",
    image: img(images.droneAutonomy, "Autonomous drone platform"),
  },
  {
    title: "Precision and Safety",
    body:
      "State-of-the-art sensors, GPS, and obstacle avoidance ensure high precision in every task. Navigating complex environments while avoiding obstacles makes them perfect for construction and emergency services.",
    image: img(images.dronePrecision, "Precision sensing drone"),
  },
  {
    title: "Scalable Solutions",
    body:
      "Highly customizable and scalable drone systems — from large-scale industrial operations to smaller, specialized missions with tailored solutions for your requirements.",
    image: img(images.droneFleet, "Scalable drone fleet"),
  },
];
