module.exports = {
  async rewrites() {
    return [
      {
        source: '/github-readme-status',
        destination: 'https://github-readme-stats.vercel.app/api?username=ediazjz&count_private=true&theme=dark&show_icons=true',
      },
    ]
  },
}
