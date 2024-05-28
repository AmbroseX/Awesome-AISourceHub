import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    icons: siteConfig.icons,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <head>
                {/* Yandex验证 */}
                <meta
                    name='yandex-verification'
                    content={siteConfig.yandexVerifi}
                />
                {/* 百度验证 */}
                <meta
                    name='baidu-site-verification'
                    content={siteConfig.baiduVerifi}
                />
                <Script
                    src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.googleId}`}
                    strategy='afterInteractive'
                />
                {/* 直接在页面中执行的脚本 */}
                <Script
                    id='google-analytics'
                    strategy='afterInteractive'>
                    {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.googleId}');
                  `}
                </Script>
                <Script
                    src={`https://hm.baidu.com/hm.js?${siteConfig.baiduId}`}
                    strategy='afterInteractive'
                />
                <Script
                    src='https://umami.youmiai.ai/script.js'
                    async
                    data-website-id='2762859b-a2df-4a33-b585-d758596265e8'
                    strategy='afterInteractive'
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
