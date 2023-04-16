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
				resource: ['roles'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new role',
				action: 'Create a role',
			},
			{
				name: 'Create Multiple',
				value: 'createMultiple',
				description: 'Create Multiple Roles',
				action: 'Create multiple roles',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an existing role',
				action: 'Delete a role',
			},
			{
				name: 'Delete Multiple',
				value: 'deleteMultiple',
				description: 'Delete Multiple Roles',
				action: 'Delete multiple roles',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single role by unique identifier',
				action: 'Get a role',
			},
			{
				name: 'List',
				value: 'list',
				description: 'List the roles',
				action: 'List a role',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing role',
				action: 'Update a role',
			},
			{
				name: 'Update Multiple',
				value: 'updateMultiple',
				description: 'Update Multiple Roles',
				action: 'Update multiple roles',
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
