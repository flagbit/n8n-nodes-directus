import type { PermissionsProperties } from '../../interfaces';

export const deleteDescription: PermissionsProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['permissions'],
			},
		},
		placeholder: '34',
		default: '',
		description: 'Primary key of the permission rule',
		required: true,
	},
];
