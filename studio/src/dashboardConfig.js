export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616539638b2171af82b1d449",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3aqnb563",
                  apiId: "eef20061-baa3-4e34-8f06-23d3c669c496",
                },
                {
                  buildHookId: "6165396212a452cb544614ac",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wigfdscj",
                  apiId: "e8e6eb95-6055-47a4-b8ea-59face07d34a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/stikjeknowit/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wigfdscj.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
