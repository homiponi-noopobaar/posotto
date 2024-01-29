export class CreatePostDto {
    content: Express.Multer.File; 
    created_at: Date;
    user_id: string; 
}