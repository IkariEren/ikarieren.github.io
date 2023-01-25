function table1() {
    $("#table").bootstrapTable("destroy");
    $("#table").bootstrapTable({
        method: "get",
        url: "table1.json",
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
}
function table2() {
    $("#table").bootstrapTable("destroy");
    $("#table").bootstrapTable({
        method: "get",
        url: "table2.json",
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
}