import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function generateHash(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const strString = this.getNodeParameter('string', index) as string;

	const requestMethod = 'POST';
	const endpoint = 'utils/hash/generate';

	const body: IDataObject = { string: strString };

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
