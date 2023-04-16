import { globalDescr } from '../../../descriptions';
import type { AuthProperties } from '../../interfaces';

export const resetPasswordDescription: AuthProperties = [
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['resetPassword'],
				resource: ['auth'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'eyJ0eXAiOiJKV1Qi...',
		default: '',
		description: 'One-time use JWT token that is used to verify the user',
		required: true,
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				operation: ['resetPassword'],
				resource: ['auth'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'password',
		default: '',
		description: 'New password for the user',
		required: true,
	},
	...globalDescr.jsonParameters('auth', 'resetPassword'),
	...globalDescr.bodyParametersJson('auth', 'resetPasswords'),
];
