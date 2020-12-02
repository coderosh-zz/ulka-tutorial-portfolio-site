// ulka-config.js

module.exports = {
  siteMetaData: {
    title: "Roshan Acharya",
    description: "Hello, I am fullstack web developer from Nepal.",
  },
  buildPath: "build",
  pagesPath: "pages",
  templatesPath: "templates",
  plugins: ["ulka-plugin-reading-time"],
  contents: [
    {
      path: "contents",
      generatePath: "blog",
      template: "blog.ulka",
      name: "blog",
    },
  ],
};
