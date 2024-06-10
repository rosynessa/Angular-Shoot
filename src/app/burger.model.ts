export interface Burger{
    name: string;
    description:string;
    price: number;
    image: string;
    nutrition:{
        fat: string;
        saturates: string;
        sugars: string;
        salt: string;
    };
}