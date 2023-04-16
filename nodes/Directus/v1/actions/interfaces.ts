import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type DirectusMap = {
	items:
		| 'create'
		| 'createMultiple'
		| 'delete'
		| 'deleteMultiple'
		| 'get'
		| 'list'
		| 'update'
		| 'updateMultiple';
	activity: 'create' | 'delete' | 'get' | 'list' | 'update';
	assets: 'get';
	auth:
		| 'list'
		| 'login'
		| 'logout'
		| 'refreshToken'
		| 'requestReset'
		| 'resetPassword'
		| 'startOauthFlow';
	collections: 'create' | 'delete' | 'get' | 'list' | 'update';
	extensions: 'list';
	fields: 'create' | 'delete' | 'get' | 'list' | 'listAll' | 'update';
	files:
		| 'create'
		| 'delete'
		| 'deleteMultiple'
		| 'get'
		| 'import'
		| 'list'
		| 'update'
		| 'updateMultiple';
	folders:
		| 'create'
		| 'createMultiple'
		| 'delete'
		| 'deleteMultiple'
		| 'get'
		| 'list'
		| 'update'
		| 'updateMultiple';

	permissions:
		| 'create'
		| 'createMultiple'
		| 'delete'
		| 'deleteMultiple'
		| 'get'
		| 'list'
		| 'update'
		| 'updateMultiple';

	presets:
		| 'create'
		| 'createMultiple'
		| 'delete'
		| 'deleteMultiple'
		| 'get'
		| 'list'
		| 'update'
		| 'updateMultiple';
	relations: 'create' | 'delete' | 'get' | 'list' | 'listAll' | 'update';
	roles:
		| 'create'
		| 'createMultiple'
		| 'delete'
		| 'deleteMultiple'
		| 'get'
		| 'list'
		| 'update'
		| 'updateMultiple';
	revisions: 'get' | 'list';
	server: 'getGraphQL' | 'getOpenAPI' | 'health' | 'info' | 'ping';
	settings: 'get' | 'update';
	users:
		| 'acceptUserInvite'
		| 'create'
		| 'delete'
		| 'deleteMultiple'
		| 'getCurrent'
		| 'generate2FA'
		| 'get'
		| 'inviteUser'
		| 'list'
		| 'enable2FA'
		| 'disable2FA'
		| 'createMultiple'
		| 'update'
		| 'updateMe'
		| 'updateMultiple';
	utils:
		| 'clearCache'
		| 'generateHash'
		| 'getRandomString'
		| 'importFileData'
		| 'sortItems'
		| 'verifyHash';
	webhooks:
		| 'create'
		| 'createMultiple'
		| 'delete'
		| 'deleteMultiple'
		| 'get'
		| 'list'
		| 'update'
		| 'updateMultiple';
};

export type Directus = AllEntities<DirectusMap>;
export type DirectusItems = Entity<DirectusMap, 'items'>;
export type DirectusActivity = Entity<DirectusMap, 'activity'>;
export type DirectusAssets = Entity<DirectusMap, 'assets'>;
export type DirectusAuth = Entity<DirectusMap, 'auth'>;
export type DirectusCollections = Entity<DirectusMap, 'collections'>;
export type DirectusExtensions = Entity<DirectusMap, 'extensions'>;
export type DirectusFields = Entity<DirectusMap, 'fields'>;
export type DirectusFiles = Entity<DirectusMap, 'files'>;
export type DirectusFolders = Entity<DirectusMap, 'folders'>;
export type DirectusPermissions = Entity<DirectusMap, 'permissions'>;
export type DirectusPresets = Entity<DirectusMap, 'presets'>;
export type DirectusRoles = Entity<DirectusMap, 'roles'>;
export type DirectusRelations = Entity<DirectusMap, 'relations'>;
export type DirectusRevisions = Entity<DirectusMap, 'revisions'>;
export type DirectusServer = Entity<DirectusMap, 'server'>;
export type DirectusSettings = Entity<DirectusMap, 'settings'>;
export type DirectusUsers = Entity<DirectusMap, 'users'>;
export type DirectusUtils = Entity<DirectusMap, 'utils'>;
export type DirectusWebhooks = Entity<DirectusMap, 'webhooks'>;

export type ActivityProperties = PropertiesOf<DirectusActivity>;
export type AssetsProperties = PropertiesOf<DirectusAssets>;
export type AuthProperties = PropertiesOf<DirectusAuth>;
export type CollectionsProperties = PropertiesOf<DirectusCollections>;
export type ItemsProperties = PropertiesOf<DirectusItems>;
export type ExtensionsProperties = PropertiesOf<DirectusExtensions>;
export type FieldsProperties = PropertiesOf<DirectusFields>;
export type FilesProperties = PropertiesOf<DirectusFiles>;
export type FoldersProperties = PropertiesOf<DirectusFolders>;
export type PermissionsProperties = PropertiesOf<DirectusPermissions>;
export type PresetsProperties = PropertiesOf<DirectusPresets>;
export type RelationsProperties = PropertiesOf<DirectusRelations>;
export type RevisionsProperties = PropertiesOf<DirectusRevisions>;
export type RolesProperties = PropertiesOf<DirectusRoles>;
export type ServerProperties = PropertiesOf<DirectusServer>;
export type SettingsProperties = PropertiesOf<DirectusSettings>;
export type UsersProperties = PropertiesOf<DirectusUsers>;
export type UtilsProperties = PropertiesOf<DirectusUtils>;
export type WebhooksProperties = PropertiesOf<DirectusWebhooks>;

export interface IAttachment {
	fields: {
		item?: object[];
	};
	actions: {
		item?: object[];
	};
}
