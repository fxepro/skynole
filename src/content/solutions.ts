import type { Feature } from "@/components/sections/FeatureGrid";
import type { Split } from "@/components/sections/FeatureSplits";
import type { SolutionCard } from "@/components/sections/SolutionsShowcase";
import type { ContextPageContent, PageHeaderContent } from "./types";
import { images, img } from "./images";

export const solutionsHeader: PageHeaderContent = {
  eyebrow: "Solutions",
  title: "Autonomous solutions, end to end",
  description:
    "Aerial photography, drone surveillance, and autonomous delivery — powered by AI for precision and safety.",
};

export const solutionCards: SolutionCard[] = [
  {
    title: "Autonomous Aerial Photography",
    blurb:
      "Automated, hassle-free aerial imaging for commercial and personal projects — crystal-clear shots with fast turnaround.",
    href: "/solutions/autonomous-aerial-photography",
    image: img(images.aerialPhotography, "Autonomous aerial photography drone"),
  },
  {
    title: "Autonomous Drone Surveillance",
    blurb:
      "Fully automated surveillance for enhanced safety — continuous monitoring, real-time alerts, and wide-area coverage.",
    href: "/solutions/autonomous-drone-surveillance",
    image: img(images.surveillance, "Surveillance drone in flight"),
  },
  {
    title: "Autonomous Drone Delivery",
    blurb:
      "Rapid, reliable package transport with real-time tracking — scalable from single shipments to full fleet logistics.",
    href: "/solutions/autonomous-drone-delivery",
    image: img(images.delivery, "Delivery drone carrying a package"),
  },
];

const benefitSplits: Split[] = [
  {
    title: "Unparalleled Autonomy",
    body:
      "Our drones are powered by advanced AI and machine learning, enabling them to fly and operate independently — learning and adapting to their surroundings and making real-time decisions without human intervention.",
    image: img(images.droneAutonomy, "Autonomous drone platform"),
  },
  {
    title: "Precision and Safety",
    body:
      "State-of-the-art sensors, GPS, and obstacle avoidance ensure high precision in every task. Navigating complex environments while avoiding obstacles makes them ideal for construction and emergency services.",
    image: img(images.dronePrecision, "Precision sensing drone"),
  },
  {
    title: "Scalable Solutions",
    body:
      "No two businesses have the same needs. Our drone systems are highly customizable and scalable — from large-scale industrial operations to smaller, specialized missions.",
    image: img(images.droneFleet, "Scalable drone fleet"),
  },
];

export const solutionsBenefits: Feature[] = [
  {
    title: "Enhanced Safety",
    body: "Monitor potentially dangerous situations remotely, reducing risk to personnel and improving situational control.",
  },
  {
    title: "Faster Response",
    body: "Deploy quickly and deliver live footage for police operations, news events, and emergency response in real time.",
  },
  {
    title: "Cost-Effective",
    body: "Save on helicopters and manned aerial resources while maintaining high-quality, reliable surveillance and inspection.",
  },
];

export const solutionsSplits = benefitSplits;

