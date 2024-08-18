import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://acme.com',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://acme.com/en',
                    de: 'https://acme.com/ar',
                },
            },
        },
    ]
}