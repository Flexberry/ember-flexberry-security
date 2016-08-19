import Ember from 'ember';

export default Ember.Controller.extend({
  /**
  */
  offlineGlobals: Ember.inject.service('offline-globals'),

  /**
  */
  onlineStatus: Ember.computed('offlineGlobals.isOnline', {
    get() {
      return this.get('offlineGlobals.isOnline');
    },
    set(key, newValue, oldValue) {
      if (newValue !== oldValue) {
        this.get('offlineGlobals').setOnlineAvailable(newValue);
      }

      return newValue;
    },
  }),

  /**
  */
  synchronizes: false,

  /**
  */
  sitemap: Ember.computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        },
        {
          link: null,
          caption: i18n.t('forms.application.sitemap.audit-forms.caption'),
          title: i18n.t('forms.application.sitemap.audit-forms.title'),
          children: [{
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l',
            caption: i18n.t('forms.application.sitemap.audit-forms.i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l.caption'),
            title: i18n.t('forms.application.sitemap.audit-forms.i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l.title'),
            children: null
          }]
        },
        {
          link: null,
          caption: i18n.t('forms.application.sitemap.полномочия.caption'),
          title: i18n.t('forms.application.sitemap.полномочия.title'),
          children: [{
            link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l',
            caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l.caption'),
            title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l.title'),
            children: null
          }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l.title'),
              children: null
            }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l.title'),
              children: null
            }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l.title'),
              children: null
            }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l.title'),
              children: null
            }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l.title'),
              children: null
            }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l.title'),
              children: null
            }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l.title'),
              children: null
            }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l.title'),
              children: null
            }, {
              link: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l',
              caption: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l.caption'),
              title: i18n.t('forms.application.sitemap.полномочия.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l.title'),
              children: null
            }]
        },
        {
          link: null,
          caption: i18n.t('forms.application.sitemap.application.caption'),
          title: i18n.t('forms.application.sitemap.application.title'),
          children: [{
            link: 'ember-flexberry-dummy-application-user-list',
            caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-application-user-list.caption'),
            title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-application-user-list.title'),
            children: null
          }, {
              link: 'ember-flexberry-dummy-localization-list',
              caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-localization-list.caption'),
              title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-localization-list.title'),
              children: null
            }, {
              link: 'ember-flexberry-dummy-suggestion-list',
              caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-suggestion-list.caption'),
              title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-suggestion-list.title'),
              children: null
            }, {
              link: 'ember-flexberry-dummy-suggestion-type-list',
              caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-suggestion-type-list.caption'),
              title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-suggestion-type-list.title'),
              children: null
            }, {
              link: 'ember-flexberry-dummy-test-poly-child-list',
              caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-test-poly-child-list.caption'),
              title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-test-poly-child-list.title'),
              children: null
            }, {
              link: 'ember-flexberry-dummy-test-poly-list',
              caption: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-test-poly-list.caption'),
              title: i18n.t('forms.application.sitemap.application.ember-flexberry-dummy-test-poly-list.title'),
              children: null
            }]
        }
      ]
    };
  }),

  actions: {
    /**
    */
    toggleSidebar() {
      Ember.$('.ui.sidebar').sidebar('toggle');
    },

    /**
    */
    syncUp() {
      let _this = this;
      _this.set('synchronizes', true);
      let syncer = Ember.getOwner(this).lookup('syncer:main');
      syncer.syncUp().then(() => {
        _this.set('synchronizes', false);
      }).catch((reason) => {
        Ember.Logger.debug(reason);
      });
    },
  }
});
