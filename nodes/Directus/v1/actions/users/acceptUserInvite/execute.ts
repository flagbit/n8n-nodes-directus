import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function acceptUserInvite(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const token = this.getNodeParameter('token', index) as string;
	const password = this.getNodeParameter('password', index) as string;

	const requestMethod = 'POST';
	const endpoint = 'users/invite/accept';
	const body: IDataObject = { token, password };

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
