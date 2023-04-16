import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function logout(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const refresh_token = this.getNodeParameter('data', index) as string;

	const requestMethod = 'POST';
	const endpoint = 'auth/logout';
	const body = { refresh_token } as IDataObject;

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
