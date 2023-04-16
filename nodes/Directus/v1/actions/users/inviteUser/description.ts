import type { UsersProperties } from '../../interfaces';

export const inviteUserDescription: UsersProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['inviteUser'],
				resource: ['users'],
			},
		},
		placeholder: 'another@example.com',
		default: '',
		description: 'User email to invite',
		required: true,
	},
	{
		displayName: 'Role',
		name: 'role',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['inviteUser'],
				resource: ['users'],
			},
		},
		placeholder: 'c86c2761-65d3-43c3-897f-6f74ad6a5bd7',
		default: '',
		description: 'Role of the new user',
		required: true,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['inviteUser'],
				resource: ['users'],
			},
		},
		options: [
			{
				displayName: 'Invite URL',
				name: 'inviteUrl',
				type: 'string',
				placeholder: '',
				default: '',
				description:
					'Provide a custom invite url which the link in the email will lead to. The invite token will be passed as a parameter. Note: You need to configure the [`USER_INVITE_URL_ALLOW_LIST` environment variable](https://docs.directus.io/reference/environment-variables/#security) to enable this feature.',
			},
		],
	},
];
