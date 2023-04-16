import type { FilesProperties } from '../../interfaces';

export const importDescription: FilesProperties = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['import'],
				resource: ['files'],
			},
		},
		placeholder: '',
		default: '',
		description: 'The URL to download the file from',
		required: true,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['import'],
				resource: ['files'],
			},
		},
		options: [
			{
				displayName: 'File Object (JSON)',
				name: 'data',
				type: 'json',
				placeholder: '{\n	"title": "Example"\n}',
				default: null,
				description:
					"Any of [the file object](https://docs.directus.io/reference/api/system/files/#the-file-object)'s properties",
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
		],
	},
];
