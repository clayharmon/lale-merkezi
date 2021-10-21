require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
        locales: "en tr ar",
        configPath: require.resolve("./i18n/config.json"),
      },
    },
    {
      resolve: "gatsby-theme-i18n-lingui",
      options: {
        localeDir: "./i18n/lingui",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.WPGRAPHQL_URL}`,
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
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
        background_color: "#884595",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: "Bebas Neue",
              axes: "wght@400",
              subsets: ["latin", "latin-ext"],
              fontDisplay: "swap",
            },
            {
              family: "Roboto",
              axes: "wght@300;700",
              subsets: ["latin", "latin-ext"],
              fontDisplay: "swap",
            },
          ],
        },
      },
    },
  ],
}
