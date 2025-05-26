export interface Product {
    id : string,
    name: string,
    description: string,
    subCategory : SubCategory,
    photoUrl : string?,
    price : Price,
    stock: number
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

export interface User{
    name: string,
    surname: string,
    email: string,
    password: string
}

export interface UserLogin{
    email : string,
    password : string
}

export interface Token {
    accessToken : string,
    refreshToken : string
}


export interface Page {
    pageSize: number,
    pageContent: number,
    totalContent: number,
    pageNumber : number,
    totalPages: number
}

export interface PageSearch {
    page: number,
    pageSize: number,
    orderBy: string?,
    order: Order?
}

export enum Order {
    ASC, DESC
}

export interface ProductStock {
    productId : string,
    newStock : number
}

export interface ProductSearch extends PageSearch {
    categoryId : string,
    subCategoryId : string?,
    searchBy : string?
}

export interface ProductPage {
    content : Product[],
    page : Page
}

export interface PurchaseSearch extends PageSearch {

}

export interface PurchaseRequest {
    productIds : string[]
}

export interface Purchase {
    id : string,
    userId: string,
    products: Product[],
    totalAmount: Price
}

export interface PurchasePage {
    content : Purchase[],
    page: Page
}