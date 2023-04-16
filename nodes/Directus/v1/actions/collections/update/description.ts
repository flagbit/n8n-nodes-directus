import type { CollectionsProperties } from '../../interfaces';

export const updateDescription: CollectionsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['collections'],
			},
		},
		placeholder: 'articles',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
		description: 'Unique name of the collection',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCollections',
		},
	},
	{
		displayName: 'Update Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['collections'],
			},
		},
		options: [
			{
				displayName: 'Meta (JSON)',
				name: 'meta',
				type: 'json',
				placeholder: '{\n	"note": "Short quotes from happy customers."\n}',
				default: null,
				description: 'Metadata of the collection',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
		],
	},
];
