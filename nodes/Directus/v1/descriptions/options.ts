import type { INodeProperties } from 'n8n-workflow';

export const Export = (): INodeProperties[] => [
	{
		displayName: 'Export',
		name: 'export',
		type: 'options',
		placeholder: 'Select an option',
		default: 'csv',
		description: 'Saves the API response to a file. Accepts one of json, csv, xml.',
		options: [
			{
				name: 'CSV',
				value: 'csv',
			},
			{
				name: 'JSON',
				value: 'json',
			},
			{
				name: 'XML',
				value: 'xml',
			},
		],
	},
];

export const Aggregate = (): INodeProperties[] => [
	{
		displayName: 'Aggregate',
		name: 'aggregate',
		type: 'fixedCollection',
		placeholder: 'Add Aggregation Functions',
		default: {},
		description:
			'Aggregate functions allow you to perform calculations on a set of values, returning a single result',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'aggregationFunctions',
				displayName: 'Functions',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'options',
						default: 'count',
						options: [
							{
								name: 'Average',
								value: 'avg',
								description: 'Get the average value of the given field',
							},
							{
								name: 'Average Distinct',
								value: 'avgDistinct',
								description: 'Get the average value of the unique values in the given field',
							},
							{
								name: 'Count',
								value: 'count',
								description: 'Counts how many items there are',
							},
							{
								name: 'Count Distinct',
								value: 'countDistinct',
								description: 'Counts how many unique items there are',
							},
							{
								name: 'Maximum',
								value: 'max',
								description: 'Return the highest value in the field',
							},
							{
								name: 'Minimum',
								value: 'min',
								description: 'Return the lowest value in the field',
							},
							{
								name: 'SUM',
								value: 'sum',
								description: 'Adds together the values in the given field',
							},
							{
								name: 'SUM Distinct',
								value: 'sumDistinct',
								description: 'Adds together the unique values in the given field',
							},
						],
						description: 'Aggregation Function',
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options
						displayName: 'Field Name',
						name: 'value',
						type: 'options',
						default: '',
						// eslint-disable-next-line n8n-nodes-base/node-param-description-wrong-for-dynamic-options
						description: 'Field to apply aggregation on',
						typeOptions: {
							loadOptionsMethod: 'getFieldsInCollection',
						},
					},
				],
			},
		],
	},
];

export const BinaryPropertyName = (): INodeProperties[] => [
	{
		displayName: 'Binary Property for Export Data',
		name: 'binaryPropertyName',
		type: 'string',
		default: 'data',
		description: 'Name of the binary property to download the data to',
	},
];

export const Deep = (): INodeProperties[] => [
	{
		displayName: 'Deep (JSON)',
		name: 'deep',
		type: 'json',
		placeholder: '',
		default: null,
		description:
			'Deep allows you to set any of the other query parameters on a nested relational dataset',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];

export const Offset = (): INodeProperties[] => [
	{
		displayName: 'Offset',
		name: 'offset',
		type: 'number',
		placeholder: '',
		default: null,
		description: 'How many items to skip when fetching data',
	},
];

export const Search = (): INodeProperties[] => [
	{
		displayName: 'Search',
		name: 'search',
		type: 'string',
		placeholder: '',
		default: '',
		description: 'Filter by items that contain the given search query in one of their fields',
	},
];

export const Sort = (): INodeProperties[] => [
	{
		displayName: 'Sort',
		name: 'sort',
		type: 'string',
		placeholder: '',
		default: '',
		description:
			'How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly.',
	},
];

export const Meta = (): INodeProperties[] => [
	{
		displayName: 'Meta',
		name: 'meta',
		type: 'string',
		placeholder: '',
		default: '',
		description: 'What metadata to return in the response',
	},
];

export const Filter = (): INodeProperties[] => [
	{
		displayName: 'Filter (JSON)',
		name: 'filter',
		type: 'json',
		placeholder: '',
		default: null,
		description: 'Select items in collection by given conditions',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
	},
];

export const Fields = (): INodeProperties[] => [
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'string',
		placeholder: '',
		default: '',
		description: 'Control what fields are being returned in the object',
	},
];

export const GroupBy = (): INodeProperties[] => [
	{
		displayName: 'Group By',
		name: 'groupBy',
		type: 'string',
		placeholder: 'author,year(publish_date)',
		default: '',
		description:
			'Grouping allows for running the aggregation functions based on a shared value. This allows for things like "Average rating per month" or "Total sales of items in the jeans category".',
	},
];

export const ExportFileName = (): INodeProperties[] => [
	{
		displayName: 'File Name for Export Data',
		name: 'fileName',
		type: 'string',
		default: 'export',
		description: 'File Name for the Export data without the extension',
	},
];
