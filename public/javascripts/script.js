$(document).ready(function() {

    var form = document.getElementById("form1"),
        button = document.getElementById("submit1"),
        text = document.getElementById("filter"),
        list = document.getElementById("list");
    list.innerHTML += '<div class="card ml-2 mb-2"><div class="card-body">card2</div></div>';
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Stopping with value: " + text.value);

        var request = new XMLHttpRequest();
        request.open('GET', '/my/url', true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = JSON.parse(request.responseText);
                var datafilterd = JSON.parse(data).filter(function(entry) {
                    return entry.property === 'value';
                });
                datafilterd.forEach(function(entry) {
                    console.log(entry);
                    list.innerHTML += '<div class="card ml-2 mb-2"><div class="card-body">card1</div></div>';
                });
            } else {
                // We reached our target server, but it returned an error

            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
        };
        request.send();

    });

});
