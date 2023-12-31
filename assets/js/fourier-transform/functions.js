function epiCycles(x, y, rotation, fourier, time, sketch) {
    let theme = document.getElementsByTagName("html")[0].dataset.theme;
    for (let i = 0; i < fourier.length; i++) {
        let prevx = x;
        let prevy = y;
        let freq = i;
        let radius = fourier[i].magnitude();
        let phase = fourier[i].phase();
        x += radius * Math.cos(freq * time + phase + rotation);
        y += radius * Math.sin(freq * time + phase + rotation);
        if (theme == "dark") {
            sketch.stroke("#e8e8e850");
        } else {
            sketch.stroke("#00000050");
        }
        sketch.noFill();
        sketch.ellipse(prevx, prevy, radius * 2);
        sketch.stroke(
            getComputedStyle(document.documentElement).getPropertyValue(
                "--global-text-color"
            )
        );
        sketch.line(prevx, prevy, x, y);
    }
    return sketch.createVector(x, y);
}

function linspace(startValue, stopValue, cardinality) {
    var arr = [];
    var step = (stopValue - startValue) / cardinality;
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + step * i);
    }
    return arr;
}
