import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function getRandomString(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const additionalFields = this.getNodeParameter('additionalFields', index);
	const length = (additionalFields?.length as number) ?? null;

	const requestMethod = 'GET';
	const endpoint = 'utils/random/string';

	const qs: IDataObject = length ? { length } : {};
	const body: IDataObject = {};

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(response);
}
