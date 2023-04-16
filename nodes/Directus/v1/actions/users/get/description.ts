import type { UsersProperties } from '../../interfaces';

export const getDescription: UsersProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['users'],
			},
		},
		placeholder: '72a1ce24-4748-47de-a05f-ce9af3033727',
		default: '',
		description: 'Primary key of the user',
		required: true,
	},
];
