import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IBinaryKeyData,
} from 'n8n-workflow';
import { directusApiRequest, directusApiFileRequest } from '../../../transport';
import { helpers } from '../../../methods';

export async function create(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sendBinaryData = this.getNodeParameter('sendBinaryData', index) as boolean;
	const additionalFields = this.getNodeParameter('additionalFields', index) ?? null;

	const data: IDataObject = (additionalFields.data as IDataObject) ?? null;
	const body: IDataObject = data ? helpers.parseData(data, 'File Object (JSON)') : {};

	const requestMethod = 'POST';
	const endpoint = 'files';

	let response: any;
	if (sendBinaryData) {
		const items = this.getInputData();
		const item = items[index].binary as IBinaryKeyData;

		const binaryPropertyName = this.getNodeParameter('binaryPropertyName', index) ?? null;
		const binaryData = item[binaryPropertyName];
		const binaryDataBuffer = await this.helpers.getBinaryDataBuffer(index, binaryPropertyName);

		const formData = {};
		Object.assign(formData, {
			file: {
				value: binaryDataBuffer,
				options: {
					filename: binaryData.fileName,
					contentType: binaryData.mimeType,
				},
			},
		});

		response = await directusApiFileRequest.call(this, requestMethod, endpoint, formData, body);
	} else {
		response = await directusApiRequest.call(this, requestMethod, endpoint, body);
	}

	return this.helpers.returnJsonArray(response);
}
