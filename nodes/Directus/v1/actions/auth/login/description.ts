import { globalDescr } from '../../../descriptions';
import type { AuthProperties } from '../../interfaces';

export const loginDescription: AuthProperties = [
	...globalDescr.jsonParameters('auth', 'login'),
	...globalDescr.bodyParametersJson('auth', 'login'),
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				operation: ['login'],
				resource: ['auth'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'password',
		default: '',
		description: 'Password of the user',
		required: true,
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['login'],
				resource: ['auth'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'admin@example.com',
		default: '',
		description: "Email address of the user you're retrieving the access token for",
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
				operation: ['login'],
				resource: ['auth'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		options: [
			{
				displayName: 'Mode',
				name: 'mode',
				type: 'options',
				placeholder: 'Select an option',
				default: 'cookie',
				description: 'Choose between retrieving the token as a string, or setting it as a cookie',
				options: [
					{
						name: 'Cookie',
						value: 'cookie',
					},
					{
						name: 'JSON',
						value: 'json',
					},
				],
			},
			{
				displayName: 'OTP',
				name: 'otp',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'If 2FA is enabled, you need to pass the one time password',
			},
		],
	},
];
