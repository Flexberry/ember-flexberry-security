import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import SecurityAssignDataObject from 'ember-flexberry-security/objects/security-assign-data';

moduleForComponent('security-assign', 'Integration | Component | security assign', {
  integration: true,

  beforeEach: function () {
    this.inject.service('i18n', { as: 'i18n' });
    Component.reopen({
      i18n: service('i18n')
    });

    // Set 'ru' as initial locale.
    this.set('i18n.locale', 'ru');
  }
});

test('it renders', function(assert) {

  this.set('securityAssign', SecurityAssignDataObject.create({
      headers: ['Name', 'Own', 'Inherit'],
      rows: [{
        name: 'admin',
        columns: [{ checked: true, readonly: false },
                  { checked: true, readonly: true }
        ]
      },
        {
          name: 'Все пользователи',
          columns: [{ checked: true, readonly: false },
                    { checked: true, readonly: true }
          ]
        },
      ],
      hasContent: true
    }));

  this.render(hbs`{{security-assign value=securityAssign}}`);

  assert.notEqual(this.$().text().indexOf('Inherit'), -1);

  // Template block usage:
  this.render(hbs`
    {{#security-assign}}
      template block text
    {{/security-assign}}
  `);

  assert.equal(this.$().text().indexOf('template block text'), -1);
});
