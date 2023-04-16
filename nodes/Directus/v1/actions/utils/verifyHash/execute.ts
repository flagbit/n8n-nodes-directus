import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function verifyHash(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const strString = this.getNodeParameter('string', index) as string;
	const hash = this.getNodeParameter('hash', index) as string;

	const requestMethod = 'POST';
	const endpoint = 'utils/hash/verify';

	const body: IDataObject = {
		hash,
		string: strString,
	};

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
