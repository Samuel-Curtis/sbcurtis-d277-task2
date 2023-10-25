export interface CityData {
    name: string;
    slogan?: string;
    description: string;
    categories?: Category[];
}

export interface Category {
    name: string;
    items: Item[]
}

export interface Item {
    name: string;
    description: string
    link: string;
    imageUrl: string;
    imageAltText: string;
}