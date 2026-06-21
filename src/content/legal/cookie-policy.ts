import { site } from "@/config/site";
import type { LegalDocument } from "./types";

export const cookiePolicy: LegalDocument = {
  title: "Cookie Policy",
  eyebrow: "Legal",
  intro: [
    {
      type: "text",
      value: `This is the Cookie Policy for ${site.name}, accessible from ${site.url.replace("https://", "www.")}.`,
    },
  ],
  sections: [
    {
      heading: "What are cookies",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "As is customary practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.",
            },
          ],
        },
      ],
    },
    {
      heading: "How we use cookies",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave all cookies on if you are not sure whether you need them or not in case they are used to provide a service that you use.",
            },
          ],
        },
      ],
    },
    {
      heading: "Disabling cookies",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore, it is recommended that you do not disable cookies.",
            },
          ],
        },
      ],
    },
    {
      heading: "The cookies we set",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            { type: "text", value: "Account related cookies" },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "If you create an account with us, then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out, however in some cases they may remain afterwards to remember your site preferences when logged out.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            { type: "text", value: "Login related cookies" },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            { type: "text", value: "Email newsletters related cookies" },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            { type: "text", value: "Orders processing related cookies" },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "This site offers e-commerce or payment facilities, and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            { type: "text", value: "Surveys related cookies" },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "From time to time, we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            { type: "text", value: "Forms related cookies" },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "When you submit data through a form such as those found on contact pages or comment forms, cookies may be set to remember your user details for future correspondence.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            { type: "text", value: "Site preferences cookies" },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "To provide you with a wonderful experience on this site we provide the functionality to set your preferences for how this site runs when you use it. To remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.",
            },
          ],
        },
      ],
    },
    {
      heading: "Third party cookies",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "In some exceptional cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "From time to time, we evaluate new features and make subtle changes to the way that the site is delivered. When we are still testing new features, these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "As we sell products it is important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to check our advertising and product costs to ensure the best possible price.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "We use adverts to offset the costs of running this site and supply funding for further development. The behavioral advertising cookies used by this site are designed to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.",
            },
          ],
        },
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "We may also use social media buttons and/or plugins on this site that allow you to connect with your social network in several ways. For these to work, social media sites including those we use may set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.",
            },
          ],
        },
      ],
    },
    {
      heading: "More information",
      blocks: [
        {
          kind: "paragraph",
          segments: [
            {
              type: "text",
              value:
                "Hopefully that has clarified things for you. As was previously mentioned, if there is something that you are not sure whether you need or not it is usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.",
            },
          ],
        },
      ],
    },
  ],
};
