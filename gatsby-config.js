module.exports = {
  siteMetadata: {
    title: "Lale Merkezi",
    description: "A Turkish language center located in Istanbul, Turkey.",
    author: "@clayharmon",
    siteUrl: "https://lalemerkezi.com/",
  },
  plugins: [
    {
      resolve: "gatsby-theme-i18n",
      options: {
        defaultLang: "en",
        prefixDefault: true,
        locales: "en tr",
        configPath: require.resolve("./i18n/config.json"),
      },
    },
    {
      resolve: "gatsby-theme-i18n-lingui",
      options: {
        localeDir: "./i18n/lingui",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lale Merkezi",
        short_name: "lale",
        start_url: "/en/",
        background_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png",
      },
    },
  ],
}
