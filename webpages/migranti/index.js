function apri(input){
    let table = document.getElementById("noice");
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file);
    
    reader.onload = function() {
        let heading = true;
        let tagEnd = "th>";
        let tableContent = "";
        for (let row of reader.result.split("\n")) {
            tableContent += "<tr>";
            for (let cell of row.split(","))
                tableContent += `<${tagEnd}${cell.substring(1,cell.length-1)}</${tagEnd}`;
            if (heading) {
                tagEnd = "td>";
                heading = false;
            }
            tableContent += "</tr>";
        }
        table.innerHTML = tableContent;
    };
};