import type { AuthProperties } from '../../interfaces';

export const refreshTokenDescription: AuthProperties = [
	{
		displayName: 'Refresh Token',
		name: 'refreshToken',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['refreshToken'],
				resource: ['auth'],
			},
		},
		placeholder: 'eyJ0eXAiOiJKV...',
		default: '',
		description: "JWT access token you want to refresh. This token can't be expired.",
		required: true,
	},
];
