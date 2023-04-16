import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const collection = this.getNodeParameter('collection', index) as string;
	const parametersAreJson = this.getNodeParameter('jsonParameters', index);

	const type = this.getNodeParameter('type', index) as string;
	const field = this.getNodeParameter('field', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) ?? null;

	const requestMethod = 'POST';
	const endpoint = `fields/${collection}`;

	let body = { type, field } as IDataObject;
	for (const key of Object.keys(additionalFields)) {
		body[key] = additionalFields[key];
	}

	if (parametersAreJson) {
		const data = this.getNodeParameter('bodyParametersJson', index) as IDataObject | string;
		body = helpers.parseData(data, 'Body Parameters');
	}

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
