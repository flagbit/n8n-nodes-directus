import type { FieldsProperties } from '../../interfaces';

export const getDescription: FieldsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Field Name',
		name: 'field',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['fields'],
			},
		},
		placeholder: '',
		default: '',
		description: 'Unique name of the field. Field name is unique within the collection.',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getFieldsInCollection',
		},
	},
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['fields'],
			},
		},
		placeholder: 'articles',
		default: '',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCollections',
		},
	},
];
