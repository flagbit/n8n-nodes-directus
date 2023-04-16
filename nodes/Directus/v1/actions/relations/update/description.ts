import type { RelationsProperties } from '../../interfaces';

export const updateDescription: RelationsProperties = [
	{
		displayName: 'Field Name',
		name: 'field',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['relations'],
			},
		},
		placeholder: 'author',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
		description:
			'Name of the field that holds the related primary key. This matches the column name in the database.',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getRelationalFields',
			loadOptionsDependsOn: ['collection'],
		},
	},
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['relations'],
			},
		},
		placeholder: '{\n	"meta": {\n		"one_field": "articles"\n	}\n}',
		default: null,
		description:
			'A partial [relation object](https://docs.directus.io/reference/relations/#the-relation-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['relations'],
			},
		},
		placeholder: 'books',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
		description: 'Unique name of the parent collection',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCollections',
		},
	},
];
