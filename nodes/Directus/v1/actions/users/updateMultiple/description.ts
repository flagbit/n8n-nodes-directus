import type { UsersProperties } from '../../interfaces';

export const updateMultipleDescription: UsersProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateMultiple'],
				resource: ['users'],
			},
		},
		placeholder:
			'{\n	"keys": ["72a1ce24-4748-47de-a05f-ce9af3033727", "9c3d75a8-7a5f-41a4-be0a-1488fd974511"],\n	"data": {\n		"title": "CTO"\n	}\n}',
		default: null,
		description:
			"Required:\n- **`keys`** [Array of primary keys of the users you'd like to update.]\n- **`data`** [Any of [the user object](https://docs.directus.io/reference/api/system/users/#the-user-object)'s properties.]",
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
