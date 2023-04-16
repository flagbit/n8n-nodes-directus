import * as create from './create';
import * as del from './delete';
import * as update from './update';
import * as get from './get';
import * as list from './list';
import * as listAll from './listAll';

import type { INodeProperties } from 'n8n-workflow';
export { create, del as delete, update, get, list, listAll };

// https://docs.directus.io/reference/relations.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['relations'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new relation',
				action: 'Create a relation',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an existing relation',
				action: 'Delete a relation',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single relation by unique identifier',
				action: 'Get a relation',
			},
			{
				name: 'List',
				value: 'list',
				description: 'Get Relations in a Collection',
				action: 'List collection relations',
			},
			{
				name: 'List All',
				value: 'listAll',
				description: 'List all relations that exist in Directus',
				action: 'List all existing relations',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing relation',
				action: 'Update a relation',
			},
		],
		default: 'list',
	},

	...create.description,
	...del.description,
	...get.description,
	...list.description,
	...listAll.description,
	...update.description,
];
