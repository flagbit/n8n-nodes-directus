import type { RolesProperties } from '../../interfaces';

export const getDescription: RolesProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['roles'],
			},
		},
		placeholder: 'c86c2761-65d3-43c3-897f-6f74ad6a5bd7',
		default: '',
		description: 'Primary key of the role',
		required: true,
	},
];
