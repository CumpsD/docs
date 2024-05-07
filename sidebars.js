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
      label: "AI Oracle Node",
      link: {
        type: "generated-index",
        title: "AI Oracle Node",
      },
      items: [
        "masa-oracle/README",
        "masa-oracle/LLM",
        "masa-oracle/staking-guide",
        "masa-oracle/twitter-data",
        "masa-oracle/twitter-worker",
        "masa-oracle/web-worker",
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
  ],
};

module.exports = sidebars;
