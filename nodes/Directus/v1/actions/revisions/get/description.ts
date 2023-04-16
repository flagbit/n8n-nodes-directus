import type { RevisionsProperties } from '../../interfaces';

export const getDescription: RevisionsProperties = [
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['revisions'],
			},
		},
		placeholder: '368',
		default: '',
		description: 'Primary key of the revision',
		required: true,
	},
];
