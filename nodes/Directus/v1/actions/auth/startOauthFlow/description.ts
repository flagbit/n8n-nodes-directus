import type { AuthProperties } from '../../interfaces';

export const startOauthFlowDescription: AuthProperties = [
	{
		displayName: 'Provider',
		name: 'provider',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['startOauthFlow'],
				resource: ['auth'],
			},
		},
		placeholder: '',
		default: '',
		description: 'Key of the activated OAuth provider',
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
				operation: ['startOauthFlow'],
				resource: ['auth'],
			},
		},
		options: [
			{
				displayName: 'Redirect',
				name: 'redirect',
				type: 'string',
				placeholder: '',
				default: '',
				description:
					'Where to redirect on successful login.If set the authentication details are set inside cookies otherwise a JSON is returned',
			},
		],
	},
];
