import React from 'react';
import {
	BarChart,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{
		name: 'AP',
		Reported: 7,
		Repaired: 2,
		amt: 100,
	},
	{
		name: 'AR',
		Reported: 10,
		Repaired: 3,
		amt: 100,
	},
	{
		name: 'BR',
		Reported: 22,
		Repaired: 7,
		amt: 100,
	},
	{
		name: 'CG',
		Reported: 15,
		Repaired: 4,
		amt: 100,
	},
	{
		name: 'CH',
		Reported: 18,
		Repaired: 4,
		amt: 100,
	},
	{
		name: 'DD',
		Reported: 18,
		Repaired: 6,
		amt: 100,
	},
	{
		name: 'DL',
		Reported: 25,
		Repaired: 4,
		amt: 100,
	},
	{
		name: 'GA',
		Reported: 5,
		Repaired: 3,
		amt: 100,
	},
	{
		name: 'GJ',
		Reported: 15,
		Repaired: 5,
		amt: 100,
	},
	{
		name: 'HP',
		Reported: 18,
		Repaired: 9,
		amt: 100,
	},
	{
		name: 'HR',
		Reported: 30,
		Repaired: 10,
		amt: 100,
	},
	{
		name: 'JH',
		Reported: 20,
		Repaired: 12,
		amt: 100,
	},
	{
		name: 'JK',
		Reported: 20,
		Repaired: 12,
		amt: 100,
	},
	{
		name: 'KA',
		Reported: 10,
		Repaired: 5,
		amt: 100,
	},
	{
		name: 'KL',
		Reported: 15,
		Repaired: 6,
		amt: 100,
	},
	{
		name: 'LA',
		Reported: 10,
		Repaired: 6,
		amt: 100,
	},
	{
		name: 'MH',
		Reported: 20,
		Repaired: 10,
		amt: 100,
	},
	{
		name: 'OR',
		Reported: 20,
		Repaired: 4,
		amt: 100,
	},
	{
		name: 'PB',
		Reported: 20,
		Repaired: 10,
		amt: 100,
	},
	{
		name: 'PY',
		Reported: 10,
		Repaired: 2,
		amt: 100,
	},
	{
		name: 'RJ',
		Reported: 30,
		Repaired: 10,
		amt: 100,
	},
	{
		name: 'SK',
		Reported: 18,
		Repaired: 10,
		amt: 100,
	},
	{
		name: 'TN',
		Reported: 20,
		Repaired: 15,
		amt: 100,
	},
	{
		name: 'UK',
		Reported: 10,
		Repaired: 2,
		amt: 100,
	},
	{
		name: 'UP',
		Reported: 30,
		Repaired: 10,
		amt: 100,
	},
];

const Chart = () => {
	return (
		<ResponsiveContainer width="100%" height={350}>
			<BarChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="Reported" fill="#FF0000" />
				<Bar dataKey="Repaired" fill="#00FF17" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default Chart;
