import Component from '@ember/component';

/**
 * Overload wrapper tag name for disabling wrapper.
 *
 * The sidebar, as per Semantic-UI's documentation,
 * will need to be directly below the body element.
 */
export default Component.extend({
  tagName: ''
});
