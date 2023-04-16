import type { RelationsProperties } from '../../interfaces';

export const deleteDescription: RelationsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['delete'],
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
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Field Name',
		name: 'field',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['delete'],
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
];
