import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IBinaryKeyData,
} from 'n8n-workflow';
import { directusApiRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function get(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const parametersAreJson = this.getNodeParameter('jsonParameters', index) ?? false;
	const additionalFields = !parametersAreJson
		? this.getNodeParameter('additionalFields', index)
		: {};

	let qs: IDataObject = {};
	if (parametersAreJson) {
		const data = this.getNodeParameter('queryParametersJson', index) as IDataObject | string;
		qs = helpers.parseData(data, 'Query Parameters');
	} else {
		helpers.applyVarsTo(qs, additionalFields);
	}

	const requestMethod = 'GET';
	const endpoint = 'settings';
	const body: IDataObject = {};

	const response = await directusApiRequest.call(this, requestMethod, endpoint, body, qs);

	const exportType = (additionalFields.export as string) ?? null;
	const binary: IBinaryKeyData = exportType
		? await helpers.responseToBinary.call(
				this,
				response,
				exportType,
				additionalFields.fileName as string,
				additionalFields.binaryPropertyName as string,
		  )
		: {};

	if (Array.isArray(response)) {
		return this.helpers.returnJsonArray(helpers.splitUpResponse(response, binary));
	}

	return this.helpers.returnJsonArray(response);
}
