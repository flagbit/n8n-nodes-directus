import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function disable2FA(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const otp = this.getNodeParameter('otp', index) as string;

	const requestMethod = 'POST';
	const endpoint = 'users/me/tfa/disable';
	const body: IDataObject = { otp };

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
