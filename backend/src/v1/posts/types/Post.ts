export type Post ={
    id:bigint,
    user:User,
    content:string,
    created_at:Date,
    favorites?:Favorite[],
    _count?: {favorites:number}
}

export type PostDetail =Post & {
    comments: Comment[]
}

export type Comment={
    id:bigint,
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

type Favorite ={
    post_id:bigint
    user_id:string
}