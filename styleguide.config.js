const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')
const glob = require('glob')

const sections = (() => {
  const docs = glob
    .sync('docs/*.md')
    .map(p => ({name: path.basename(p, '.md'), content: p}))
  const demos = []
  let faq = '' // 约定至多只有一个faq.md
  const guides = []
  docs.forEach(d => {
    if (/^faq$/i.test(d.name)) {
      d.name = d.name.toUpperCase()
      faq = d
    } else if (/^guide-/.test(d.name)) {
      guides.push(d)
    } else {
      demos.push(d)
    }
  })
  return [
    {
      name: 'Components',
      components: 'src/*.vue',
      usageMode: 'expand'
    },
    {
      name: 'Demo',
      sections: demos,
      sectionDepth: 2
    },
    ...(faq ? [faq] : []),
    ...(guides.length
      ? [{name: 'Guide', sections: guides, sectionDepth: 2}]
      : [])
  ]
})()
module.exports = {
  styleguideDir: 'dist-docs',
  pagePerSection: true,
  ribbon: {
    url: 'https://github.com/liuyuanyuannumberone/test-sfc-cli',
    text: 'Fork me on GitHub'
  },
  sections,
  serverPort: 7000,
  renderRootJsx: path.join(__dirname, 'config/styleguide.root.js'),
  require: [path.join(__dirname, 'styleguide/global.requires.js')],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          loaders: ['vue-style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.(woff2?|eot|[ot]tf)(\?.*)?$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [new VueLoaderPlugin()]
  }
}
