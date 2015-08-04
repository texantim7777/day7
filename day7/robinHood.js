var robinHood;

var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

function loadFile() {
    reader.open('get', 'robinhood.txt', true);
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents() {
    if (reader.readyState == 4) {
        robinHood = reader.responseText;
    }
}

loadFile();