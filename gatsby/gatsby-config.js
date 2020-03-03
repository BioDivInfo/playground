module.exports = {
  pathPrefix: "/playground",
  siteMetadata: {
    title: `BioDivInfo Playground`,
    name: `Laura Rocha Prado`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `Ferramenta para colaboradores testarem o sistema de gerenciamento de conteúdo usado no Arquivo`,
    social: [{
      name: `github`,
      url: `https://github.com/BioDivInfo/`
    }],
    sidebarConfig: {
      forcedNavOrder: ["/comece", "/capitulo"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};