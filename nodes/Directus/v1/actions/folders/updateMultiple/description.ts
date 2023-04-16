import type { FoldersProperties } from '../../interfaces';

export const updateMultipleDescription: FoldersProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateMultiple'],
				resource: ['folders'],
			},
		},
		placeholder: '{\n	"data": {\n		"parent": "d97c2e0e-293d-4eb5-9e1c-27d3460ad29d"\n	}\n}',
		default: null,
		description:
			"Any of [the folder object](https://docs.directus.io/reference/api/system/folders/#the-folder-object)'s properties",
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
