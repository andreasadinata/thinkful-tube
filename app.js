$(document).ready(function () {

    $('.js-search-form').submit(function (event) {
        event.preventDefault();
        var value = $(".js-query").val();
        findData(value);
    })

    function findData(data) {
        $.getJSON("https://www.googleapis.com/youtube/v3/search", {
                part: "snippet",
                maxResults: 21,
                key: "AIzaSyARSOefqHz-1Pc3u3d3VJz3BSZE_R9-P_A",
                q: data,
                type: "video"
            },
            function (callbackData) {
                console.log(callbackData);

                rendering(callbackData.items)
            }
        );
    }

    function rendering(data) {
        var output = "";
        $.each(data, function (dataKey, dataValue) {
            output += '<li class="bullets">';
            output += '<div class="title">' + dataValue.snippet.title;
            output += '</div>';
            output += '<a href=https://www.youtube.com/watch?v=' + dataValue.id.videoId + ' target="_blank" > ';
            output += '<img class="images" src=' + dataValue.snippet.thumbnails.high.url + '>';
            output += '</a>';
            output += '</li>';
        });
        $('.js-search-results').html(output);
    }
})
