import express, { Request, Response } from 'express';
import axios from 'axios';
import Reward from '../models/reward';

export const getAvailableRewards = async (req: Request, res: Response) => {
    try {
		// const baseUrl = process.env.DOT_NET_URL;
        // console.log(req);

		// const { data, status, headers } = await axios.get<Reward>(
		// 	`${baseUrl}/Rewards/Index`,
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

		const dummyRewards = [
            {
                cardNumber: '1234567890',
                currentPointBalance: 78,
                expiryDate: '14-03-2024',
                lifetimePointEarned: 40000,
                lifetimeRewardsCards: 10,
                lifetimeRewardsValue: '$360',
            },
            // Add more reward records if needed
        ];

		res.status(200).json({
			status: 200,
			data:dummyRewards
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

export const postRewards = async (req: Request, res: Response) => {
    const couponId = req.params.id
    const data = { message: `Hello, this is a POST request to use the coupon ${couponId}!` };
    res.json(data);
};

export const patchRewards = async (req: Request, res: Response) => {
    const couponId = req.params.id
    const data = { message: `Hello, this is a Update request to update ${couponId}` }
    res.json(data)
};

export const deleteRewards = (req: Request, res: Response) => {
    const couponId = req.params.id
    const data = { message: `Successfully Deleted the coupon ${couponId}` }
    res.json(data)
};
