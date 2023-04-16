import type { RolesProperties } from '../../interfaces';

export const createDescription: RolesProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['roles'],
			},
		},
		placeholder:
			'{\n	"name": "Interns",\n	"icon": "verified_user",\n	"description": null,\n	"admin_access": false,\n	"app_access": true\n}',
		default: null,
		description:
			'A partial [role object](https://docs.directus.io/reference/api/system/roles/#the-role-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
