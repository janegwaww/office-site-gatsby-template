var proxy = require("http-proxy-middleware");

module.exports = {
  pathPrefix: `/gatsby-starter-netlify-cms`,
  siteMetadata: {
    title: "Haetek 黑顿科技",
    description:
      "深圳前海黑顿科技有限公司(简称“黑顿科技”)，团队于2019年8月1日 入驻深圳前海区，注册资本3000万元，致力于搭建面向信息化、智能化、万物 互联的智能操作生态，涉及领域包括物流、金融、教育、智慧城市、语言、销 售、体育、大健康等等。创始团队来自多伦多大学(深度学习发源地)、卡耐 基梅隆大学(人工智能专业世界第一)、北大、浙大、哈工大等国际名校。 曾在国际智能语法检测大赛(CGED)中以绝对优势从社科院、阿里巴巴 、北大等团队中夺冠。 始 成果，拥有多项国际或国家专利、著作权、顶会论文，并与VectorInstitute、 中科院计算所等学术机构拥有学术合作关系。 公司致力于将人工智能算法结合实际应用场景进行落地，消除学术界与实业 界之间的代沟，为众多有智能化需求的企业提供技术支持，为广大致力于智能化 建设的企业及开发者提供稳健灵活简约的平台型算法生态，让智能塑造生活。"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": ""
        }
      })
    );
  }
};
