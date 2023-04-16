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

// https://docs.directus.io/reference/webhooks.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhooks'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new webhook',
				action: 'Create a new webhook',
			},
			{
				name: 'Create Multiple',
				value: 'createMultiple',
				description: 'Create Multiple Webhooks',
				action: 'Create multiple webhooks',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an existing webhook',
				action: 'Delete an existing webhook',
			},
			{
				name: 'Delete Multiple',
				value: 'deleteMultiple',
				description: 'Delete Multiple Webhooks',
				action: 'Delete multiple webhooks',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single webhook by unique identifier',
				action: 'Retrieve a single webhook by unique identifier',
			},
			{
				name: 'List',
				value: 'list',
				description: 'Get all webhooks',
				action: 'Get all webhooks',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing webhook',
				action: 'Update an existing webhook',
			},
			{
				name: 'Update Multiple',
				value: 'updateMultiple',
				description: 'Update Multiple Webhooks',
				action: 'Update Multiple Webhooks',
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
