import type { FilesProperties } from '../../interfaces';

export const deleteMultipleDescription: FilesProperties = [
	{
		displayName: 'Keys (JSON)',
		name: 'keys',
		type: 'json',
		displayOptions: {
			show: {
				operation: ['deleteMultiple'],
				resource: ['files'],
			},
		},
		placeholder: '["b6123925-2fc0-4a30-9d86-863eafc0a6e7", "d17c10aa-0bad-4864-9296-84f522c753e5"]',
		default: null,
		description: "Array of primary keys of the files you'd like to delete",
		required: true,
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];
