import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function list(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const collection = this.getNodeParameter('collection', index) as string;
	const splitIntoItems = this.getNodeParameter('splitIntoItems', index) as boolean;

	const requestMethod = 'GET';
	const endpoint = `relations/${collection}`;

	const response = await directusApiRequest.call(this, requestMethod, endpoint);
	return helpers.buildExecutionData.call(this, response, splitIntoItems);
}
