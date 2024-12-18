function apri(input){
    let table = document.getElementById("noice");
    let file = input.files[0];
    let reader = new FileReader();

    reader.readAsText(file);
    
    reader.onload = function() {
        let heading = true;
        let tagEnd = "th>";
        let tableContent = "";

        const xValues = [];
        const yValues = [];

        for (let row of reader.result.split("\n")) {
            tableContent += "<tr>";
            let splitRow = row.split(",");
            let xValue = Number(splitRow[0].substring(1,splitRow[0].length-1));
            if (!isNaN(xValue)) {
                xValues.push(Number(splitRow[0].substring(1,splitRow[0].length-1)));
                yValues.push(Number(splitRow[1].substring(1,splitRow[1].length-1)));
            }
            for (let cell of splitRow)
                tableContent += `<${tagEnd}${cell.substring(1,cell.length-1)}</${tagEnd}`;
            if (heading) {
                tagEnd = "td>";
                heading = false;
            }
            tableContent += "</tr>";
        }
        table.innerHTML = tableContent;

        new Chart("grafico", {
            type: "bar",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: "blue",
                data: yValues
              }]
            },
            options: {
              legend: {display: false}
            }
          });
    }
}