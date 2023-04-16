import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function generate2FA(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const password = this.getNodeParameter('password', index) as string;

	const requestMethod = 'POST';
	const endpoint = 'users/me/tfa/generate';
	const body: IDataObject = { password };

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
