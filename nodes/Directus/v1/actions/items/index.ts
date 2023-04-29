import * as create from './create';
import * as createMultiple from './createMultiple';
import * as del from './delete';
import * as deleteMultiple from './deleteMultiple';
import * as update from './update';
import * as updateMultiple from './updateMultiple';
import * as upsert from './upsert';
import * as get from './get';
import * as list from './list';

import type { INodeProperties } from 'n8n-workflow';

export {
	create,
	createMultiple,
	del as delete,
	deleteMultiple,
	update,
	updateMultiple,
	upsert,
	get,
	list,
};

// https://docs.directus.io/reference/items.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['items'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new item',
				action: 'Create an item',
			},
			{
				name: 'Create Multiple',
				value: 'createMultiple',
				description: 'Create multiple items',
				action: 'Create multiple items',
			},
			{
				name: 'Create or Update',
				value: 'upsert',
				description: 'Create a new record, or update the current one if it already exists (upsert)',
				action: 'Create or Update an item',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an existing item',
				action: 'Delete an item',
			},
			{
				name: 'Delete Multiple',
				value: 'deleteMultiple',
				description: 'Delete multiple items',
				action: 'Delete multiple items',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single item by unique identifier',
				action: 'Get an item',
			},
			{
				name: 'List',
				value: 'list',
				description: 'List the items',
				action: 'List items',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing item',
				action: 'Update an item',
			},
			{
				name: 'Update Multiple',
				value: 'updateMultiple',
				description: 'Update multiple items',
				action: 'Update multiple items',
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
	...upsert.description,
];
