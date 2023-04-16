import type { RolesProperties } from '../../interfaces';

export const updateMultipleDescription: RolesProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['updateMultiple'],
				resource: ['roles'],
			},
		},
		placeholder:
			'{\n	"keys": ["c86c2761-65d3-43c3-897f-6f74ad6a5bd7", "6fc3d5d3-a37b-4da8-a2f4-ed62ad5abe03"],\n	"data": {\n		"icon": "attractions"\n	}\n}',
		default: null,
		description:
			"Required: \n- **`keys`** [Array of primary keys of the roles you'd like to update.] \n- **`data`** [Any of [the role object](https://docs.directus.io/reference/api/system/roles/#the-role-object)'s properties.]",
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
