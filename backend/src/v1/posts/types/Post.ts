export type Post ={
    id:BigInt,
    user:User,
    content:string,
    created_at:Date
}

export type PostDetail =Post & {
    comments: Comment[]
}

export type Comment={
    id:BigInt,
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