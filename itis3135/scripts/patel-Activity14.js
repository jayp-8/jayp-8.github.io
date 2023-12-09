$(document).ready(function () {
    $("#nav_list li a").click(function (event) {
        event.preventDefault();
        var title = $(this).attr("title");
        var jsonFileName = "json_files/" + title + ".json";
        $.getJSON(jsonFileName, function (data) {
            var speakerData = data["speakers"][0];
            $("main h1").html(speakerData["title"]);
            $("main h2").html(speakerData["month"] + "<br />" + speakerData["speaker"]);
            $("main img").attr("src", speakerData.image);
            $("main p").html(speakerData.text);
        });
    });
});