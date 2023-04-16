import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { directusApiAssetRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const parametersAreJson = this.getNodeParameter('jsonParameters', index);

	const ID = (this.getNodeParameter('id', index) as string) ?? null;
	const dataPropertyName = this.getNodeParameter('binaryPropertyName', index);
	const includeFileData = this.getNodeParameter('includeFileData', index) as boolean;

	const requestMethod = 'GET';

	let qs: IDataObject = {};
	if (parametersAreJson) {
		const data = this.getNodeParameter('queryParametersJson', index) as IDataObject | string;
		qs = helpers.parseData(data, 'Query Parameters');
	} else {
		const additionalFields = this.getNodeParameter('additionalFields', index);
		for (const key of Object.keys(additionalFields)) {
			if (key !== 'id' && key !== 'transforms') {
				qs[key] = additionalFields[key];
			}
			if (key === 'transforms') {
				if (typeof additionalFields[key] === 'string') {
					qs[key] = helpers.parseData(additionalFields[key] as string, key);
				} else {
					qs[key] = helpers.parseData(JSON.stringify(additionalFields[key]), key);
				}
			}
		}
	}

	const response = await directusApiAssetRequest.call(
		this,
		requestMethod,
		ID,
		dataPropertyName,
		qs,
	);
	if (!includeFileData) delete response.json.file;

	return this.helpers.returnJsonArray(response);
}
