import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { applyVarsTo, buildEndpoint } from '../../../methods/helpers';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function upsert(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const filters = this.getNodeParameter('filters', index);
	const returnAll = this.getNodeParameter('returnAll', index);
	const data = this.getNodeParameter('data', index) as IDataObject | string;

	const qs = {} as IDataObject;
	qs.limit = returnAll ? -1 : this.getNodeParameter('limit', index) ?? 10;
	applyVarsTo(qs, filters);

	const endpoint = buildEndpoint.call(this, index, ['items', 'collection']);

	// get items by set filters
	const listResponse = (await directusApiRequest.call(
		this,
		'GET',
		endpoint,
		{},
		qs,
	)) as IDataObject[];

	const body = helpers.parseData(data, 'Data (JSON)');

	if (listResponse.length === 0) {
		//create a new item
		const createResponse = await directusApiRequest.call(this, 'POST', endpoint, body);
		return this.helpers.returnJsonArray(createResponse);
	}

	// or update existing item(s) with provided data
	let updateResponses: IDataObject[] = [];
	for (const resp of listResponse) {
		if (resp.id) {
			const updateResponse = (await directusApiRequest.call(
				this,
				'PATCH',
				`${endpoint}/${resp.id}`,
				body,
			)) as IDataObject;
			updateResponses = [...updateResponses, updateResponse];
		}
	}

	return this.helpers.returnJsonArray(updateResponses);
}
