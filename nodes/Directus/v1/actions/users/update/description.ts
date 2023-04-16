import type { UsersProperties } from '../../interfaces';

export const updateDescription: UsersProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['users'],
			},
		},
		placeholder: '72a1ce24-4748-47de-a05f-ce9af3033727',
		default: '',
		description: 'Primary key of the user',
		required: true,
	},
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['users'],
			},
		},
		placeholder: '{\n	"title": "CTO"\n}',
		default: null,
		description:
			'A partial [user object](https://docs.directus.io/reference/api/system/users/#the-user-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
