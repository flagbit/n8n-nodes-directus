import type { FilesProperties } from '../../interfaces';

export const createDescription: FilesProperties = [
	{
		displayName: 'Send Binary Data',
		name: 'sendBinaryData',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['files'],
			},
		},
		placeholder: '',
		default: false,
		description: 'Whether to upload/create a new file',
		required: true,
	},
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		required: true,
		default: 'data',
		displayOptions: {
			show: {
				sendBinaryData: [true],
				operation: ['create'],
				resource: ['files'],
			},
		},
		description:
			'Name of the binary property which contains the data for the file to be uploaded.For multiple files, values can be provided in the format:"binaryProperty1,binaryProperty2"',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['files'],
			},
		},
		options: [
			{
				displayName: 'File Object (JSON)',
				name: 'data',
				type: 'json',
				placeholder: '',
				default: null,
				description:
					'Other properties of [the file object](https://docs.directus.io/reference/files/#the-file-object)',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
		],
	},
];
