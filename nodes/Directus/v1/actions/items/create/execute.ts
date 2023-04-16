import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const collection = this.getNodeParameter('collection', index) as string;
	const data = this.getNodeParameter('data', index) as IDataObject | string;

	const requestMethod = 'POST';
	const endpoint = `items/${collection}`;

	const body = helpers.parseData(data, 'Data (JSON)');
	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
