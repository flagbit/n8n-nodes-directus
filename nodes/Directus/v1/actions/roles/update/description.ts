import type { RolesProperties } from '../../interfaces';

export const updateDescription: RolesProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['roles'],
			},
		},
		placeholder: '{\n	"icon": "attractions"\n}',
		default: null,
		description:
			'A partial [role object](https://docs.directus.io/reference/api/system/roles/#the-role-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['roles'],
			},
		},
		placeholder: 'c86c2761-65d3-43c3-897f-6f74ad6a5bd7',
		default: '',
		description: 'Primary key of the role',
		required: true,
	},
];
