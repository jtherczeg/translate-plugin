/*
 * Multi lingual control plugin
 * 
 * Data attributes:
 * - data-control="multilingual" - enables the plugin on an element
 * - data-default-locale="en" - default locale code
 * - data-placeholder-field="#placeholderField" - an element that contains the placeholder value
 *
 * JavaScript API:
 * $('a#someElement').multiLingual({ option: 'value' })
 *
 * Dependences: 
 * - Nil
 */

+function ($) { "use strict";

    // MULTILINGUAL CLASS DEFINITION
    // ============================

    var MultiLingual = function(element, options) {
        var self          = this
        this.options      = options
        this.$el          = $(element)

        this.$placeholder  = $(this.options.placeholderField)
        this.$activeButton = this.$el.find('[data-active-locale]')

        this.$el.on('click', '[data-switch-locale]', function(event){
            var selectedLocale = $(this).data('switch-locale')
            self.setLocale(selectedLocale)

            /*
             * If Ctrl/Cmd key is pressed, find other instances and switch
             */
            if (event.ctrlKey || event.metaKey) {
                $('[data-switch-locale="'+selectedLocale+'"]').click()
            }
        })

        this.$placeholder.on('keyup', function(){
            self.$activeField.val(this.value)
        })

        this.setLocale(this.options.defaultLocale)
    }

    MultiLingual.DEFAULTS = {
        defaultLocale: 'en',
        defaultField: null,
        placeholderField: null
    }

    MultiLingual.prototype.getLocaleElement = function(locale) {
        var el = this.$el.find('[data-locale-value="'+locale+'"]')
        return el.length ? el : null
    }

    MultiLingual.prototype.getLocaleValue = function(locale) {
        var value = this.getLocaleElement(locale)
        return value ? value.val() : null
    }

    MultiLingual.prototype.setLocale = function(locale) {
        this.activeLocale = locale
        this.$activeField = this.getLocaleElement(locale)
        this.$placeholder.val(this.getLocaleValue(locale))
        this.$activeButton.text(locale)
    }

    // MULTILINGUAL PLUGIN DEFINITION
    // ============================

    var old = $.fn.multiLingual

    $.fn.multiLingual = function (option) {
        var args = Array.prototype.slice.call(arguments, 1), result
        this.each(function () {
            var $this   = $(this)
            var data    = $this.data('oc.multilingual')
            var options = $.extend({}, MultiLingual.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data) $this.data('oc.multilingual', (data = new MultiLingual(this, options)))
            if (typeof option == 'string') result = data[option].apply(data, args)
            if (typeof result != 'undefined') return false
        })

        return result ? result : this
    }

    $.fn.multiLingual.Constructor = MultiLingual

    // MULTILINGUAL NO CONFLICT
    // =================

    $.fn.multiLingual.noConflict = function () {
        $.fn.multiLingual = old
        return this
    }

    // MULTILINGUAL DATA-API
    // ===============
    $(document).render(function () {
        $('[data-control="multilingual"]').multiLingual()
    })

}(window.jQuery);
