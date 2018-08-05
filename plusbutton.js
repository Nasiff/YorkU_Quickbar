$(document).ready(function () {
    getBookmarkFields()
});

function getBookmarkFields() {
    $("#saveBtn").click(function () {
        var siteName = $('input[name="name"]').val();
        var siteUrl = $('input[name="url"]').val();
        addBookmarkFile(siteName, siteUrl);
    })
}

function addBookmarkFile(siteName, siteUrl) {
    $(".plus-button").before(bookmark);
}

