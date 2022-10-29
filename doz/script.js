window.onload = function (){
    class Button{
        constructor(){
            this.is_opened = false;
            this.sign = undefined;
        }
        this.onClick = function() {
            this.is_opened = true;
            this.sign = `<i class="fa-solid fa-xmark"></i>`;
            $('.btn').click( function(e){
                e.preventDefault();
                $(this).removeClass('btn_hover');
            })
        }
    }
}
// var sheetCount = document.styleSheets.length;
// sheetCount.insertRule()
// console.log(document.styleSheets[0].href);