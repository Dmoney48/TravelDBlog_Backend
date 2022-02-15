# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

-------------------------------
## User Story

- Without being a registered user,  can view and upvote posts. 
- Search by region and or keywords (Stretch Goal: can do this through map api)
- Can register/login 
- Make and edit their own blog posts
- NSFW image filter -- https://github.com/infinitered/nsfwjs
- (Stretch Goal: Websocket functionality w/ notifications for messages) 
---------------------
## Data Types

- Base Mix_in (All class inherit from this Parent)
```
baseMixIn:{
   datecreate: dateTimeField(now) || integer (unix time),
   datemodified:dateTimeField(now) || integer (unix time), 
   uniqueId: uuid, (mongodb might cover this)
}
```

- Users - auth0
```
user:{
    userName: string,
    email: string,
    firstName:string,
    lastName:string,
    profileImage:string,
}
```

- Blog posts 
```
post: {
    name:string,
    message: string,
    likes: integer default 0,
    dislikes: integer default 0,
    latitude: float,
    longitude: float,
    comment: array(refs to blogs uniqueId),
    user: object (ref to user)
}
```

- Images
```
postImages: {
    location: string,
    postId: string, ( || ref back to post)
    latitude: float,
    longitude: float,
}
```

- Messages
```
message:{
    sender: ref to user,
    receiver: ref to user,
    message: string
}
```

- Comments
```
comment:{
    user: ref to user,
    comment: string,
    likes: int,
    dislikes: int
}
```
