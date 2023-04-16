import type { FoldersProperties } from '../../interfaces';

export const createMultipleDescription: FoldersProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createMultiple'],
				resource: ['folders'],
			},
		},
		placeholder:
			'[\n	{\n		"name": "Nature",\n                 "parent":"0fca80c4-d61c-4404-9fd7-6ba86b64154d"\n	},\n	{\n		"name": "Cities"\n	}\n]',
		default: null,
		description:
			'An array of partial [folder objects](https://docs.directus.io/reference/api/system/folders/#the-folder-object). `name` is required.',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
