import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const collection = this.getNodeParameter('collection', index) as string;
	const parametersAreJson = this.getNodeParameter('jsonParameters', index) ?? false;
	const additionalFields = !parametersAreJson
		? this.getNodeParameter('additionalFields', index)
		: {};
	const field = this.getNodeParameter('field', index) as string;

	const requestMethod = 'PATCH';
	const endpoint = `fields/${collection}/${field}`;
	let body: IDataObject = {};

	if (parametersAreJson) {
		const data = this.getNodeParameter('bodyParametersJson', index) as IDataObject;
		body = helpers.parseData(data, 'Body Parameters');
	} else {
		for (const key of Object.keys(additionalFields)) {
			body[key] = additionalFields[key];
		}
	}

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
