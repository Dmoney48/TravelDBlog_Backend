import { Document } from 'mongoose';
    
export interface Post extends Document {
  readonly name: string;
  readonly message: string;
  readonly likes: number;
  readonly dislikes: number;
  readonly latitude: number;
  readonly longitude: number;
  readonly comment: string;
  readonly user: object;
  readonly author: string;
  readonly date_posted: string;
}
