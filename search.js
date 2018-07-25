$(document).ready(function () {
    $('#search-button').click(function () {
        var searchString = $('#search-input').val();
        openSearchPage(searchString);
    });
});

// Opens a new tab with the search results
function openSearchPage (searchString) {
    var temp = encodeURIComponent(searchString.trim()); // Remove white spaces and and replace spaces with %20
    var relevantString = "https://search2.info.yorku.ca/?q=" + temp + "&client=External&proxystylesheet=External&site=default_collection&output=xml_no_dtd";
    window.open(relevantString); // Open the results in a new window
}