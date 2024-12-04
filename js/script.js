$('#date').datepicker({});
$('#accordion').accordion();
$('#button').button();
$('#button-icon').button({
    icon: 'ui-icon-gear',
    showLabel: false,
});
$('#tabs').tabs();
$('#dialog').dialog();
//progressBar
$(function() {
    $('#Button').button();
    $('#bar').progressbar({
        value: 0,
        change: function(event, ui) {
            // alert('Event: ' + event.type);
        },
        complete: function(event, ui) {
            alert('Event: ' + event.type);
        },
    });
    $('#Button').click(function() {
        let currentVal = $('#bar').progressbar('option','value');
        if(currentVal < 100) {
            currentVal = currentVal + 10;
            $('#percent').text(currentVal + '%');
            $('#bar').progressbar('option','value',currentVal);
        }
    });
});