import { globalDescr } from '../../../descriptions';
import type { CollectionsProperties } from '../../interfaces';

export const createDescription: CollectionsProperties = [
	{
		displayName: 'Collection',
		name: 'collection',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['collections'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: 'articles',
		default: '',
		description: 'Unique name of the collection',
		required: true,
	},
	...globalDescr.jsonParameters('collections', 'create'),
	...globalDescr.bodyParametersJson('collections', 'create'),

	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['collections'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		options: [
			{
				displayName: 'Archive Field',
				name: 'achiveField',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'What field holds the archive value',
			},
			{
				displayName: 'Archive App Filter',
				name: 'archiveAppFilter',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'What value to use for "archived" items',
			},
			{
				displayName: 'Archive Value',
				name: 'archiveValue',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'What value to use to "unarchive" items',
			},
			{
				displayName: 'Display Template',
				name: 'displayTemplate',
				type: 'string',
				placeholder: '',
				default: '',
				description:
					'Text representation of how items from this collection are shown across the system',
			},
			{
				displayName: 'Fields (JSON)',
				name: 'fields',
				type: 'json',
				placeholder: '',
				default: null,
				description:
					'You are able to provide an array of `fields` to be created during the creation of the collection. See the [fields object](https://docs.directus.io/reference/api/system/fields/#the-fields-object) for more information on what properties are available in a field.',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
			{
				displayName: 'Hidden',
				name: 'hidden',
				type: 'boolean',
				placeholder: 'false',
				default: false,
				description: 'Whether or not the collection is hidden from the navigation in the admin app',
			},
			{
				displayName: 'Icon',
				name: 'icon',
				type: 'string',
				placeholder: 'people',
				default: '',
				description: "Name of a Google Material Design Icon that's assigned to this collection",
			},
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'A note describing the collection',
			},
			{
				displayName: 'Singleton',
				name: 'singleton',
				type: 'boolean',
				placeholder: 'false',
				default: false,
				description: 'Whether or not the collection is treated as a single object',
			},
			{
				displayName: 'Sort Field',
				name: 'sortField',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'The sort field in the collection',
			},
			{
				displayName: 'Translation',
				name: 'translation',
				type: 'string',
				placeholder: '',
				default: '',
				description:
					"Key value pairs of how to show this collection's name in different languages in the admin app",
			},
			{
				displayName: 'Unarchive Value',
				name: 'unarchiveValue',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'Whether or not to show the "archived" filter',
			},
		],
	},
];
