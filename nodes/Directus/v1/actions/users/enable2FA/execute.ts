import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function enable2FA(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const secret = this.getNodeParameter('secret', index) as string;
	const otp = this.getNodeParameter('otp', index) as string;

	const requestMethod = 'POST';
	const endpoint = 'users/me/tfa/enable';
	const body: IDataObject = { secret, otp };

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
