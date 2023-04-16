import type { FilesProperties } from '../../interfaces';

export const updateMultipleDescription: FilesProperties = [
	{
		displayName: 'Update Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateMultiple'],
				resource: ['files'],
			},
		},
		placeholder:
			'{\n	"keys": ["b6123925-2fc0-4a30-9d86-863eafc0a6e7", "d17c10aa-0bad-4864-9296-84f522c753e5"],\n	"data": {\n		"tags": ["cities"]\n	}\n}',
		default: null,
		description:
			"Required\n- **`keys`** [Array of primary keys of the files you'd like to update.]\n- **`data`** [Any of [the file object](https://docs.directus.io/reference/api/system/files/#the-file-object)'s properties.]",
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
