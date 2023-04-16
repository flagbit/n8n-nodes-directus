import type { PresetsProperties } from '../../interfaces';

export const getDescription: PresetsProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['presets'],
			},
		},
		placeholder: '39',
		default: '',
		description: 'Primary key of the preset',
		required: true,
	},
];
