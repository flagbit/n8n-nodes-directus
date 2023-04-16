import * as list from './list';
import * as login from './login';
import * as logout from './logout';
import * as refreshToken from './refreshToken';
import * as requestReset from './requestReset';
import * as resetPassword from './resetPassword';
import * as startOauthFlow from './startOauthFlow';

import type { INodeProperties } from 'n8n-workflow';
export { list, login, logout, refreshToken, requestReset, startOauthFlow, resetPassword };

// https://docs.directus.io/reference/system/auth.html
export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['auth'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: 'List configured OAuth providers',
				action: 'List auth providers',
			},
			{
				name: 'Log Out',
				value: 'logout',
				action: 'Log out',
			},
			{
				name: 'Login',
				value: 'login',
				description: 'Retrieve a temporary access token',
				action: 'Retrieve access token',
			},
			{
				name: 'Refresh Token',
				value: 'refreshToken',
				description: 'Refresh a temporary access token',
				action: 'Refresh access token',
			},
			{
				name: 'Request Password Reset',
				value: 'requestReset',
				description: 'Request a reset password email to be send',
				action: 'Request reset password',
			},
			{
				name: 'Reset Password',
				value: 'resetPassword',
				description:
					'The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password',
				action: 'Reset password',
			},
			{
				name: 'Start OAuth Flow',
				value: 'startOauthFlow',
				description: 'Start OAuth flow using the specified provider',
				action: 'Start an OAuth flow',
			},
		],
		default: 'list',
	},
	...list.description,
	...login.description,
	...logout.description,
	...refreshToken.description,
	...requestReset.description,
	...resetPassword.description,
	...startOauthFlow.description,
];