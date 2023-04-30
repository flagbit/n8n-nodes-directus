import { globalDescr, options } from '../../../descriptions';
import type { ItemsProperties } from '../../interfaces';

export const upsertDescription: ItemsProperties = [
	...globalDescr.returnAll('items', 'upsert'),
	...globalDescr.limit('items', 'upsert'),
	{
		displayName: 'Skip Update',
		name: 'skipUpdate',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['upsert'],
				resource: ['items'],
			},
		},
		default: false,
		description: 'Whether to skip the update step if item(s) is/are available',
		required: true,
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['upsert'],
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
				operation: ['upsert'],
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

	{
		displayName: 'Select items to create or update',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				operation: ['upsert'],
				resource: ['items'],
			},
		},
		options: [...options.Filter()],
	},
];
