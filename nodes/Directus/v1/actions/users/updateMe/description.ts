import type { UsersProperties } from '../../interfaces';

export const updateMeDescription: UsersProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateMe'],
				resource: ['users'],
			},
		},
		placeholder: '{\n	"title": "CTO"\n}',
		default: null,
		description: 'Update the currently authenticated user',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
