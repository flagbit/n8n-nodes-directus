import type { PresetsProperties } from '../../interfaces';

export const deleteDescription: PresetsProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['presets'],
			},
		},
		placeholder: '39',
		default: '',
		description: 'Primary key of the preset',
		required: true,
	},
];
