import type { UsersProperties } from '../../interfaces';

export const acceptUserInviteDescription: UsersProperties = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['acceptUserInvite'],
				resource: ['users'],
			},
		},
		placeholder: 'eyJh...KmUk',
		default: '',
		description: 'Accept invite token',
		required: true,
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				operation: ['acceptUserInvite'],
				resource: ['users'],
			},
		},
		placeholder: 'd1r3ctu5',
		default: '',
		description: 'Password of the user',
		required: true,
	},
];
