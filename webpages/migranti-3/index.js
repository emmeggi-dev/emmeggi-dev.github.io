function apri(input){
    let table = document.getElementById("noice");
    let file = input.files[0];
    let reader = new FileReader();

    let ctx;

    reader.readAsText(file);
    
    reader.onload = function() {
        let heading = true;
        let tagEnd = "th>";
        let tableContent = "";

        const yValues = [];

        for (let row of reader.result.split("\n")) {
            tableContent += "<tr>";
            let splitRow = row.split(",");
            let yValue = Number(splitRow[1].substring(1,splitRow[1].length-1));
            if (!isNaN(yValue)) yValues.push(yValue);
            for (let cell of splitRow)
                tableContent += `<${tagEnd}${cell.substring(1,cell.length-1)}</${tagEnd}`;
            if (heading) {
                tagEnd = "td>";
                heading = false;
            }
            tableContent += "</tr>";
        }
        table.innerHTML = tableContent;
        
        const canvas = document.getElementById("grafico");
        ctx = canvas.getContext("2d");
        let width = canvas.width;
        let height = canvas.height;

        let spacingLeft = width/20;
        let spacingBottom = height/20;
        line(spacingLeft,0,spacingLeft,height-spacingBottom);
        line(spacingLeft,height-spacingBottom,width,height-spacingBottom)
        let max = yValues[0]
        for (let i = 1; i < yValues.length; i++)
          if (yValues[i] > max) max = yValues[i]
        for (let i = 0; i < yValues.length - 1; i++)
          line(getCoord(i, yValues.length-1, spacingLeft, width), height-getCoord(yValues[i], max, spacingBottom, height), getCoord(i+1, yValues.length-1, spacingLeft, width), height-getCoord(yValues[i+1], max, spacingBottom, height))
    }

    function getCoord(value, maxValue, spacing, maxDisplay) {
      return value/maxValue*(maxDisplay-spacing)+spacing
    }

    function line(x1, y1, x2, y2) {
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
}