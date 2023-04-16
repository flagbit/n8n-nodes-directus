import * as list from './list';
import type { INodeProperties } from 'n8n-workflow';

export { list };

// https://docs.directus.io/reference/system/extensions.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['extensions'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description:
					'List the available extensions in the project. The types of extensions that you can list are interfaces, displays, layouts, modules.',
				action: 'List extensions',
			},
		],
		default: 'list',
	},

	...list.description,
];
