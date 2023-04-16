import type {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	IDataObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
	IExecuteSingleFunctions,
	IWebhookFunctions,
	IBinaryKeyData,
	INodeExecutionData,
	JsonObject,
} from 'n8n-workflow';
import type { DirectusCredentials } from '../types';
import { NodeApiError } from 'n8n-workflow';
import { formatResponse, parseData } from '../methods/helpers';

const StandardUserAgent =
	'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0';

export async function directusApiRequest(
	this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IWebhookFunctions,
	method: IHttpRequestMethods,
	path: string,
	body: any = {},
	qs: IDataObject = {},
): Promise<IDataObject | IDataObject[]> {
	const credentials = (await this.getCredentials('directusApi')) as DirectusCredentials;

	if (!credentials) {
		throw new Error('No credentials provided');
	}

	const params = credentials;
	const url = params.url.replace(/\/$/, '') || null;
	const accessToken = params.accessToken || null;

	const options: IHttpRequestOptions = {
		url: `${url}/${path.replace(/^\//, '')}`,
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': StandardUserAgent,
		},
		method,
		qs,
		body,
		json: true,
	};

	try {
		options.headers!.Authorization = accessToken ? `Bearer ${accessToken}` : '';
		const res = await this.helpers.httpRequestWithAuthentication.call(this, 'directusApi', options);
		return formatResponse(res);
	} catch (error) {
		throw error;
	}
}

export async function directusApiAssetRequest(
	this: IExecuteFunctions | IExecuteSingleFunctions,
	method: IHttpRequestMethods,
	ID: string,
	dataPropertyName: string,
	qs: IDataObject = {},
): Promise<any> {
	const credentials = (await this.getCredentials('directusApi')) as DirectusCredentials;

	if (!credentials) {
		throw new Error('No credentials provided');
	}

	const params = credentials;
	const url = params.url.replace(/\/$/, '') || null;
	const accessToken = params.accessToken || null;

	//console.log({url,path,ID});

	const optionsFile: IHttpRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': StandardUserAgent,
			Authorization: `Bearer ${accessToken}`,
		},
		method,
		qs,
		url: `${url}/files/${ID}`,
		json: true,
	};
	//console.log('3. optionsFile : ', { optionsFile });

	const optionsAsset: IHttpRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': StandardUserAgent,
			Authorization: `Bearer ${accessToken}`,
		},
		method,
		qs,
		url: `${url}/assets/${ID}`,
		json: true,
		encoding: 'arraybuffer',
	};
	//console.log('4. optionsAsset : ', { optionsAsset });

	try {
		const resFile = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'directusApi',
			optionsFile,
		);
		const file = resFile.data;

		const res = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'directusApi',
			optionsAsset,
		);
		const binaryData = Buffer.from(res);

		const binary: IBinaryKeyData = {};
		binary[dataPropertyName] = await this.helpers.prepareBinaryData(
			binaryData,
			file.filename_download as string,
			file.type as string,
		);

		const result: INodeExecutionData = {
			json: { file },
			binary,
		};

		return result;
	} catch (error) {
		throw error;
	}
}

/// To: 1.) Create a new File (including file content), 2.) Update a file (file content or file object)
export async function directusApiFileRequest(
	this: IExecuteFunctions | IExecuteSingleFunctions | IWebhookFunctions,
	method: IHttpRequestMethods,
	path: string,
	formData: IDataObject = {},
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<any> {
	console.log('Received file for processing');

	const credentials = (await this.getCredentials('directusApi')) as DirectusCredentials;

	if (!credentials) {
		throw new Error('No credentials provided');
	}

	const params = credentials;
	const url = params.url.replace(/\/$/, '') || null;
	const accessToken = params.accessToken || null;

	const optionsFormData: IHttpRequestOptions = {
		headers: {
			'Content-Type': 'multipart/form-data',
			'User-Agent': StandardUserAgent,
			Authorization: `Bearer ${accessToken}`,
		},
		method,
		qs,
		body: formData,
		url: `${url}/${path}`,
	};

	const responseFile = {};

	try {
		if (method === 'POST') {
			// 1. Create a file with content

			console.log('Uploading raw file');
			const response = await this.helpers.request(optionsFormData);
			//const response = await this.helpers.httpRequestWithAuthentication.call(this, 'directusApi', optionsFormData);
			const file = parseData(response, 'API Response').data as IDataObject;

			if (file) {
				console.log('Raw file uploaded');
				// 2. Update the file object with fileObject properties
				const res = await directusApiRequest.call(this, 'PATCH', `files/${file.id}`, body);
				console.log('File data updated');
				//console.log({res});
				Object.assign(responseFile, res);
			}
		}
		if (method === 'PATCH') {
			// 1. Check if formdata and/or body are provided
			const isForm = Object.keys(formData).length > 0 ?? false;
			const isBody = Object.keys(body).length > 0 ?? false;

			// 2. Sequentially, update them both
			if (isForm) {
				const response = await this.helpers.request(optionsFormData);
				//const response = await this.helpers.httpRequestWithAuthentication.call(this, 'directusApi', optionsFormData);
				const file = parseData(response, 'API Response').data as IDataObject;
				Object.assign(responseFile, file);
			}
			if (isBody) {
				const res = await directusApiRequest.call(this, 'PATCH', 'files', body);
				Object.assign(responseFile, res);
			}
		}
		// 3. Return the final result
		return responseFile;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}
