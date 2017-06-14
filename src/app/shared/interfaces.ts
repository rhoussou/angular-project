export class Customer {

    id: string ;
    gender: string;
	username: string ;
    firstname: string;
    lastname: string;
    company: string;
    birthdate: Date;
	avatar: string;
    phone: string;
    email: string;
	profession: string;
    adress: IAdress;
    enabled: Boolean;
    lastPasswordResetDate: Date;
    password: string ;
    authorities: IAuthority[];
}

export class Authority {
   name : string;
}

export class Adress {
    city: string;
    suite: string;
    zip: string;
    state: string
}


export interface IUser {
    id: number;
    username: string;
    email: string;
    avatar: string;
    profession: string;
    enabled: Boolean;
    lastPasswordResetDate: Date;
    password: string ;
    authorities: IAuthority[];   
}

export interface ICustomer {
    id: string ;
    gender: string;
	username: string ;
    firstname: string;
    lastname: string;
    company: string;
    birthdate: Date;
	avatar: string;
    phone: string;
    email: string;
	profession: string;
    adress: IAdress;
    enabled: Boolean;
    lastPasswordResetDate: Date;
    password: string ;
    authorities: IAuthority[];
}


export interface IAuthority {
   name : string;
}

export interface IProduct {
    id: number;
    name: string;
    avatar: string;
    category: ICategory[];
    reference: string;
    price: number;
    expiredate: Date;
    variant:IVariant[];
}

export interface ICategory {
   id: number;
   name :string;
}

export interface IVariant {
    name: string;
    avatar: string;
}


export interface IAdress {
    city: string;
    suite: string;
    zip: string;
    state: string
}

export interface IGeographical {
    lat: string;
    lng: string;
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