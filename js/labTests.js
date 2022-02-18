var today = new Date();
var dd = today.getDate();
console.log(dd)

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

var maxmm = today.getMonth() + 2;

$('#dateTime').ejDateTimePicker({
    width: 200,
    minDateTime: dd + "/" + mm + "/" + yyyy,

});