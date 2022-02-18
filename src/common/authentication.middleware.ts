import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import jwt_decode from 'jwt-decode';
import { expressJwtSecret } from 'jwks-rsa';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
    
@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    jwt({
        secret: expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
        }),
        issuer: `https://${process.env.AUTH0_DOMAIN}/`,
        algorithms: ['RS256'],
      })(req, res, (err) => {
        if (err) {
          const status = err.status || 500;
          const message = err.message || 'Sorry we were unable to process your request.';
          return res.status(status).send({
            message,
          });
        }
        else {
          const authHeader = req.header('authorization');
          const bearerToken: string[] = authHeader.split(' ');
          const token: string = bearerToken[1];
          const decodedToken = jwt_decode(token);
          console.log(decodedToken)
          // DECODE TOKEN AND ADD USER TO REQUEST
          res.locals.user = decodedToken;
        }
        next();
      });
  }
}