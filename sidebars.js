/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Analytics",
      link: {
        type: "generated-index",
        title: "Analytics overview",
      },
      items: [
        "analytics/overview",
        "analytics/react-sdk-installation",
        "analytics/js-script-installation",
        "analytics/data-journey",
        // ... and any other pages you want to add in a specific order
      ],
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
        title: "Guides overview",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "guides",
        },
      ],
    },
    {
      type: "category",
      label: "For Developers",
      link: {
        type: "generated-index",
        title: "Developers overview",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "developers",
        },
        {
          type: "category",
          label: "Masa Token",
          link: {
            type: "doc",
            id: "masa-token/README",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "masa-token",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Contribute",
      link: {
        type: "generated-index",
        title: "Contribute overview",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "contribute",
        },
      ],
    },
  ],
};

module.exports = sidebars;
