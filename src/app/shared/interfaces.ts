export interface IUser {
    id: number;
    name: string;
    firstname: string;
    email: string;
    birthdate :string
    avatar: string;
    profession: string;
    adress: IAdress;
    registerdate: string;
}

export interface IAdress {
    city: string;
    pobox: string;
    country: string;
    streetType: string;
    streetNumber: number;
    streetName: string;
}

export interface IProduct {
    id: number;
    name: string;
    avatar: string;
    stock: number;
    category: ICategory[];
    reference: string;
    price: number;
    expiredate: Date;
}

export interface ICategory {
   id: number;
   name :string;
}

export interface IStockMouvement {
    period: Date;
    entry: number;
    out: number;
    medianprice: number;
    stock: number;
}

export interface ISchedule {
     id: number;
     title: string;
     description: string;
     timeStart: Date;
     timeEnd: Date;
     location: string;
     type: string;
     status: string;
     dateCreated: Date;
     dateUpdated: Date;
     creator: string;
     creatorId: number;
     attendees: number[];
}

export interface IScheduleDetails {
     id: number;
     title: string;
     description: string;
     timeStart: Date;
     timeEnd: Date;
     location: string;
     type: string;
     status: string;
     dateCreated: Date;
     dateUpdated: Date;
     creator: string;
     creatorId: number;
     attendees: IUser[];
     statuses: string[];
     types: string[];
}

export interface Pagination {
    CurrentPage : number;
    ItemsPerPage : number;
    TotalItems : number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result :  T;
    pagination : Pagination;
}

export interface Predicate<T> {
    (item: T): boolean
}