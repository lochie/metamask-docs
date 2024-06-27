const sidebar = {
  dashboardSidebar: [
    "index",
    {
      type: "category",
      label: "Get started",
      link: { type: "generated-index", slug: "/get-started" },
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "get-started" }],
    },
    {
      type: "category",
      label: "How to",
      link: { type: "generated-index", slug: "/how-to" },
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "how-to" }],
    },
  ],
};

module.exports = sidebar;

