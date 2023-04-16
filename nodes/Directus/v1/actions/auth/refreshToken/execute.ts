import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function refreshToken(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const refresh_token = this.getNodeParameter('refreshToken', index) as string;

	const requestMethod = 'POST';
	const endpoint = 'auth/refresh';
	const body: IDataObject = { refresh_token };

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
