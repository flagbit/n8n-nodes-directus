import type { RelationsProperties } from '../../interfaces';

export const createDescription: RelationsProperties = [
	{
		displayName: 'Data (JSON)',
		name: 'data',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['relations'],
			},
		},
		placeholder:
			'{\n	"collection": "articles",\n	"field": "featured_image",\n	"related_collection": "directus_files"\n}',
		default: null,
		description:
			'A partial [relation object](https://docs.directus.io/reference/api/system/relations/#the-relation-object)',
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
