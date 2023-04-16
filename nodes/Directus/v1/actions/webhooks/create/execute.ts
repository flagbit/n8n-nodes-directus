import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const parametersAreJson = this.getNodeParameter('jsonParameters', index);

	let body: IDataObject = {};
	if (parametersAreJson) {
		const data = this.getNodeParameter('bodyParametersJson', index) as IDataObject | string;
		body = helpers.parseData(data, 'Body Parameters');
	} else {
		const name = this.getNodeParameter('name', index) as string;
		const url = this.getNodeParameter('url', index) as string;
		const actions = this.getNodeParameter('actions', index) as IDataObject | string;
		const collections = this.getNodeParameter('collections', index) as IDataObject | string;

		body.actions = helpers.parseData(actions, 'Actions');
		body.collections = helpers.parseData(collections, 'Collections');
		body.name = name;
		body.url = url;
	}

	const requestMethod = 'POST';
	const endpoint = 'webhooks';

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
