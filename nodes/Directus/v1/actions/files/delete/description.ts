import type { FilesProperties } from '../../interfaces';

export const deleteDescription: FilesProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['delete'],
				resource: ['files'],
			},
		},
		placeholder: '0fca80c4-d61c-4404-9fd7-6ba86b64154d',
		default: '',
		description: 'Unique ID of the file object',
		required: true,
	},
];
