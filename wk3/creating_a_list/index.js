// #2
// var header = document.createElement("h1");
// header.textContent = "Hello World"
// document.body.append(header);

// #3
// for (var i = 0; i < 10; i++) {
//     var header = document.createElement("h1");
//     header.textContent = "Hello World"
//     document.body.append(header);
// }

// #4 [ "steve", "larry","joe","shirley","steph","nate","rick","emily"]


var names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
for (var i = 0; i < names.length; i++) {        //#5
    var header = document.createElement("h1");  
    header.textContent = names[i];             //#6
    document.body.append(header);
    header.style.color = "green";               //#7
    header.style.backgroundColor = "black"
    header.style.textAlign = "center"
    header.style.borderRadius = "20px"
    header.style.padding = "5px"
}
