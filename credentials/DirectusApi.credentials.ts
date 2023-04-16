import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class DirectusApi implements ICredentialType {
	name = 'directusApi';
	displayName = 'Directus Api API';
	documentationUrl = 'directus';

	properties: INodeProperties[] = [
		{
			displayName: 'Directus Instance URL',
			name: 'url',
			type: 'string',
			default: '',
			placeholder:
				'https://my-directus-server or http://directus:8055 (for local docker compose container)',
			description: 'The complete URL of the host with which your Directus instance can be accessed',
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			placeholder: 'fc529da1-cda4-430f-992c-8b40d145fad0',
			description: 'The Static Token of the user',
			required: false,
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{"Bearer "+ $credentials.accessToken}}',
			},
		},
	};
}
