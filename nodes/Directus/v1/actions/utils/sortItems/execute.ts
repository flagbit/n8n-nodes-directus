import type { IDataObject, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function sortItems(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const item = this.getNodeParameter('item', index) as number;
	const to = this.getNodeParameter('to', index) as number;
	const collection = this.getNodeParameter('collection', index) as string;

	const requestMethod = 'POST';
	const endpoint = `utils/sort/${collection}`;
	const body: IDataObject = { item, to };

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
