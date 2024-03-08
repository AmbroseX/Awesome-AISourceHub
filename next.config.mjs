/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "merakiui.com",
                port: '',
                pathname: '/**/*',
            },
            {
                protocol: 'https',
                hostname: "icon.horse",
                port: '',
                pathname: '/**/*',
            },
            {
                protocol: 'https',
                hostname: "www.soraflows.com",
                port: '',
                pathname: '/**/*',
            },
            {
                protocol: 'https',
                hostname: "*.producthunt.com",
                port: '',
                pathname: '/**/*',
            },
            {
                protocol: 'https',
                hostname: "api.iowen.cn",
                port: '',
                pathname: '/**/*',
            },
            {
                protocol: 'http',
                hostname: "inadequate-turquoise-macaw.faviconkit.com",
                port: '',
                pathname: '/**/*',
            },
            {
                protocol: 'https',
                hostname: "www.favicon.vip",
                port: '',
                pathname: '/**/*',
            }
        ],
        deviceSizes: [640, 768, 1024, 1280, 1600], // 设备尺寸用于响应式图片
        imageSizes: [16, 32, 48, 64, 96], // 定义图片尺寸
        path: '/_next/image', // 图片优化API的路径
        loader: 'default',// 使用默认的图片加载器,
        dangerouslyAllowSVG: true // 允许加载SVG
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

export default nextConfig;
