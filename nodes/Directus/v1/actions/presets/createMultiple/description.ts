import type { PresetsProperties } from '../../interfaces';

export const createMultipleDescription: PresetsProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createMultiple'],
				resource: ['presets'],
			},
		},
		placeholder:
			'[\n	{\n		"collection": "directus_files",\n		"user": "410b5772-e63f-4ae6-9ea2-39c3a31bd6ca",\n		"layout": "cards",\n		"search": "Directus"\n	},\n	{\n		"collection": "articles",\n		"user": "410b5772-e63f-4ae6-9ea2-39c3a31bd6ca",\n		"layout": "tabular"\n	}\n]',
		default: null,
		description:
			'An array of partial [preset objects](https://docs.directus.io/reference/api/system/presets/#the-preset-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
