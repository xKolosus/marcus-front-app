export interface Product {
    id : string,
    name: string,
    description: string,
    subCategory : SubCategory,
    photoUrl : string?,
    price : Price
}

export interface SubCategory {
    id : string,
    description : string,
    categoryId : string
}

export interface Price {
    amount : Number,
    currency : string
}

export interface Category {
    id : string,
    name : string,
    enabled : boolean,
    subCategories : SubCategory[]
}

export interface Purchase {
    productIds : string[]
}