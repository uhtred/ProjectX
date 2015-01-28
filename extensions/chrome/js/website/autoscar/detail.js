var Autoscar = function() {

    var debug = true;

    function log(what) {
        if (debug) {
            alert(what);
        }
    }

    function Main() {
        this.category = ['vehicles', 'cars', 'motorcycles'];
        this.init();
    }

    Main.prototype = {

        findPropertie: function(match) {
            var $item = this.$infoList.filter(':contains("' + match + '")');

            return $item.text() || '';
        },

        getName: function() {
            return $('.titulo-anuncio:eq(0)').text().trim();
        },

        getYear: function() {
            return this.findPropertie('Ano/Modelo').replace('Ano/Modelo:', '').trim();
        },

        getGearShift: function() {
            return this.findPropertie('Câmbio').replace('- Câmbio', '').trim();
        },

        getKM: function() {
            return this.findPropertie('Km').replace('Km:', '').trim();
        },

        getPlateEnd: function() {
            return 'Não informado';
        },

        getColor: function() {
            return this.findPropertie('Cor').replace('Cor:', '').trim();
        },

        getBodyType: function() {
            return this.getName().match(/Sedan/) ? 'Sedan' : 'Hatch';
        },

        getDoorsNumber: function() {
            return this.findPropertie('Portas').replace('Portas:', '').trim();
        },

        getExtras: function() {
            return $('.description p:eq(0)').text().trim();
        },

        placeButtonContainer: function() {
            $('.titulo-anuncio:eq(0)').after('<div class="project-x__btn-container" />');
        },

        init: function() {
            this.$infoList = $('.fichaTecnica li, .acessorios li');
            this.placeButtonContainer();

            log([
                this.getName(),
                this.getYear(),
                this.getGearShift(),
                this.getKM(),
                this.getPlateEnd(),
                this.getColor(),
                this.getBodyType(),
                this.getDoorsNumber(),
                this.getExtras()
            ].join('\n'));
        }
    };

    return new Main();
}();
