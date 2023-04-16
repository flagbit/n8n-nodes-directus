import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function imp(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const URL = this.getNodeParameter('url', index) as string;
	const additionalFields = this.getNodeParameter('additionalFields', index) ?? null;
	const data = (additionalFields?.data as IDataObject | string) ?? null;

	const requestMethod = 'POST';
	const endpoint = 'files/import';

	const body: IDataObject = {
		data: helpers.parseData(data, 'Additional Fields'),
		url: URL,
	};

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
