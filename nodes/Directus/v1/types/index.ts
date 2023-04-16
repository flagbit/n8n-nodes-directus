import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

export type DirectusCredentials = {
	url: string;
	accessToken: string;
};

export type IAggregationDescription = {
	name: string;
	value: string;
};

export type CallAPIFunc = (this: IExecuteFunctions, index: number) => Promise<INodeExecutionData[]>;
