import type { INodeProperties } from 'n8n-workflow';
import {
	Aggregate,
	BinaryPropertyName,
	Deep,
	Export,
	ExportFileName,
	Fields,
	Filter,
	GroupBy,
	Meta,
	Offset,
	Search,
	Sort,
} from './options';

export const splitIntoItems = (resource: string, operation: string): INodeProperties[] => [
	{
		displayName: 'Split Into Items',
		name: 'splitIntoItems',
		type: 'boolean',
		default: false,
		description: 'Whether to qutput each element of an array as own item',
		required: true,
		displayOptions: {
			show: {
				operation: [operation],
				resource: [resource],
			},
		},
	},
];

export const bodyParametersJson = (resource: string, operation: string): INodeProperties[] => [
	{
		displayName: 'Body Parameters',
		name: 'bodyParametersJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: [operation],
				resource: [resource],
				jsonParameters: [true],
			},
		},
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		default: '',
		description: 'Body parameters as JSON or RAW',
	},
];

export const jsonParameters = (resource: string, operation: string): INodeProperties[] => [
	{
		displayName: 'JSON/RAW Parameters',
		name: 'jsonParameters',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [operation],
				resource: [resource],
			},
		},
		placeholder: '',
		default: false,
		description:
			'Whether the query and/or body parameter should be set via the value-key pair UI or JSON/RAW',
		required: true,
	},
];

export const queryParametersJson = (resource: string, operation: string): INodeProperties[] => [
	{
		displayName: 'Query Parameters',
		name: 'queryParametersJson',
		type: 'json',
		required: true,
		displayOptions: {
			show: {
				operation: [operation],
				resource: [resource],
				jsonParameters: [true],
			},
		},
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		default: '',
		description: 'Query parameters as JSON (flat object)',
	},
];

export const returnAll = (resource: string, operation: string): INodeProperties[] => [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [operation],
				resource: [resource],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		required: true,
	},
];

export const limit = (resource: string, operation: string): INodeProperties[] => [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [operation],
				resource: [resource],
				returnAll: [false],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		placeholder: '',
		default: 50,
		description: 'Max number of results to return',
		required: true,
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
	},
];

export const additionalFields = (resource: string, operation: string): INodeProperties[] => [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: [operation],
				resource: [resource],
			},
			hide: {
				jsonParameters: [true],
			},
		},
		options: [
			...Aggregate(),
			...BinaryPropertyName(),
			...Deep(),
			...Export(),
			...ExportFileName(),
			...Fields(),
			...Filter(),
			...GroupBy(),
			...Meta(),
			...Offset(),
			...Search(),
			...Sort(),
		],
	},
];

export const listDefault = (resource: string, operation: string): INodeProperties[] => [
	...returnAll(resource, operation),
	...limit(resource, operation),
	...splitIntoItems(resource, operation),
	...jsonParameters(resource, operation),
	...bodyParametersJson(resource, operation),
	...additionalFields(resource, operation),
];
