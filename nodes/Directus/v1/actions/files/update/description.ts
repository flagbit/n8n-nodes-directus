import type { FilesProperties } from '../../interfaces';

export const updateDescription: FilesProperties = [
	{
		displayName: 'Send Binary Data',
		name: 'sendBinaryData',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['files'],
			},
		},
		placeholder: '',
		default: false,
		description: 'Whether to upload/create a new file',
		required: true,
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['files'],
			},
		},
		placeholder: '0fca80c4-d61c-4404-9fd7-6ba86b64154d',
		default: '',
		description: 'Unique ID of the file object',
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
				operation: ['update'],
				resource: ['files'],
			},
		},
		description:
			'Name of the binary property which contains the data for the file to be uploaded.For multiple files, values can be provided in the format: `binaryProperty1,binaryProperty2`',
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
					'Other properties of [the file object](https://https://docs.directus.io/reference/files.html#the-file-object)',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
		],
	},
];
