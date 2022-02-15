import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            load: [configuration],
     }), 
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-blog-project'),
        BlogModule,
        UserModule,
    ], 
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }