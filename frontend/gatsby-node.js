const path = require("path")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  })
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
  }
}

// exports.onCreateNode = async ({
//   node,
//   actions,
//   store,
//   cache,
//   createNodeId,
// }) => {
//   const { createNode } = actions

//   let pics = node.pics


//   if (node.internal.type === "StrapiProduct") {
//     if (pics.length > 0) {
//       pics.forEach(el => console.log("onCreateNode",el))
//       const images = await Promise.all(
//         pics.map(el =>
//           createRemoteFileNode({
//             url: `http://localhost:1337${el.url}`,
//             parentNodeId: node.id,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//           })
//         )
//       )

//       pics.forEach((image, i) => {
//         image.localFile___NODE = images[i].id
//       })
//     }
//   }
// }
