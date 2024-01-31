export type Post ={
    id:number,
    user:User,
    content:string,
    created_at:Date
}

type User ={
    id:number,
    public_id:string,
    nickname:string,
    img_url?:string,
    isPublic:boolean,
}