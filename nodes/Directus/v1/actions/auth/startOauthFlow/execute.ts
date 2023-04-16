import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function startOauthFlow(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const provider = this.getNodeParameter('provider', index) as string;

	const requestMethod = 'GET';
	const endpoint = `auth/oauth/${provider}`;

	const response = await directusApiRequest.call(this, requestMethod, endpoint);
	return this.helpers.returnJsonArray(response);
}
