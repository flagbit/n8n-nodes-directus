import type { UsersProperties } from '../../interfaces';

export const createMultipleDescription: UsersProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createMultiple'],
				resource: ['users'],
			},
		},
		placeholder:
			'[\n	{\n		"email": "admin@example.com",\n		"password": "p455w0rd",\n		"role": "c86c2761-65d3-43c3-897f-6f74ad6a5bd7"\n	},\n	{\n		"email": "another@example.com",\n		"password": "d1r3ctu5",\n		"role": "c86c2761-65d3-43c3-897f-6f74ad6a5bd7"\n	}\n]',
		default: null,
		description:
			'An array of partial [user objects](https://docs.directus.io/reference/api/system/users/#the-user-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
