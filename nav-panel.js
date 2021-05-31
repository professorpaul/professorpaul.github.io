function buildNavPanel() {

    var navPanel = $("<div id='nav-panel'></div>");

    var headingList = $("h1,h2,h3,h4,h5,h6");

    headingList.each(function (index) {

        var anchorName = "navTOC" + index;

        $(this).attr('id', anchorName);

        var newItem = $("<p><a href='#" + anchorName + "'>" + $(this).html() + "</a></p>");

        if ($(this).prop("tagName") == "H1") {
            newItem.css("padding-left", "1rem");
        }
        if ($(this).prop("tagName") == "H2") {
            newItem.css("padding-left", "2rem");
        }
        if ($(this).prop("tagName") == "H3") {
            newItem.css("padding-left", "3rem");
        }
        if ($(this).prop("tagName") == "H4") {
            newItem.css("padding-left", "4rem");
        }
        if ($(this).prop("tagName") == "H5") {
            newItem.css("padding-left", "5rem");
        }
        if ($(this).prop("tagName") == "H6") {
            newItem.css("padding-left", "6rem");
        }

        navPanel.append(newItem);

    });

    navPanel.css({ "max-width": "20rem", "overflow": "scroll", "font-size": "0.8rem", "position": "fixed", "height": "100%", "border-right": "solid 1px black", "top": "0px", "left": "0px", "background-color": "white", "color": "gray", "padding": "5px", "filter": "drop-shadow(0.4rem 0.4rem 0.45rem rgba(0, 0, 30, 0.5))","padding-bottom":"5rem"})
    $("body").append(navPanel);


    //Make button

    var button = $("<button class='btn btn-primary' type='submit'>Outline</button>");

    button.css({ "position": "fixed", "bottom": "5px", "left": "5px" });

    $('body').append(button);

    button.on("click", function(){

        $("#nav-panel").toggle();
    });

    navPanel.on("click", "a", function(){

        $("#nav-panel").toggle();
    });

}