import * as list from './list';
import * as create from './create';
import * as del from './delete';
import * as get from './get';
import * as update from './update';

import type { INodeProperties } from 'n8n-workflow';
export { list, create, del as delete, get, update };

// https://docs.directus.io/reference/system/collections.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['collections'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new collection in Directus',
				action: 'Create a collection',
			},
			{
				name: 'Delete',
				value: 'delete',
				description:
					'Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.',
				action: 'Delete a collection',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieves the details of a single collection',
				action: 'Get a collection',
			},
			{
				name: 'List',
				value: 'list',
				description: 'Returns a list of the collections available in the project',
				action: 'List collections',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing collection',
				action: 'Update a collection',
			},
		],
		default: 'list',
	},

	...list.description,
	...create.description,
	...del.description,
	...get.description,
	...update.description,
];
