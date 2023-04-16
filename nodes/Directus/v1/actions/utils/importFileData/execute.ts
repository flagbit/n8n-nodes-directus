import type { IBinaryKeyData, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { directusApiFileRequest } from '../../../transport';

export async function importFileData(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const collection = this.getNodeParameter('collection', index) as string;

	const requestMethod = 'POST';
	const endpoint = `utils/import/${collection}`;

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

	const response = await directusApiFileRequest.call(this, requestMethod, endpoint, formData);
	return this.helpers.returnJsonArray(response);
}
