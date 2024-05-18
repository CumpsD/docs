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
      type: "doc",
      id: "welcome-to-masa/welcome-to-masa", // Assuming the document ID you want to link to is structured as `folderName/fileName`.
    },
    {
      type: "category",
      label: "AI Oracle Node",
      link: {
        type: "generated-index",
        title: "AI Oracle Node",
      },
      items: [
        "masa-oracle/ai-oracle-node/quickstart",
        "masa-oracle/ai-oracle-node/twitter-data",
        "masa-oracle/ai-oracle-node/web-scraper",
        "masa-oracle/ai-oracle-node/data-catalog",
        "masa-oracle/ai-oracle-node/twitter-sentiment",
      ],
    },
    {
      type: "category",
      label: "AI Worker Node",
      link: {
        type: "generated-index",
        title: "AI Worker Node",
      },
      items: [
        "masa-oracle/ai-worker-node/quickstart",
        "masa-oracle/ai-worker-node/twitter-worker",
        "masa-oracle/ai-worker-node/web-worker",
      ],
    },
    {
      type: "category",
      label: "Guides and Tutorials",
      link: {
        type: "generated-index",
        title: "Guides and Tutorials",
      },
      items: ["masa-oracle/guides-and-tutorials/staking-guide"],
    },
    {
      type: "category",
      label: "Tools and Contracts",
      link: {
        type: "generated-index",
        title: "Tools & Contracts overview",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "tools-and-contracts",
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
      type: "doc",
      id: "masa-oracle/oracle-release-notes/RELEASE_NOTES", // Assuming the document ID you want to link to is structured as `folderName/fileName`.
    },
  ],
};

module.exports = sidebars;
