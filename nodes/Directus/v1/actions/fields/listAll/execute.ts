import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function listAll(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const splitIntoItems = (this.getNodeParameter('splitIntoItems', index) as boolean) ?? null;

	const requestMethod = 'GET';
	const endpoint = 'fields';

	const response = await directusApiRequest.call(this, requestMethod, endpoint);
	return helpers.buildExecutionData.call(this, response, splitIntoItems);
}
