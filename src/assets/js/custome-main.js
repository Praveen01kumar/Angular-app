(function(window, document, $) {
    'use strict';

    var axilKey = {
        k: function() {
            axilKey.s();
            axilKey.methods();
        },
        s: function() {
            this._window = $(window),
                this._document = $(document)
        },
        methods: function() {
            axilKey._clickDoc();
        },

        _clickDoc: function() {
            var inputFocus, iconchange, removeclasses, slidebar, inputBlur;

            iconchange = function(e) {
                $(this).toggleClass('active');
            }

            inputFocus = function(e) {
                $('.main-section').toggleClass('page');
            };

            removeclasses = function(e) {
                $('.main-section').removeClass('page');
                $('.icon').removeClass('active');
            }

            slidebar = function(e) {
                $('.main-section').removeClass('page');
                $('.icon').removeClass('active');
            }

            // inputBlur = function(e) {
            //     if (!$(this).val()) {
            //         $(this).parent().removeClass('focused');
            //     }
            // }
            axilKey._document
                .on('click', '.header .header-logo .icon', iconchange)
                .on('click', '.header-logo a', inputFocus)
                .on('click', '.mobile-shadow', removeclasses)
                .on('click', '.slider-nav ul li', slidebar)
                // .on('blur', 'input:not([type="radio"]),input:not([type="checkbox"]),textarea,select,input', inputBlur)

        }
    };
    setTimeout(function() { axilKey.k(); }, 500);
})(window, document, jQuery);