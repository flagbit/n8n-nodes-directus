import type { UtilsProperties } from '../../interfaces';

export const importFileDataDescription: UtilsProperties = [
	{
		// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
		displayName: 'Collection Name',
		name: 'collection',
		type: 'options',
		displayOptions: {
			show: {
				operation: ['importFileData'],
				resource: ['utils'],
			},
		},
		placeholder: 'articles',
		default: '',
		// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
		description: 'Unique name of the collection to import the data to',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCollections',
		},
	},
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['importFileData'],
				resource: ['utils'],
			},
		},
		placeholder: '',
		default: '\n',
		description: 'Name of the Binary Property the file is in',
		required: true,
	},
];
