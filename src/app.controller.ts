import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// import Parser from 'rss-parser';
// type CustomFeed = { foo: string };
// type CustomItem = { bar: number };
// const parser: Parser<CustomFeed, CustomItem> = new Parser({
//     customFields: {
//         feed: ['foo'],
//         item: ['bar']
//     }
// });

// (async () => {

//     const feed = await parser.parseURL('https://www.reddit.com/.rss');
//     console.log(feed.title); // feed will have a `foo` property, type as a string

//     feed.items.forEach(item => {
//         console.log(item.title + ':' + item.link) // item will have a `bar` property type as a number
//     });
// })();

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}