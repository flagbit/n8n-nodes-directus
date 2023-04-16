import type { PermissionsProperties } from '../../interfaces';

export const updateDescription: PermissionsProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['permissions'],
			},
		},
		placeholder: '34',
		default: '',
		description: 'Primary key of the permission rule',
		required: true,
	},
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['update'],
				resource: ['permissions'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-placeholder-miscased-id
		placeholder: '{\n	"fields": ["id", "title", "body"]\n}',
		default: null,
		description:
			'A partial [permissions object](https://docs.directus.io/reference/api/system/permissions/#the-permission-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
