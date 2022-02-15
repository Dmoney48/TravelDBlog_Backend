

export class CreatePostDTO {
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
    // readonly title: string;
    // readonly description: string;
    // readonly body: string;
  }