const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lilylou/Documents/Personal Projects/personal-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lilylou/Documents/Personal Projects/personal-site/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lilylou/Documents/Personal Projects/personal-site/src/pages/index.js"))),
  "component---src-pages-main-js": hot(preferDefault(require("/Users/lilylou/Documents/Personal Projects/personal-site/src/pages/main.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/lilylou/Documents/Personal Projects/personal-site/src/pages/projects.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/lilylou/Documents/Personal Projects/personal-site/src/pages/using-typescript.tsx"))),
  "component---src-pages-writing-js": hot(preferDefault(require("/Users/lilylou/Documents/Personal Projects/personal-site/src/pages/writing.js")))
}

