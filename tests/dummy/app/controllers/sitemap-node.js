import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    hideSidebar() {
      $('.ui.sidebar').sidebar('hide');
    },

    /**
      Expand menu items by click.

      @method actions.subMenuEl
    */
    subMenuEl(event) {
      let $this =  $(event.currentTarget).parent().find('.subMenu:first');
      if ($this.hasClass('hidden')) {
        $this.removeClass('hidden');
        $(event.target).parent().find('.item-minus:first').removeClass('hidden');
        $(event.target).parent().find('.item-plus:first').addClass('hidden');
      } else {
        $this.addClass('hidden');
        $(event.target).parent().find('.item-minus:first').addClass('hidden');
        $(event.target).parent().find('.item-plus:first').removeClass('hidden');
      }
    }
  }
});
