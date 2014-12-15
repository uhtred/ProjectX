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

        getPlateEnd: function() {
            return this.$infoBox.find('div:eq(3)').text().replace('Final da Placa:', '').trim();
        },

        getColor: function() {
            return this.$infoBox.find('div:eq(3)').text().replace('Cor:', '').trim();
        },

        getBodyType: function() {
            return this.$infoBox.find('div:eq(4)').text().replace('Carroceria:', '').trim();
        },

        getDoorsNumber: function() {
            return this.$infoBox.find('div:eq(5)').text().replace('Portas:', '').trim();
        },

        getExtras: function() {
            return $('.geral.informacoes > div:eq(1) > p').text().match(/(.*?)\s*Observações do vendedor/)[1]
        },

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
