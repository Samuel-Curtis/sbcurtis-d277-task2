export interface CityData {
    name: string;
    nickName?: string;
    description: string;
    funFacts?: string[]
    categories?: Category[];
}

export interface Category {
    name: string;
    items?: Item[]
}

export interface Item {
    name: string;
    description: string
    link: string;
    imageUrl: string;
    imageAltText: string;
}