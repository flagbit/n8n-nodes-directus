import type { UsersProperties } from '../../interfaces';

export const generate2FADescription: UsersProperties = [
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				operation: ['generate2FA'],
				resource: ['users'],
			},
		},
		placeholder: 'd1r3ctu5',
		default: '',
		description: "The user's password of the currently authenticated user",
		required: true,
	},
];
