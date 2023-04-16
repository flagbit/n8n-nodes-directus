import { globalDescr } from '../../../descriptions';
import type { UsersProperties } from '../../interfaces';

export const createDescription: UsersProperties = [
	...globalDescr.jsonParameters('users', 'create'),
	...globalDescr.bodyParametersJson('users', 'create'),
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: { password: true },
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['users'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'd1r3ctu5',
		default: '',
		description:
			'A partial [user object](https://docs.directus.io/reference/api/system/users/#the-user-object)',
		required: true,
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['users'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'another@example.com',
		default: '',
		description:
			'A partial [user object](https://docs.directus.io/reference/api/system/users/#the-user-object)',
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
				operation: ['create'],
				resource: ['users'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		options: [
			{
				displayName: 'Avatar',
				name: 'avatar',
				type: 'string',
				placeholder: '',
				default: '',
				description:
					'Avatar file. Many-to-one to [files](https://docs.directus.io/reference/api/system/files/).',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'Description of the user',
			},
			{
				displayName: 'First Name',
				name: 'first_name',
				type: 'string',
				placeholder: 'Admin',
				default: '',
				description: 'First name of the user',
			},
			{
				displayName: 'Language',
				name: 'language',
				type: 'string',
				placeholder: 'en-US',
				default: '',
				description: `Language the Admin App is rendered in. See [our Crowdin page ](https://locales.directus.io/)
[(opens new window)](https://locales.directus.io/)
for all available languages and translations.`,
			},
			{
				displayName: 'Last Name',
				name: 'last_name',
				type: 'string',
				placeholder: 'User',
				default: '',
				description: 'Last name of the user',
			},
			{
				displayName: 'Location',
				name: 'location',
				type: 'string',
				placeholder: 'New York City',
				default: '',
				description: 'Location of the user',
			},
			{
				// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
				displayName: 'Role Name',
				name: 'role',
				type: 'options',
				placeholder: '',
				default: '',
				description: 'Role of the User',
				typeOptions: {
					loadOptionsMethod: 'getRoles',
				},
			},
			{
				displayName: 'Tags',
				name: 'tags',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'Tags for the user',
			},
			{
				displayName: 'TFA Secret',
				name: 'tfa_secret',
				type: 'string',
				placeholder: '',
				default: '',
			},
			{
				displayName: 'Theme',
				name: 'theme',
				type: 'options',
				placeholder: 'Select an option',
				default: 'auto',
				description: 'One of auto, light, dark',
				options: [
					{
						name: 'Auto',
						value: 'auto',
					},
					{
						name: 'Dark',
						value: 'dark',
					},
					{
						name: 'Light',
						value: 'light',
					},
				],
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				placeholder: 'CTO',
				default: '',
				description: 'Title of the user',
			},
		],
	},
];
