import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e',
    { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e.new',
    { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e/new' });

  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e/new' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l');
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e/:id' });
  this.route('i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e.new', { path: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e/new' });

  this.route('ember-flexberry-dummy-application-user-list');
  this.route('ember-flexberry-dummy-application-user-edit', { path: 'ember-flexberry-dummy-application-user-edit/:id' });
  this.route('ember-flexberry-dummy-application-user-edit.new', { path: 'ember-flexberry-dummy-application-user-edit/new' });
  this.route('ember-flexberry-dummy-localization-list');
  this.route('ember-flexberry-dummy-localization-edit', { path: 'ember-flexberry-dummy-localization-edit/:id' });
  this.route('ember-flexberry-dummy-localization-edit.new', { path: 'ember-flexberry-dummy-localization-edit/new' });
  this.route('ember-flexberry-dummy-suggestion-list');
  this.route('ember-flexberry-dummy-suggestion-edit', { path: 'ember-flexberry-dummy-suggestion-edit/:id' });
  this.route('ember-flexberry-dummy-suggestion-edit.new', { path: 'ember-flexberry-dummy-suggestion-edit/new' });
  this.route('ember-flexberry-dummy-suggestion-type-list');
  this.route('ember-flexberry-dummy-suggestion-type-edit', { path: 'ember-flexberry-dummy-suggestion-type-edit/:id' });
  this.route('ember-flexberry-dummy-suggestion-type-edit.new', { path: 'ember-flexberry-dummy-suggestion-type-edit/new' });
  this.route('ember-flexberry-dummy-test-poly-child-list');
  this.route('ember-flexberry-dummy-test-poly-child-edit', { path: 'ember-flexberry-dummy-test-poly-child-edit/:id' });
  this.route('ember-flexberry-dummy-test-poly-child-edit.new', { path: 'ember-flexberry-dummy-test-poly-child-edit/new' });
  this.route('ember-flexberry-dummy-test-poly-list');
  this.route('ember-flexberry-dummy-test-poly-edit', { path: 'ember-flexberry-dummy-test-poly-edit/:id' });
  this.route('ember-flexberry-dummy-test-poly-edit.new', { path: 'ember-flexberry-dummy-test-poly-edit/new' });
  this.route('login');
});

export default Router;
