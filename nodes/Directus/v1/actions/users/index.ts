import type { INodeProperties } from 'n8n-workflow';
import * as acceptUserInvite from './acceptUserInvite';
import * as create from './create';
import * as createMultiple from './createMultiple';
import * as del from './delete';
import * as deleteMultiple from './deleteMultiple';
import * as disable2FA from './disable2FA';
import * as enable2FA from './enable2FA';
import * as generate2FA from './generate2FA';
import * as get from './get';
import * as getCurrent from './getCurrent';
import * as inviteUser from './inviteUser';
import * as list from './list';
import * as update from './update';
import * as updateMe from './updateMe';
import * as updateMultiple from './updateMultiple';

export {
	acceptUserInvite,
	create,
	createMultiple,
	del as delete,
	deleteMultiple,
	disable2FA,
	enable2FA,
	generate2FA,
	getCurrent,
	get,
	inviteUser,
	list,
	update,
	updateMe,
	updateMultiple,
};

// https://docs.directus.io/reference/users.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['users'],
			},
		},
		options: [
			{
				name: 'Accept User Invite',
				value: 'acceptUserInvite',
				description: 'Accepts and enables an invited user using a JWT invitation token',
				action: 'Accept user invite',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new user',
				action: 'Create user',
			},
			{
				name: 'Create Multiple',
				value: 'createMultiple',
				description: 'Create Multiple Users',
				action: 'Create multiple users',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an existing user',
				action: 'Delete a user',
			},
			{
				name: 'Delete Multiple',
				value: 'deleteMultiple',
				description: 'Delete Multiple Users',
				action: 'Delete multiple users',
			},
			{
				name: 'Disable 2FA',
				value: 'disable2FA',
				description: 'Disables two-factor authentication for the currently authenticated user',
				action: 'Disable 2FA',
			},
			{
				name: 'Enable 2FA',
				value: 'enable2FA',
				description: 'Enables two-factor authentication for the currently authenticated user',
				action: 'Enable 2FA',
			},
			{
				name: 'Generate 2FA',
				value: 'generate2FA',
				description: 'Generate 2FA Secret',
				action: 'Generate 2FA',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a single user by unique identifier',
				action: 'Get a user',
			},
			{
				name: 'Get Current',
				value: 'getCurrent',
				description: 'Retrieve the currently authenticated user',
				action: 'Get current user',
			},
			{
				name: 'Invite User',
				value: 'inviteUser',
				description:
					'Invites one or more users to this project. It creates a user with an invited status, and then sends an email to the user with instructions on how to activate their account.',
				action: 'Invite a user',
			},
			{
				name: 'List',
				value: 'list',
				description: 'List the users',
				action: 'List users',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an existing user',
				action: 'Update a user',
			},
			{
				name: 'Update Me',
				value: 'updateMe',
				description: 'Update the currently authenticated user',
				action: 'Update current user',
			},
			{
				name: 'Update Multiple',
				value: 'updateMultiple',
				description: 'Update Multiple Users',
				action: 'Update multiple users',
			},
		],
		default: 'list',
	},

	...acceptUserInvite.description,
	...create.description,
	...createMultiple.description,
	...del.description,
	...deleteMultiple.description,
	...disable2FA.description,
	...enable2FA.description,
	...generate2FA.description,
	...get.description,
	...getCurrent.description,
	...inviteUser.description,
	...list.description,
	...update.description,
	...updateMe.description,
	...updateMultiple.description,
	...createMultiple.description,
];
