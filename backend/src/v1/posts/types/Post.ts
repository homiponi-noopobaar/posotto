export type Post ={
    id:number,
    user:User,
    content:string,
    created_at:Date,
    isLiked:boolean
    _count: {favorites:number,comments:number}
}

export type PostDetail =Post & {
    comments: Comment[]
}

export type Comment={
    id:number,
    content:string
    created_at:Date
    user:User
}

type User ={
    id:string,
    publicId:string,
    nickname:string,
    img_url?:string,
    isPublic:boolean,
}