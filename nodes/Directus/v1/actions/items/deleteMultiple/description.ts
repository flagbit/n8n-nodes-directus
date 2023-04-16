import type { ItemsProperties } from '../../interfaces';

export const deleteMultipleDescription: ItemsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['deleteMultiple'],
				resource: ['items'],
			},
		},
		placeholder: 'articles',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
		description: 'Unique name of the parent collection',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCustomCollections',
		},
	},
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['deleteMultiple'],
				resource: ['items'],
			},
		},
		placeholder: '[15, 16, 21]',
		default: null,
		description: 'An array of item primary keys',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
