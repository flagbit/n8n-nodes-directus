import type { PresetsProperties } from '../../interfaces';

export const deleteMultipleDescription: PresetsProperties = [
	{
		displayName: 'Keys (JSON)',
		name: 'keys',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['deleteMultiple'],
				resource: ['presets'],
			},
		},
		placeholder: '[15, 251, 810]',
		default: null,
		description: 'An array of preset primary keys',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
