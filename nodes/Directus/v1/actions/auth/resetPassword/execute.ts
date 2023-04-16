import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function resetPassword(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const parametersAreJson = this.getNodeParameter('jsonParameters', index);

	const requestMethod = 'POST';
	const endpoint = 'auth/password/reset';

	let body: IDataObject = {};
	if (parametersAreJson) {
		const data = this.getNodeParameter('bodyParametersJson', index) as IDataObject | string;
		body = helpers.parseData(data, 'Body Parameters');
	} else {
		body.token = (this.getNodeParameter('token', index) as string) ?? '';
		body.password = (this.getNodeParameter('password', index) as string) ?? '';
	}

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
