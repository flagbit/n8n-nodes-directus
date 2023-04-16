import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const parametersAreJson = this.getNodeParameter('jsonParameters', index);
	const data = (this.getNodeParameter('data', index) as IDataObject | string) ?? {};

	const requestMethod = 'PATCH';
	const endpoint = 'settings';

	let qs: IDataObject = {};
	if (parametersAreJson) {
		const params = this.getNodeParameter('queryParametersJson', index) as IDataObject | string;
		qs = helpers.parseData(params, 'Query Parameters');
	} else {
		const additionalFields = this.getNodeParameter('additionalFields', index);
		helpers.applyVarsTo(qs, additionalFields);
	}

	const body = helpers.parseData(data, 'Data (JSON)');
	const response = await directusApiRequest.call(this, requestMethod, endpoint, body, qs);
	return this.helpers.returnJsonArray(response);
}
