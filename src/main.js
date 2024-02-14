$(document).ready(function () {
    setTimeout(function () {
        $(".spdicktprojects").remove();
        $(".logo").css("display", "block");
    }, 5678);

    var spdicktprojectsSection = $("<section>").addClass("spdicktprojects");
    var spdicktprojectsContentDiv = $("<div>").addClass("spdicktprojects-content mask");
    var h1Element = $("<h1>").attr("data-content", "Welcome to SPDI");
    var spanElement = $("<span>").text("Welcome to SPDI");
    h1Element.append(spanElement);

    var designedByP = $("<p>").text("Designed by Tamim Ahmad.");
    var loadingP = $("<p>").addClass("loading");
    var loadingImg = $("<img>").attr({
        "src": "./src/img/loading.gif",
        "draggable": false,
        "alt": "Loading..."
    });

    loadingP.append(loadingImg);
    spdicktprojectsContentDiv.append(h1Element, designedByP, loadingP);
    spdicktprojectsSection.append(spdicktprojectsContentDiv);

    var spdicktprojects2Section = $("<section>").addClass("spdicktprojects2");
    var iframeElement = $("<iframe>").attr({
        "src": "https://www.falstad.com/circuit/circuitjs.html",
        "title": "Circuit Simulator by SPDI"
    });

    var logoDiv = $("<div>").addClass("logo");
    spdicktprojects2Section.append(iframeElement, logoDiv);

    $("body").append(spdicktprojectsSection, spdicktprojects2Section);
});
