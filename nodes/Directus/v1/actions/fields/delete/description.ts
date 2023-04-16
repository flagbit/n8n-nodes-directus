import type { FieldsProperties } from '../../interfaces';

export const deleteDescription: FieldsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Field Name',
		name: 'field',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['fields'],
			},
		},
		placeholder: '',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
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
				operation: ['delete'],
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
