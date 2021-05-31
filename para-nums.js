function makeParaNums() {

    var mystuff = $(".container").children("p");

    mystuff.each(function (index) {

        //note: here is why I loop through the children. Index will tell me what number I'm on. "this" will give me my JQ object

        var paraNum = index + 1;

        $("<div class='para-num' aria-hidden='true'>" + paraNum + "</div>").insertBefore(this);

        //End the thing

    });

}