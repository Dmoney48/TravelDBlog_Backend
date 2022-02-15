import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PostDocument = Post & Document;

export class Page {
    @Prop()
    number:number;
}

@Schema({ timestamps: true })
export class Post {
    @Prop({ default: `${uuidv4()}`})
    post_uid: string;

    @Prop()
    full_html: string;

    @Prop()
    full_text: string;

    @Prop([Page])
    pages: Page[];


    
}

export const PostSchema = SchemaFactory.createForClass(Post);