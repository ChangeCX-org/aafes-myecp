import { Request, Response } from 'express';
import axios from 'axios';
import Card from '../models/card';

export const getStatements = async (req: any) => {
    try {
		// const baseUrl = process.env.DOT_NET_URL;
        // console.log(req);
		// //const cardId = parseInt(req.params.id);

		// const { data, status, headers } = await axios.get<Card>(
		// 	`${baseUrl}/Statements/Details/1`,
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
		return {status: 200, success: true}
	} catch (error: any) {
		// Send the error message to the client
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return { success: false, status: 400, message: error.message.toString()}
		} else {
			console.log('unexpected error: ', error);
			return { success: false, status: 400, message: error.message.toString()}
		}
	}
};

export const getStatementDetails = async (req: any, res: any) => {
    try {
		// const baseUrl = process.env.DOT_NET_URL;
        // console.log(req);
		// //const cardId = parseInt(req.params.id);

		// const { data, status, headers } = await axios.get<Card>(
		// 	`${baseUrl}/Statements/Details/1`,
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
		return { success: true, status: 200 }
	} catch (error: any) {
		// Send the error message to the client
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return { success: false, status: 400, message: error.message.toString()}
		} else {
			console.log('unexpected error: ', error);
			return { success: false, status: 400, message: error.message.toString()}
		}
	}
};