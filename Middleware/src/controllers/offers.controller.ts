import express, { Request, Response } from 'express';
import axios from 'axios';
import Offer from '../models/offer';

export const getAvailableOffers = async (req: Request, res: Response) => {
    try {
		// const baseUrl = process.env.DOT_NET_URL;
        // console.log(req);

		// const { data, status, headers } = await axios.get<Offer>(
		// 	`${baseUrl}/Offers/Index`,
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
}