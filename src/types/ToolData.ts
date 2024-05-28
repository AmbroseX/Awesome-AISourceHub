// types/ToolData.ts

export type ToolsInfo = {
    categoryNumber: number
    toolsNumber: number
    lastUpdateTime: string
}

export type Tool = {
    category: string
    title: string
    is_free: boolean | null | undefined
    image: string
    description: string
    href: string
}

export type CategoryData = {
    category: string
    data: Tool[]
}
