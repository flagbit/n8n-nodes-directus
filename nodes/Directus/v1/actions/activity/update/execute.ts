import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const comment = this.getNodeParameter('comment', index) as string;
	const ID = this.getNodeParameter('id', index) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index) ?? {};
	const meta = (additionalFields.meta as string) ?? '';

	const requestMethod = 'PATCH';
	const endpoint = `activity/comment/${ID}`;

	const qs: IDataObject = meta ? { meta } : {};
	const body: IDataObject = { comment };

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(response);
}
