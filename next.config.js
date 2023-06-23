/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.91-cdn.com',
                port: '',
                pathname: '/pricebaba-blogimages/wp-content/uploads/2021/10/**'
            },
            {
                protocol: 'https',
                hostname: 'i.dummyjson.com',
                port: '',
                pathname: '/data/products/**'
            }
        ]
    }
}

module.exports = nextConfig
