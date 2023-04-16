import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function update(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ID = this.getNodeParameter('id', index) as string;
	const parametersAreJson = this.getNodeParameter('jsonParameters', index) ?? false;

	const requestMethod = 'PATCH';
	const endpoint = `folders/${ID}`;

	let body: IDataObject = {};
	if (parametersAreJson) {
		const data = this.getNodeParameter('bodyParametersJson', index) as IDataObject | string;
		body = helpers.parseData(data, 'Body Parameters');
	} else {
		const additionalFields = this.getNodeParameter('additionalFields', index);
		helpers.applyVarsTo(body, additionalFields);
	}

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	return this.helpers.returnJsonArray(response);
}
