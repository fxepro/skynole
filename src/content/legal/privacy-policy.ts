import { site } from "@/config/site";
import type { LegalDocument } from "./types";

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  eyebrow: "Legal",
  intro: [
    {
      type: "text",
      value: `At ${site.name}, accessible from ${site.url.replace("https://", "")}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ${site.name} and how we use it.`,
    },
  ],
  sections: [
    {
      heading: "Questions",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at ",
            },
            { type: "link", value: site.email, href: `mailto:${site.email}` },
            { type: "text", value: "." },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect on ${site.name}. This policy is not applicable to any information collected offline or via channels other than this website.`,
            },
          ],
        },
      ],
    },
    {
      heading: "Consent",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "By using our website, you hereby consent to our Privacy Policy and agree to its terms.",
            },
          ],
        },
      ],
    },
    {
      heading: "Information we collect",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "When you register for an account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.",
            },
          ],
        },
      ],
    },
    {
      heading: "How we use your information",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: "We use the information we collect in various ways, including to:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            "Provide, operate, and maintain our website",
            "Improve, personalize, and expand our website",
            "Understand and analyze how you use our website",
            "Develop new products, services, features, and functionality",
            "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
            "Send you emails",
            "Find and prevent fraud",
          ],
        },
      ],
    },
    {
      heading: "Log files",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `${site.name} follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
            },
          ],
        },
      ],
    },
    {
      heading: "Cookies and web beacons",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `Like any other website, ${site.name} uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.`,
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: "For more general information on cookies, please read our ",
            },
            { type: "link", value: "Cookie Policy", href: "/cookie-policy" },
            { type: "text", value: "." },
          ],
        },
      ],
    },
    {
      heading: "Google DoubleClick DART cookie",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to ${site.url.replace("https://", "www.")} and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – `,
            },
            {
              type: "link",
              value: "https://policies.google.com/technologies/ads",
              href: "https://policies.google.com/technologies/ads",
            },
          ],
        },
      ],
    },
    {
      heading: "Our advertising partners",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "Some of our advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            { type: "text", value: "Google — " },
            {
              type: "link",
              value: "https://policies.google.com/technologies/ads",
              href: "https://policies.google.com/technologies/ads",
            },
          ],
        },
      ],
    },
    {
      heading: "Advertising partners privacy policies",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `You may consult this list to find the Privacy Policy for each of the advertising partners of ${site.name}.`,
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ${site.name}, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.`,
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `Note that ${site.name} has no access to or control over these cookies that are used by third-party advertisers.`,
            },
          ],
        },
      ],
    },
    {
      heading: "Third party privacy policies",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `${site.name}'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.`,
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.",
            },
          ],
        },
      ],
    },
    {
      heading: "CCPA privacy rights (Do not sell my personal information)",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "Under the CCPA, among other rights, California consumers have the right to:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
            "Request that a business delete any personal data about the consumer that a business has collected.",
            "Request that a business that sells a consumer's personal data not sell the consumer's personal data.",
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
            },
          ],
        },
      ],
    },
    {
      heading: "GDPR data protection rights",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:",
            },
          ],
        },
        {
          kind: "list",
          items: [
            "The right to access — You have the right to request copies of your personal data. We may charge you a small fee for this service.",
            "The right to rectification — You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
            "The right to erasure — You have the right to request that we erase your personal data, under certain conditions.",
            "The right to restrict processing — You have the right to request that we restrict the processing of your personal data, under certain conditions.",
            "The right to object to processing — You have the right to object to our processing of your personal data, under certain conditions.",
            "The right to data portability — You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
            },
          ],
        },
      ],
    },
    {
      heading: "Children's information",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value: `${site.name} does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`,
            },
          ],
        },
      ],
    },
  ],
};
