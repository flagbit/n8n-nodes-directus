import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function inviteUser(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', index) as string;
	const role = this.getNodeParameter('role', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) ?? {};

	const requestMethod = 'POST';
	const endpoint = 'users/invite';

	const body: IDataObject = {};
	helpers.applyVarsTo(body, additionalFields);
	body.email = email;
	body.role = role;

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
