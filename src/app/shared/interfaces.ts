export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    birthdate :string
    avatar: string;
    profession: string;
    adress: IAdress;
    registerdate: string;
    phone: string;
    website: string;
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
    contact : IContact;
	profession: string;
    adress: IAdress;
    enabled: Boolean;
    lastPasswordResetDate: Date;
    password: string ;
    authorities: IAuthority[];
}

export interface IAuthority {
    phone: string;
    email: string;
    website: string;
}

export interface IContact {
    name: string;
}


export interface IAdress {
    city: string;
    suite: string;
    street : string;
    zipcode: string;
    country: string
}

export interface IGeographical {
    lat: string;
    lng: string;
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