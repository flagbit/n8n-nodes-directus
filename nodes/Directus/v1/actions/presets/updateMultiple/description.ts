import type { PresetsProperties } from '../../interfaces';

export const updateMultipleDescription: PresetsProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateMultiple'],
				resource: ['presets'],
			},
		},
		placeholder: '{\n	"keys": [15, 64],\n	"data": {\n		"layout": "tabular"\n	}\n}',
		default: null,
		description:
			"Required:\n- keys [Array of primary keys of the presets you'd like to update.]\n- data [Any of [the preset object](https://docs.directus.io/reference/api/system/presets/#the-preset-object)'s properties.]",
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
