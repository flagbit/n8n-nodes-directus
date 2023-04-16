import type { PermissionsProperties } from '../../interfaces';

export const deleteMultipleDescription: PermissionsProperties = [
	{
		displayName: 'Keys (JSON)',
		name: 'keys',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['deleteMultiple'],
				resource: ['permissions'],
			},
		},
		placeholder: '[34, 64]',
		default: null,
		description: 'An array of permission primary keys',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
