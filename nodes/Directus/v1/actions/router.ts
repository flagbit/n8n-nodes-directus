import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import * as activity from './activity';
import * as assets from './assets';
import * as auth from './auth';
import * as collections from './collections';
import * as extensions from './extensions';
import * as fields from './fields';
import * as files from './files';
import * as folders from './folders';
import * as items from './items';
import * as permissions from './permissions';
import * as presets from './presets';
import * as relations from './relations';
import * as revisions from './revisions';
import * as roles from './roles';
import * as server from './server';
import * as settings from './settings';
import * as users from './users';
import * as utils from './utils';
import * as webhooks from './webhooks';

import type { Directus } from './interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const inputData = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < inputData.length; i++) {
		const resource = this.getNodeParameter<Directus>('resource', i);
		let operation = this.getNodeParameter('operation', i);
		if (operation === 'del') {
			operation = 'delete';
		} else if (operation === 'desactive') {
			operation = 'deactive';
		}

		const directus = {
			resource,
			operation,
		} as Directus;

		try {
			if (directus.resource === 'activity') {
				responseData = await activity[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'assets') {
				responseData = await assets[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'auth') {
				responseData = await auth[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'collections') {
				responseData = await collections[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'extensions') {
				responseData = await extensions[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'fields') {
				responseData = await fields[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'files') {
				responseData = await files[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'folders') {
				responseData = await folders[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'items') {
				responseData = await items[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'permissions') {
				responseData = await permissions[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'presets') {
				responseData = await presets[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'relations') {
				responseData = await relations[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'revisions') {
				responseData = await revisions[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'roles') {
				responseData = await roles[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'server') {
				responseData = await server[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'settings') {
				responseData = await settings[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'users') {
				responseData = await users[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'utils') {
				responseData = await utils[directus.operation].execute.call(this, i);
			} else if (directus.resource === 'webhooks') {
				responseData = await webhooks[directus.operation].execute.call(this, i);
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}
