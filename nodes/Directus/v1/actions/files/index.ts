import type { INodeProperties } from 'n8n-workflow';

import * as create from './create';
import * as del from './delete';
import * as deleteMultiple from './deleteMultiple';
import * as get from './get';
import * as imp from './import';
import * as list from './list';
import * as update from './update';
import * as updateMultiple from './updateMultiple';

export { create, del as delete, deleteMultiple, get, imp as import, list, update, updateMultiple };

// https://docs.directus.io/reference/system/files.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['files'],
			},
		},
		options: [
			{
				name: 'Create / Upload',
				value: 'create',
				description: 'Create/Upload a new file',
				action: 'Create / Upload a file',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an existing file',
				action: 'Delete a file',
			},
			{
				name: 'Delete Multiple',
				value: 'deleteMultiple',
				description: 'Delete multiple files',
				action: 'Delete multiple a file',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single file by unique identifier',
				action: 'Get a file',
			},
			{
				name: 'Import File',
				value: 'import',
				description: 'Import a file',
				action: 'Import a files',
			},
			{
				name: 'List',
				value: 'list',
				description: 'List the files',
				action: 'List files',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing file',
				action: 'Update a file',
			},
			{
				name: 'Update Multiple',
				value: 'updateMultiple',
				description: 'Update Multiple Files',
				action: 'Update multiple files',
			},
		],
		default: 'list',
	},

	...create.description,
	...del.description,
	...deleteMultiple.description,
	...get.description,
	...imp.description,
	...list.description,
	...update.description,
	...updateMultiple.description,
];
