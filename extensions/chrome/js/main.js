var Main = function() {

    var serviceUrl = 'http://project-x.com/save/data',
        btnClass = 'project-x__btn-compare',
        tmplBtn = '<button class="' + btnClass + '">Comparar</button>',
        mockUrl = 'http://www.mocky.io/v2/548f457607a1a70014ef8297';

    function Main() {
        this.init();
    }

    Main.prototype = {

        reqSaveData: function(data) {
            $.ajax({
                type: 'get',
                url: mockUrl,
                dataType: 'jsonp',
                jsonp: 'callback',
                data: data
            });
        },

        saveData: function() {
            this.reqSaveData(data)
                .done(function(response) {
                	console.log('saveData done', response);
                });
        },

        bindEvents: function() {
        	var _this = this;
            $(document.body)
                .on('click', '.' + btnClass, function() {
                	_this.saveData();
                });
        },

        init: function() {
            this.bindEvents();
        	Webmotors.init();
        }
    }

    return new Main();

}();
