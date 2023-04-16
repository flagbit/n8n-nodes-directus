import type { PresetsProperties } from '../../interfaces';

export const createDescription: PresetsProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['presets'],
			},
		},
		placeholder:
			'{\n	"user": "410b5772-e63f-4ae6-9ea2-39c3a31bd6ca",\n	"layout": "cards",\n	"search": "Directus"\n}',
		default: null,
		description:
			'A partial [preset object](https://docs.directus.io/reference/api/system/presets/#the-preset-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
