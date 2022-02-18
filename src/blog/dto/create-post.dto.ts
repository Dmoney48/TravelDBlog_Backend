

export class CreatePostDTO {
    readonly title: string;
    readonly description: string;
    readonly likes: number;
    readonly dislikes: number;
    readonly latitude: number;
    readonly longitude: number;
    readonly content: string;
    readonly user: object;
    readonly author: string;
    readonly date_posted: string;
    readonly image:string;
    readonly email: string;
    // readonly title: string;
    // readonly description: string;
    // readonly body: string;
  }