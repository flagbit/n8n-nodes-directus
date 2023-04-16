import type { INodeProperties } from 'n8n-workflow';
import * as get from './get';
import * as update from './update';

export { get, update };

// https://docs.directus.io/reference/settings.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['settings'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve Settings',
				action: 'Get a setting',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update the settings',
				action: 'Update a setting',
			},
		],
		default: 'get',
	},

	...get.description,
	...update.description,
];
