import type { ItemsProperties } from '../../interfaces';

export const createDescription: ItemsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['create'],
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
				operation: ['create'],
				resource: ['items'],
			},
		},
		placeholder: '{\n	"title": "Hello world!",\n	"body": "This is our first article"\n}',
		default: null,
		description:
			'The partial [item object](https://docs.directus.io/reference/items.html#create-an-item)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
