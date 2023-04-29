import { globalDescr } from '../../../descriptions';
import type { AssetsProperties } from '../../interfaces';

export const getDescription: AssetsProperties = [
	...globalDescr.jsonParameters('assets', 'get'),
	...globalDescr.queryParametersJson('assets', 'get'),
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['assets'],
			},
		},
		placeholder: '',
		default: '',
		description: 'The ID of the file',
		required: true,
	},
	{
		displayName: 'Include File Data',
		name: 'includeFileData',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['assets'],
			},
		},
		placeholder: '',
		default: false,
		description: 'Whether corresponding file data should also be included along with the asset',
		required: true,
	},
	{
		displayName: 'Binary Property',
		name: 'binaryPropertyName',
		type: 'string',
		required: true,
		default: 'data',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['get'],
			},
		},
		description:
			'Name of the binary property which contains the data for the file to be uploaded. For Form-Data Multipart, multiple can be provided in the format: `sendKey1:binaryProperty1,sendKey2:binaryProperty2`.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['get'],
				resource: ['assets'],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		options: [
			{
				displayName: 'Fit',
				name: 'fit',
				type: 'options',
				placeholder: 'Select an option',
				default: 'contain',
				description: 'The fit of the thumbnail while always preserving the aspect ratio',
				options: [
					{
						name: 'Contain',
						value: 'contain',
						description: "Contain within both width/height using 'letterboxing' as needed",
					},
					{
						name: 'Cover',
						value: 'cover',
						description: 'Covers both width/height by cropping/clipping to fit',
					},
					{
						name: 'Inside',
						value: 'inside',
						description:
							'Resize to be as large as possible, ensuring dimensions are less than or equal to the requested width and height',
					},
					{
						name: 'Outside',
						value: 'outside',
						description:
							'Resize to be as small as possible, ensuring dimensions are greater than or equal to the requested width and height',
					},
				],
			},
			{
				displayName: 'Format',
				name: 'format',
				type: 'options',
				placeholder: 'Select an option',
				default: 'jpg',
				description: 'What file format to return the thumbnail in',
				options: [
					{
						name: 'JPG',
						value: 'jpg',
					},
					{
						name: 'PNG',
						value: 'png',
					},
					{
						name: 'TIFF',
						value: 'tiff',
					},
					{
						name: 'WEBP',
						value: 'webp',
					},
				],
			},
			{
				displayName: 'Height',
				name: 'height',
				type: 'number',
				placeholder: '',
				default: null,
				description: 'The height of the thumbnail in pixels',
				typeOptions: {
					minValue: 1,
				},
			},
			{
				displayName: 'Key',
				name: 'key',
				type: 'string',
				placeholder: '',
				default: '',
				description: 'The key of the asset size configured in settings',
			},
			{
				displayName: 'Quality',
				name: 'quality',
				type: 'number',
				placeholder: '',
				default: 50,
				description: 'The quality of the thumbnail (1 to 100)',
				typeOptions: {
					maxValue: 100,
					minValue: 1,
				},
			},
			{
				displayName: 'Transforms (JSON)',
				name: 'transforms',
				type: 'json',
				placeholder: '',
				default: null,
				description: 'A JSON array of image transformations',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
			{
				displayName: 'Width',
				name: 'width',
				type: 'number',
				placeholder: '',
				default: null,
				description: 'The width of the thumbnail in pixels',
				typeOptions: {
					minValue: 1,
				},
			},
			{
				displayName: 'Without Enlargement',
				name: 'withoutEnlargement',
				type: 'boolean',
				placeholder: '',
				default: false,
				description: 'Whether to disable image up-scaling',
			},
		],
	},
];
