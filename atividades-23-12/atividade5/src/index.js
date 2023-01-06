var space = require('to-space-case');

module.exports = {
    minhaFuncao: function () {
        $('#resultado').text(
            space(
                $('#dados').val()
            )
        );
    },
}