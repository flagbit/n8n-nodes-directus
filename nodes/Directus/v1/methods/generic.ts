import type {
	IBinaryKeyData,
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	INodeExecutionData,
} from 'n8n-workflow';
import { directusApiRequest } from '../transport';
import type { CallAPIFunc } from '../types';
import {
	applyVarsTo,
	buildEndpoint,
	buildExecutionData,
	parseData,
	responseToBinary,
} from './helpers';

export function callAPI(
	requestMethod: IHttpRequestMethods,
	endpointParams: string[],
	bodyParam?: string,
): CallAPIFunc {
	return async function (this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
		const endpoint = buildEndpoint.call(this, index, endpointParams);

		const body: IDataObject =
			bodyParam && bodyParam.length > 0
				? parseData(this.getNodeParameter(bodyParam, index) as IDataObject | string, 'body')
				: {};

		const response = await directusApiRequest.call(this, requestMethod, endpoint, body);
		return this.helpers.returnJsonArray(response);
	};
}

export function listStd(endpointParams: string[]): CallAPIFunc {
	return async function list(
		this: IExecuteFunctions,
		index: number,
	): Promise<INodeExecutionData[]> {
		const splitIntoItems = this.getNodeParameter('splitIntoItems', index) as boolean;
		const parametersAreJson = this.getNodeParameter('jsonParameters', index);

		const requestMethod = 'GET';
		const endpoint = buildEndpoint.call(this, index, endpointParams);

		let qs = {} as IDataObject;
		let additionalFields = {} as IDataObject;

		if (parametersAreJson) {
			const data = this.getNodeParameter('queryParametersJson', index) as IDataObject | string;
			qs = parseData(data, 'Query Parameters');
		} else {
			additionalFields = this.getNodeParameter('additionalFields', index);
			const returnAll = this.getNodeParameter('returnAll', index);
			qs.limit = returnAll ? -1 : this.getNodeParameter('limit', index) ?? 10;
			applyVarsTo(qs, additionalFields);
		}

		const body: IDataObject = {};
		const response = await directusApiRequest.call(this, requestMethod, endpoint, body, qs);

		const exportType = (additionalFields.export as string) ?? null;
		const binary: IBinaryKeyData = exportType
			? await responseToBinary.call(
					this,
					response,
					exportType,
					additionalFields.fileName as string,
					additionalFields.binaryPropertyName as string,
			  )
			: {};

		return buildExecutionData.call(this, response, splitIntoItems, binary);
	};
}
