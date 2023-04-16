import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';

export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const qs: IDataObject = {};

	const ID = this.getNodeParameter('id', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) ?? null;
	const fields = (additionalFields.fields as string) ?? {};
	const meta = (additionalFields.meta as string) ?? null;

	const requestMethod = 'GET';
	const endpoint = `activity/${ID}`;
	const body: IDataObject = {};

	if (fields) qs.fields = fields;
	if (meta) qs.meta = meta;

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(response);
}
