import type { INodeProperties } from 'n8n-workflow';
import * as get from './get';
import * as list from './list';

export { get, list };

// https://docs.directus.io/reference/revisions.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['revisions'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single revision by unique identifier',
				action: 'Get a revision',
			},
			{
				name: 'List',
				value: 'list',
				description: 'List the revisions',
				action: 'List a revision',
			},
		],
		default: 'list',
	},

	...get.description,
	...list.description,
];
