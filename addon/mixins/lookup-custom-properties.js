import Mixin from '@ember/object/mixin';

/**
 * Миксин с методом получения дефолтных настроек модального окна лукапа.
 */
export default Mixin.create({
  /**
   * Получить настройки для модального окна лукапа.
   * @returns Настройки для модального окна лукапа.
   */
  getLookupCustomProperties() {
    return {
      filterButton: true,
      enableFilters: true,
    };
  },

  actions: {
    /**
     * Экшен получения настроек для модального окна лукапа.
     */
    getLookupCustomProperties() {
      return this.getLookupCustomProperties(...arguments);
    },
  },
});
