import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const parametersAreJson = this.getNodeParameter('jsonParameters', index) ?? false;
	const collection = !parametersAreJson
		? (this.getNodeParameter('collection', index) as string)
		: null;

	const requestMethod = 'POST';
	const endpoint = 'collections';

	let body: IDataObject = {};
	if (parametersAreJson) {
		const data = this.getNodeParameter('bodyParametersJson', index) as IDataObject;
		body = helpers.parseData(data, 'Body Parameters');
	} else {
		const additionalFields = this.getNodeParameter('additionalFields', index);
		for (const key of Object.keys(additionalFields)) {
			if (['fields'].includes(key)) {
				const object = additionalFields[key] as IDataObject | string;
				body[key] = helpers.parseData(object, key);
			} else {
				body[key] = additionalFields[key];
			}
		}
		body.collection = collection;
	}

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
