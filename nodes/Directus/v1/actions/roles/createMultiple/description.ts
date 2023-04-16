import type { RolesProperties } from '../../interfaces';

export const createMultipleDescription: RolesProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['createMultiple'],
				resource: ['roles'],
			},
		},
		placeholder:
			'[\n	{\n		"name": "Interns",\n		"icon": "verified_user",\n		"description": null,\n		"admin_access": false,\n		"app_access": true\n	},\n	{\n		"name": "Customers",\n		"icon": "person",\n		"description": null,\n		"admin_access": false,\n		"app_access": false\n	}\n]',
		default: null,
		description:
			'An array of partial [role objects](https://docs.directus.io/reference/api/system/roles/#the-role-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
