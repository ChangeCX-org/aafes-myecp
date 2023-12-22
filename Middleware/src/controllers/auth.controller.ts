import axios from 'axios';
import jwt from 'jsonwebtoken';
import User from '../models/registration.model';
import { users } from '../utils/users';
const bcrypt = require('bcrypt');

type CreateUserResponse = {
	Success: string;
	Token: string;
  };

export const login = async (req: any, res: any) => {
	try {
		const baseUrl = process.env.DOT_NET_URL;
		// ** Get The User Data From Body ;
		const user = req.body;

		// ** destructure the information from user;
		const { email, password } = user;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password,salt); 

		// const { data, status, headers } = await axios.post<CreateUserResponse>(
		// 	`${baseUrl}/Account/LoginApi`,
		// 	req.body,
		// 	{
		// 		headers: {
		// 			'Content-Type': 'application/json', 
		// 			Accept: 'application/json',
		// 	  	},
		// 	},
		// );

		// console.log(headers['set-cookie']);
		// console.log(JSON.stringify(data, null, 4));
		// console.log(status);
	  
		// res.status(200).json({
		// 	status: status,
		// 	success: true,
		// 	message: "login success",
		// 	token: data.Token
		// });

		// ** Check the (email/user) exist  in database or not ;
		let filteredUsers: User[] = users.filter(c => c.email == email && c.password == password);
		// ** if there is not any user we will send user not found;
		if (filteredUsers.length <= 0) {
			res.status(404).json({status: 404,  success: false, message: "User not found",});
			return;
		}		

		 // ** if the (user) exist  in database we will check the password is valid or not ;
    	// **  compare the password in db and the password sended in the request body

		//const isPasswordMatched = isUserExist?.password === password;

		// ** if not matched send response that wrong password;

		// if (!isPasswordMatched) {
		// 	res.status(400).json({
		// 		status: 400,
		// 		success: false,
		// 		message: "wrong password",
		// 	});
		// 	return;
		// }

		// ** if the email and password is valid create a token

		/*
		To create a token JsonWebToken (JWT) receive's 3 parameter
		1. Payload -  This contains the claims or data you want to include in the token.
		2. Secret Key - A secure key known only to the server used for signing the token.
		3. expiration -  Additional settings like token expiration or algorithm selection.
		*/

		// !! Don't Provide the secret openly, keep it in the .env file. I am Keeping Open just for demonstration

		// ** This is our JWT Token
		const token = jwt.sign(
				{ 
					_id: filteredUsers[0].userId, 
					email: filteredUsers[0].email,
					role: filteredUsers[0].role
				},
				process.env.SECRET_KEY || "ThisIsMySecretKey",
				{
					expiresIn: "5m",					
				}
			);

		// send the response
		res.status(200).json({
			status: 200,
			success: true,
			message: "login success",
			token: token,
			password:hashedPassword,
		});
	} catch (error: any) {
		// Send the error message to the client
		res.status(400).json({
			status: 400,
			message: error.message.toString(),
		});		

		// if (axios.isAxiosError(error)) {
		// 	console.log('error message: ', error.message);
		// 	res.status(400).json({
		// 		status: 400,
		// 		message: error.message.toString(),
		// 	});
		// } else {
		// 	console.log('unexpected error: ', error);
		// 	res.status(400).json({
		// 		status: 400,
		// 		message: error.message.toString(),
		// 	});
		// }
	}
};
