$(document).ready(function () {
    $('.add_product').on("click", function () {
        if ($(this).hasClass("buttonfx")) {
            $(this).removeClass("buttonfx");
            $(this).addClass("buttonfx-clicked");
            $(this).children().removeClass("fa-plus");
            $(this).children().addClass("fa-check");
        } else {
            $(this).removeClass("buttonfx-clicked");
            $(this).addClass("buttonfx");
            $(this).children().removeClass("fa-check");
            $(this).children().addClass("fa-plus");
        }
    });


    $('#filter_dropdown').on("click", function () {
        $('#big_dropdown').show();
    });
    $(document).mouseup(function (e) {
        var container = $("#big_dropdown"); // YOUR CONTAINER SELECTOR

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
        }
    });
    $('.cc-delete-button').on("click", function () {
        $('.checkbox-filter').prop('checked', false);
    });
});