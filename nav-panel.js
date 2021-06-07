function buildNavPanel() {

    var navPanel = $("<div id='nav-panel'></div>");

    var headingList = $("h1,h2,h3,h4,h5,h6");

    headingList.each(function (index) {

        var anchorName = "TOC" + index;

        $(this).attr('id', anchorName);

        var newItem = $("<p><a href='#" + anchorName + "'>" + $(this).html() + "</a></p>");

        newItem.attr('id', "navTOC" + index);

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

    $("body").append(navPanel);

    var button = $("<button class='btn btn-primary' type='submit' id='outline-btn'>Outline</button>");

    $('body').append(button);

    button.on("click", function () {

        $("#nav-panel").toggle();
    });

    navPanel.on("click", "a", function () {

        $("#nav-panel").toggle();
    });


    $(window).scroll(function () {

        //TODO: I know what I'm doing wrong here. What I should be doing is not cyclying through the headings on the nav panel, but rather cycling through the headings in the main body. Then I need to somehow match em up

        var scrollY = $('html').scrollTop();

        $("#nav-panel").children().each(function (index) {

            var IDNeeded = $(this).attr("id").slice(3);
            
            var entryOffset = $("#" + IDNeeded).offset().top;

            console.log(entryOffset);

            if (entryOffset < scrollY) {
                //the heading is above the viewport
                $(this).css("background-color", "white");
            }
            else if (entryOffset > scrollY + window.innerHeight) {
                //the heading is below the viewport
                $(this).css("background-color", "white");
            }
            else {
                $(this).css("background-color", "#e5e5e5");
            }


        });

    });
}