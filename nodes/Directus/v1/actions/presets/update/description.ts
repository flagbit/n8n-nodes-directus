import type { PresetsProperties } from '../../interfaces';

export const updateDescription: PresetsProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['presets'],
			},
		},
		placeholder: '39',
		default: '',
		description: 'Primary key of the preset',
		required: true,
	},
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['presets'],
			},
		},
		placeholder: '{\n	"layout": "tabular"\n}',
		default: null,
		description:
			'A partial [preset object](https://docs.directus.io/reference/api/system/presets/#the-preset-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
