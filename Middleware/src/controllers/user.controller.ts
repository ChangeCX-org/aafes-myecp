import axios from 'axios';
import User from '../models/registration.model';

const dummyProfile = {
	name: "Ryan Reynolds",
	phone: "9876543210",
	email: "ryan@gmail.com",
	address: "Suite 148 613 Schneider Loaf, New Lamonica, OK 87640"
}

export const getProfile = async (req: any) => {
  	return { success: true, status: 200, data: dummyProfile };
};

export const updateProfile = async (req: any) => {
	const updatedProfile = {...dummyProfile, ...req.body}

  	return { success: true, status: 200, data: updatedProfile };
};

export const updatePhoneNumber = async (req: any) => {
	try {
		// const baseUrl = process.env.DOT_NET_URL;
        // console.log(req);

		// const { data, status, headers } = await axios.get<User>(
		// 	`${baseUrl}/Profile/ChangePhoneNumber`,
		// 	{
		// 		headers: {
		// 			'Content-Type': 'application/json', 
		// 			Accept: 'application/json',
        //             'Cookie': req.headers.cookie
		// 	  	},                
		// 	},
		// );

        // console.log(headers);
		// console.log(headers['set-cookie']);
		// console.log(JSON.stringify(data, null, 4));
		// console.log(status);
	  
		// return { success: true, status: 200, data }
		return { success: true, status: 200, data: {...dummyProfile, ...req.body} }
	} catch (error: any) {
		// Send the error message to the client
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return { status: 400, message: error.message.toString() };
		} else {
			console.log('unexpected error: ', error);
			return { status: 400, message: error.message.toString() };
		}
	}
};

export const updateAddress = async (req: any) => {
	try {
		// const baseUrl = process.env.DOT_NET_URL;
        // console.log(req);

		// const { data, status, headers } = await axios.get<User>(
		// 	`${baseUrl}/Statements/ChangeAddress`,
		// 	{
		// 		headers: {
		// 			'Content-Type': 'application/json', 
		// 			Accept: 'application/json',
        //             'Cookie': req.headers.cookie
		// 	  	},                
		// 	},
		// );

        // console.log(headers);
		// console.log(headers['set-cookie']);
		// console.log(JSON.stringify(data, null, 4));
		// console.log(status);
	  
		return{
			status: 200,
			data: {...dummyProfile, ...req.body}
		};
	} catch (error: any) {
		// Send the error message to the client
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return { status: 400, message: error.message.toString() };
		} else {
			console.log('unexpected error: ', error);
			return { status: 400, message: error.message.toString() };
		}
	}
}