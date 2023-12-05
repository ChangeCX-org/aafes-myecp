import axios from 'axios';
import User from '../models/registration.model';

export const getProfile = async (req: any) => {
  	return { success: true, status: 200 };
};

export const updateProfile = async (req: any) => {
  	return { success: true, status: 200 };
};

export const updatePhoneNumber = async (req: any, res: any) => {
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
	  
		// res.status(200).json({
		// 	status: status,
		// 	data: data
		// });
		res.status(200).json({
			status: 200,
		});
	} catch (error: any) {
		// Send the error message to the client
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			res.status(400).json({
				status: 400,
				message: error.message.toString(),
			});
		} else {
			console.log('unexpected error: ', error);
			res.status(400).json({
				status: 400,
				message: error.message.toString(),
			});
		}
	}
};

export const updateAddress = async (req: any, res: any) => {
	try {
		const baseUrl = process.env.DOT_NET_URL;
        console.log(req);

		const { data, status, headers } = await axios.get<User>(
			`${baseUrl}/Statements/ChangeAddress`,
			{
				headers: {
					'Content-Type': 'application/json', 
					Accept: 'application/json',
                    'Cookie': req.headers.cookie
			  	},                
			},
		);

        console.log(headers);
		console.log(headers['set-cookie']);
		console.log(JSON.stringify(data, null, 4));
		console.log(status);
	  
		res.status(200).json({
			status: status,
			data: data
		});
	} catch (error: any) {
		// Send the error message to the client
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			res.status(400).json({
				status: 400,
				message: error.message.toString(),
			});
		} else {
			console.log('unexpected error: ', error);
			res.status(400).json({
				status: 400,
				message: error.message.toString(),
			});
		}
	}
}