import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function requestReset(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) || {};
	const resetUrl = (additionalFields?.resetUrl as string) ?? null;

	const requestMethod = 'POST';
	const endpoint = 'auth/password/request';
	const body = { email } as IDataObject;

	if (resetUrl) body.reset_url = resetUrl;

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
