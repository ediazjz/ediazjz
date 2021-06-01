module.exports = {
  async rewrites() {
    return [
      {
        source: '/github-readme-stats',
        destination: 'https://github-readme-stats.ediazjz.vercel.app/api?username=ediazjz&count_private=true&theme=dark&show_icons=true',
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/simpleresume',
        destination: 'https://simpleresume.vercel.app/',
      },
    ]
  },
}
