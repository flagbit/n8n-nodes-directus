import type { RolesProperties } from '../../interfaces';

export const deleteMultipleDescription: RolesProperties = [
	{
		displayName: 'Keys (JSON)',
		name: 'keys',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['deleteMultiple'],
				resource: ['roles'],
			},
		},
		placeholder: '["653925a9-970e-487a-bfc0-ab6c96affcdc", "c86c2761-65d3-43c3-897f-6f74ad6a5bd7"]',
		default: null,
		description: 'An array of role primary keys',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
