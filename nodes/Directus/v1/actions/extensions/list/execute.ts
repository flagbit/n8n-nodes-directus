import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function list(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const type = this.getNodeParameter('type', index) as string;
	const splitIntoItems = this.getNodeParameter('splitIntoItems', index) as boolean;

	const requestMethod = 'GET';
	const endpoint = `extensions/${type}`;

	const response = await directusApiRequest.call(this, requestMethod, endpoint);
	return helpers.buildExecutionData.call(this, response, splitIntoItems);
}
