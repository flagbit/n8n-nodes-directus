import * as get from './get';
import type { INodeProperties } from 'n8n-workflow';
export { get };

// https://docs.directus.io/reference/items.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['assets'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Image typed files can be dynamically resized and transformed to fit any need',
				action: 'Get an asset',
			},
		],
		default: 'get',
	},

	...get.description,
];
