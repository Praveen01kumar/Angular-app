export interface IRegisterUser {
    name: string;
    email: string;
    street: string;
    city: string;
    state: string;
    zip: number;
    phone_number: number;
    location: string;
    password: string;
    confirmPassword: string;
}

export interface ExisitingCustomer {
   email_number: any; 
}

export interface VerficationUser {
    password: string;
    confirmPassword: string;
}


export interface ParentItemData {
    key: number;
    name: string;
    platform: string;
    version: string;
    upgradeNum: number | string;
    creator: string;
    createdAt: string;
    expand: boolean;
  }
  
  export interface ChildrenItemData {
    key: number;
    name: string;
    date: string;
    upgradeNum: string;
  }