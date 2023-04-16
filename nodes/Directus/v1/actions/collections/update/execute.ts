import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const collection = this.getNodeParameter('collection', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) ?? {};

	const requestMethod = 'PATCH';
	const endpoint = `collections/${collection}`;
	const body: IDataObject = { collection };

	body.meta = helpers.parseData(additionalFields.meta as IDataObject | string, 'Meta');

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
