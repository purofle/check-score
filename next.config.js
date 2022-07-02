/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
		destination: 'http://cj.lhjy.net:89/:path*'
      },
	]
  },
}
