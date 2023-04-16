import type { UtilsProperties } from '../../interfaces';

export const sortItemsDescription: UtilsProperties = [
	{
		displayName: 'To',
		name: 'to',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['sortItems'],
				resource: ['utils'],
			},
		},
		placeholder: '51',
		default: null,
		description: 'Primary key of item where to move the current item to',
		required: true,
	},
	{
		displayName: 'Item',
		name: 'item',
		type: 'number',
		displayOptions: {
			show: {
				operation: ['sortItems'],
				resource: ['utils'],
			},
		},
		placeholder: '16',
		default: null,
		description: 'Primary key of item to move',
		required: true,
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['sortItems'],
				resource: ['utils'],
			},
		},
		placeholder: 'author',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
		description: 'Collection identifier',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCollections',
		},
	},
];
