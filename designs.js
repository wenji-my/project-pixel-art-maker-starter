// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

    let table = $('#pixel_canvas');
    table.children().detach();

    let height = $('#input_height');
    let width = $('#input_width');
    let colorPicker = $('#colorPicker');

    for(let i=0;i<height.val();i++){
        let tr = $('<tr></tr>');
        tr.appendTo(table);
        for (let j=0;j<width.val();j++){
            let td = $('<td></td>');
            td.appendTo(tr);
            let bl = false;
            td.click(function () {
                //实现再次点击去掉颜色
                if (bl){
                    $(this).css("background-color",'#fff');
                    bl = false;
                }else {
                    $(this).css("background-color",colorPicker.val());
                    bl = true;
                }
            });
        }
    }
}
$(function () {
    $('form').submit(function (e) {
        makeGrid();
        //不触发默认事件
        e.preventDefault();
    });
});
