$(document).ready(function () {
    $("#table").bootstrapTable({
        url: "table.json",
        columns: [{
            field: 'id',
            title: 'Item ID'
          }, {
            field: 'name',
            title: 'Item Name'
          }, {
            field: 'price',
            title: 'Item Price'
          }, ]
    });
});