export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  // Select docs version based on url path
  // Example: "/2.6/guides/installation.html" will use "2.6"
  router.afterEach((to, from) => {
      const version = to.path.split('/')[1]

      if (siteData.themeConfig.versions.all.includes(version)) {
          siteData.themeConfig.versions.selected = version
      }
  })
}
