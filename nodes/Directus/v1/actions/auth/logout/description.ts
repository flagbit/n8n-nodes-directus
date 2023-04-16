import type { AuthProperties } from '../../interfaces';

export const logoutDescription: AuthProperties = [
	{
		displayName: 'Refresh Token',
		name: 'refreshToken',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['logout'],
				resource: ['auth'],
			},
		},
		placeholder: 'eyJ0eXAiOiJKV...',
		default: '',
		description: 'JWT access token you want to logout',
		required: true,
	},
];
