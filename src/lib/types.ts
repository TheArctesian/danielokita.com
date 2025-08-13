export type Categories = string

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    location: string
    categories: Categories[]
    published: boolean
    img?: string
    language?: string[]
    readingTime?: number
    viewCount?: number
}

