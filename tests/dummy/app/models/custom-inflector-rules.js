import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('access', 'accesss');
inflector.irregular('agent', 'agents');
inflector.irregular('filter', 'filters');
inflector.irregular('impersonalization', 'impersonalizations');
inflector.irregular('attribute', 'attributes');
inflector.irregular('group', 'groups');
inflector.irregular('operation', 'operations');
inflector.irregular('role', 'roles');
inflector.irregular('view', 'views');
inflector.irregular('permition', 'permitions');
inflector.irregular('session', 'sessions');
inflector.irregular('subject', 'subjects');

export default {};
