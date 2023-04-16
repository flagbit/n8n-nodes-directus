import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const parametersAreJson = this.getNodeParameter('jsonParameters', index);

	const requestMethod = 'POST';
	const endpoint = 'folders';

	let body: IDataObject = {};
	if (parametersAreJson) {
		const data = this.getNodeParameter('bodyParametersJson', index) as IDataObject | string;
		body = helpers.parseData(data, 'Body Parameters');
	} else {
		const name = this.getNodeParameter('name', index) as string;
		body.name = name;

		const additionalFields = this.getNodeParameter('additionalFields', index);
		Object.keys(additionalFields).forEach((key) => (body[key] = additionalFields[key]));
	}

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
