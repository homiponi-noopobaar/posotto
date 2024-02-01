export type Post ={
    id:number,
    user:User,
    content:string,
    created_at:Date,
    isLiked:boolean
    _count: {favorites:number,comments:number}
}

type User ={
    id:string,
    publicId:string,
    nickname:string,
    img_url?:string,
    isPublic:boolean,
}