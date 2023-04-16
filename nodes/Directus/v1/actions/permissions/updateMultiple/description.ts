import type { PermissionsProperties } from '../../interfaces';

export const updateMultipleDescription: PermissionsProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateMultiple'],
				resource: ['permissions'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-placeholder-miscased-id
		placeholder: '{\n	"keys": [34, 65],\n	"data": {\n		"fields": ["id", "title", "body"]\n	}\n}',
		default: null,
		description: `Required:
- keys [Array of primary keys of the permissions you\'d like to update.]
- data [Any of [the permission object](https://docs.directus.io/reference/api/system/permissions/#the-permission-object)\'s properties.]`,
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
