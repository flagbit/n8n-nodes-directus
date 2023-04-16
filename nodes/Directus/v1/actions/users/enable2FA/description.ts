import type { UsersProperties } from '../../interfaces';

export const enable2FADescription: UsersProperties = [
	{
		displayName: 'OTP',
		name: 'otp',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['enable2FA'],
				resource: ['users'],
			},
		},
		placeholder: '3CtiutsNBmY3szHE',
		default: '',
		description: 'OTP generated with the secret, to recheck if the user has a correct TFA setup',
		required: true,
	},
	{
		displayName: 'Secret',
		name: 'secret',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['enable2FA'],
				resource: ['users'],
			},
		},
		placeholder: '123456',
		default: '',
		description: 'The TFA secret from tfa/generate',
		required: true,
	},
];
