$("#palavra").on("input", function() {
    var text = $('#palavra').val()
    $("#resposta").html(text)
});

$.get('../../palavras.txt', function(data) {
    
}, 'text');
