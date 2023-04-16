import type { INodeProperties } from 'n8n-workflow';

import * as create from './create';
import * as createMultiple from './createMultiple';
import * as del from './delete';
import * as deleteMultiple from './deleteMultiple';
import * as update from './update';
import * as updateMultiple from './updateMultiple';
import * as get from './get';
import * as list from './list';

export { create, createMultiple, del as delete, deleteMultiple, update, updateMultiple, get, list };

// https://docs.directus.io/reference/folders.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['folders'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new folder',
				action: 'Create a folder',
			},
			{
				name: 'Create Multiple',
				value: 'createMultiple',
				description: 'Create multiple folders',
				action: 'Create multiple folders',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an existing folder',
				action: 'Delete a folder',
			},
			{
				name: 'Delete Multiple',
				value: 'deleteMultiple',
				description: 'Delete multiple Folders',
				action: 'Delete multiple folders',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single folder by unique identifier',
				action: 'Get a folder',
			},
			{
				name: 'List',
				value: 'list',
				description: 'List the folders',
				action: 'List folders',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing folder',
				action: 'Update a folder',
			},
			{
				name: 'Update Multiple',
				value: 'updateMultiple',
				description: 'Update Multiple Folders',
				action: 'Update multiple folders',
			},
		],
		default: 'list',
	},

	...create.description,
	...createMultiple.description,
	...del.description,
	...deleteMultiple.description,
	...get.description,
	...list.description,
	...update.description,
	...updateMultiple.description,
];
