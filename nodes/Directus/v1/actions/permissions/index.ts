import * as create from './create';
import * as createMultiple from './createMultiple';
import * as del from './delete';
import * as deleteMultiple from './deleteMultiple';
import * as update from './update';
import * as updateMultiple from './updateMultiple';
import * as get from './get';
import * as list from './list';

import type { INodeProperties } from 'n8n-workflow';
export { create, createMultiple, del as delete, deleteMultiple, update, updateMultiple, get, list };

// https://docs.directus.io/reference/items.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['permissions'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new permission',
				action: 'Create a permission',
			},
			{
				name: 'Create Multiple',
				value: 'createMultiple',
				description: 'Create Multiple Permission Rules',
				action: 'Create multiple permissions',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an existing permission',
				action: 'Delete a permission',
			},
			{
				name: 'Delete Multiple',
				value: 'deleteMultiple',
				description: 'Delete Multiple Permissions',
				action: 'Delete multiple permissions',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single permissions object by unique identifier',
				action: 'Get a permission',
			},
			{
				name: 'List',
				value: 'list',
				description: 'List all permissions',
				action: 'List all permissions',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing permission',
				action: 'Update a permission',
			},
			{
				name: 'Update Multiple',
				value: 'updateMultiple',
				description: 'Update multiple Permissions',
				action: 'Update multiple permissions',
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