export const solutionPages: ContextPageContent[] = [
  {
    slug: "autonomous-aerial-photography",
    header: {
      eyebrow: "Solutions",
      title: "Autonomous Aerial Photography",
      description:
        "Automated, hassle-free aerial photography solutions for every project — integrated drone technology with tailored imaging services.",
    },
    intro: {
      body:
        "We provide automated, hassle-free aerial photography solutions for every project. Our drones integrate cutting-edge technology with tailored services to capture stunning perspectives with minimal human intervention.",
    },
    benefits: [
      {
        title: "Precision Imaging",
        body: "Capture every detail with crystal-clear aerial shots.",
      },
      {
        title: "Cost-Effective",
        body: "Minimize human intervention for a streamlined process.",
      },
      {
        title: "Fast Turnaround",
        body: "Quick setup and rapid image delivery.",
      },
      {
        title: "Customizable Solutions",
        body: "Tailored services for both commercial and personal needs.",
      },
      {
        title: "24/7 Operation",
        body: "Capture images any time, day or night.",
      },
      {
        title: "Eco-Friendly",
        body: "Reduced carbon footprint with drone technology.",
      },
    ],
    highlights: [
      {
        title: "Rapid Deployment",
        body: "Drones deploy quickly to capture moments as they happen — time-sensitive projects are never an issue.",
      },
      {
        title: "Seamless Integration",
        body: "Our drones work in harmony with your existing systems and processes for hassle-free photography support.",
      },
      {
        title: "Real-Time Monitoring",
        body: "Stay in control with live feeds, ensuring you get the exact shot you need, whenever required.",
      },
    ],
    related: solutionCards.filter(
      (c) => c.href !== "/solutions/autonomous-aerial-photography",
    ),
  },
  {
    slug: "autonomous-drone-surveillance",
    header: {
      eyebrow: "Solutions",
      title: "Autonomous Drone Surveillance",
      description:
        "Fully automated drone surveillance for enhanced safety and monitoring — smart drones with advanced surveillance capabilities.",
    },
    intro: {
      body:
        "We provide fully automated drone surveillance solutions for enhanced safety and monitoring. Our smart drones combine advanced surveillance capabilities with autonomous operation for unparalleled security.",
    },
    benefits: [
      {
        title: "Continuous Monitoring",
        body: "Non-stop surveillance for complete peace of mind.",
      },
      {
        title: "Real-Time Alerts",
        body: "Immediate notifications of suspicious activity or breaches.",
      },
      {
        title: "Cost-Efficient",
        body: "Reduced need for on-site personnel and resources.",
      },
      {
        title: "Wide Coverage",
        body: "Monitor large areas with fewer drones, covering more ground.",
      },
      {
        title: "AI-Enhanced Precision",
        body: "Detect even the smallest anomalies with high accuracy.",
      },
      {
        title: "Remote Access",
        body: "Manage and monitor surveillance remotely from anywhere.",
      },
    ],
    highlights: [
      {
        title: "Immediate Response",
        body: "Drones deploy rapidly for prompt action during critical moments — protect assets with instant surveillance.",
      },
      {
        title: "Seamless Integration",
        body: "Easily integrate with existing security systems for an effortless enhancement of monitoring capabilities.",
      },
      {
        title: "Customizable Coverage",
        body: "Tailor surveillance paths and schedules so every critical zone is covered at the right time.",
      },
    ],
    related: solutionCards.filter(
      (c) => c.href !== "/solutions/autonomous-drone-surveillance",
    ),
  },
  {
    slug: "autonomous-drone-delivery",
    header: {
      eyebrow: "Solutions",
      title: "Autonomous Drone Delivery",
      description:
        "Automated drone delivery for rapid and reliable package transport — advancing logistics with smart, autonomous technology.",
    },
    intro: {
      body:
        "We offer automated drone delivery services for rapid and reliable package transport. Our autonomous technology streamlines logistics and enhances the customer experience with speed, security, and scalability.",
    },
    benefits: [
      {
        title: "Speedy Delivery",
        body: "Faster than traditional methods, saving time on every shipment.",
      },
      {
        title: "Cost-Effective",
        body: "Reduce labor and fuel costs with fully autonomous operations.",
      },
      {
        title: "Eco-Friendly",
        body: "Lower carbon footprint compared to conventional delivery vehicles.",
      },
      {
        title: "Real-Time Tracking",
        body: "Monitor deliveries in real time for accurate arrival estimates.",
      },
      {
        title: "Safe Transport",
        body: "Secure packaging and handling ensure items are delivered intact.",
      },
      {
        title: "Wide Coverage",
        body: "Reach remote or hard-to-access locations with ease.",
      },
    ],
    highlights: [
      {
        title: "On-Demand Service",
        body: "Drones dispatch quickly for fast deliveries when it matters most, even in time-sensitive scenarios.",
      },
      {
        title: "Scalable Solutions",
        body: "Whether it's one package or hundreds, our fleet scales to meet your delivery needs seamlessly.",
      },
      {
        title: "Secure and Reliable",
        body: "Advanced technology ensures safe transport, minimizing risks of damage or theft during transit.",
      },
    ],
    related: solutionCards.filter(
      (c) => c.href !== "/solutions/autonomous-drone-delivery",
    ),
  },
];

export const solutionSlugs = solutionPages.map((p) => p.slug);

export function getSolutionPage(slug: string): ContextPageContent | undefined {
  return solutionPages.find((p) => p.slug === slug);
}
