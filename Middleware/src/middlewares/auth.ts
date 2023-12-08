import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { request } from 'axios';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
		console.log("header",req.header("Authorization"))
		const token = req.header('Authorization')?.replace('Bearer ', '');
	
		if (!token) {
			throw new Error();
		}
	
		const decoded = jwt.verify(token, process.env.SECRET_KEY || "ThisIsMySecretKey");
		(req as CustomRequest).token = decoded;
	
		next();
    } catch (err) {
      	res.status(401).send('Please authenticate');
    }
};