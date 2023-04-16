import type { PermissionsProperties } from '../../interfaces';

export const getDescription: PermissionsProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['permissions'],
			},
		},
		placeholder: '34',
		default: '',
		description: 'Primary key of the permission rule',
		required: true,
	},
];
