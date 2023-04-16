import type { AuthProperties } from '../../interfaces';

export const requestResetDescription: AuthProperties = [
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['requestReset'],
				resource: ['auth'],
			},
		},
		placeholder: 'admin@example.com',
		default: '',
		description: "Email address of the user you're requesting a reset for",
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
				operation: ['requestReset'],
				resource: ['auth'],
			},
		},
		options: [
			{
				displayName: 'Reset URL',
				name: 'resetUrl',
				type: 'string',
				placeholder: '',
				default: '',
				description:
					'Provide a custom reset url which the link in the email will lead to. The reset token will be passed as a parameter. Note: You need to configure the [`PASSWORD_RESET_URL_ALLOW_LIST` environment variable](https://docs.directus.io/reference/environment-variables/#security) to enable this feature.',
			},
		],
	},
];
