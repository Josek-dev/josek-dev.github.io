jQuery.fn.extend({
    toggleText: function (a, b) {
        let toggle = false, that = this;
        this.on('click', function () {
            that.text((toggle = !toggle) ? b : a);
        });
        return this;
    }
});
$(document).ready(function(){
    $("#enter").on("click", function(){
        $("#enterButton").toggleText("Enter", "Close");
        $("#error").toggle("slow");

    });
});