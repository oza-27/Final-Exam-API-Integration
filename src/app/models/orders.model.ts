export interface Order{
    productId:number;
    customerName:string;
    custEmail:string;
    customerContactNumber:string;
    isActive:boolean;
    createdOn:Date;
    modifiedOn:Date;
    discountAmount:number;
    orderDate:Date;
    totalAmount:number;
    note:string;
    statusType:boolean
}