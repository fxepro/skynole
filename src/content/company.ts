import type { Feature } from "@/components/sections/FeatureGrid";
import type { PageHeaderContent } from "./types";
import { images, img } from "./images";

export const companyHeader: PageHeaderContent = {
  eyebrow: "Company",
  title: "Cutting-edge drone solutions, made in the USA",
  description:
    "Connectedness and real-time information are our corporate responsibility and obligation to society.",
};

export const companyIntro = {
  title: "Community",
  body:
    "Skynole specializes in advanced drone technologies, offering tailored solutions for aerial photography, surveillance, and delivery — empowering businesses to streamline operations and enhance productivity with seamless automation.",
  image: img(images.team, "Skynole team collaborating on drone technology"),
};

export const companyMission: Feature[] = [
  {
    title: "What we do",
    body:
      "We provide advanced drone solutions for aerial photography, surveillance, and delivery, revolutionizing operations across various industries.",
  },
  {
    title: "Moving forward",
    body:
      "We're integrating AI-driven automation to deliver smarter, faster, and more efficient drone services for enhanced business outcomes.",
  },
];

export const companyValues: Feature[] = [
  {
    title: "AI-Powered Precision",
    body:
      "Our drones leverage cutting-edge AI for real-time data collection and analysis, ensuring superior accuracy and actionable insights in every mission.",
    image: img(images.technology, "AI-powered drone technology"),
  },
  {
    title: "Seamless Integration",
    body:
      "Skynole's drones effortlessly integrate with existing systems, enabling businesses to automate operations without disrupting workflows or infrastructure.",
    image: img(images.operations, "Integrated drone systems in operations"),
  },
];
