var Webmotors = function() {

    function Main() {
    	this.category = ['vehicles', 'cars', 'motorcycles'];
    }

    Main.prototype = {

        getName: function() {
            return $('[itemprop="name"]').text().trim();
        },

        getYear: function() {
            return this.$infoBox.find('div:eq(0)').text().replace('Ano:', '').trim();
        },

        getGearShift: function() {
            return this.$infoBox.find('div:eq(1)').text().replace('Câmbio:', '').trim();
        },

        getKM: function() {
            return this.$infoBox.find('div:eq(2)').text().replace('KM:', '').trim();
        },

        getColor: function() {
            return this.$infoBox.find('div:eq(3)').text().replace('Cor:', '').trim();
        }

        placeButtonContainer: function() {
            $('.detalhes-anuncio div:eq(0)').after('<div class="project-x__btn-container" />');
        },

        init: function() {
            this.$infoBox = $('.geral.informacoes .dis-tc:eq(0)');
            this.placeButtonContainer();
        }
    };

    return new Main();
}();
