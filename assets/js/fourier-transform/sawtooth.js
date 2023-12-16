let time = 0;
let path = { x: [], y: [] };
let slider;

function setup() {
    slider = createSlider(1, 10, 1);
    canvas = createCanvas(0.69 * windowWidth, 0.69 * windowHeight);
    html_slider_value = document.getElementById("slider-value");
    html_slider_value.style.position = "relative";
    html_slider_value.style.left = 0.2 * canvas.width + "px";
    // attach to DOM with id=sawtooth
    canvas.parent("sawtooth");
    slider.parent("slider");
}

function sawtooth(n) {
    // returns fourier transform of (1/1)*sin(1*t) + (1/2)*sin(2*t) + ... + (1/n)*sin(n*t)
    let t = 0;
    let scale = 100;
    if (n < 5) {
        t = linspace(0, 2 * Math.PI, 100);
    } else {
        t = linspace(0, 2 * Math.PI, 25 * n);
    }
    let inp = [];
    for (let i = 0; i < t.length; i++) {
        inp[i] = new ComplexNumber(0, 0);
        for (let j = 1; j <= n; j++) {
            inp[i] = inp[i].add(
                new ComplexNumber((scale / j) * sin(j * t[i]), 0)
            );
        }
    }
    return discreteFourierTransform(inp);
}

function draw() {
    html_slider_value.innerHTML = "N = " + slider.value();
    background(
        getComputedStyle(document.documentElement).getPropertyValue(
            "--global-bg-color"
        )
    );
    const x_translate = canvas.width / 3;
    const y_translate = canvas.height / 2;

    translate(x_translate, y_translate);

    let x = 0;
    let y = 0;

    let fourier = sawtooth(slider.value());
    let V = epiCycles(x, y, HALF_PI, fourier, time);
    path.x.unshift(V.x);
    path.y.unshift(V.y);

    translate(canvas.width / 4, 0);
    beginShape();
    noFill();
    stroke(
        getComputedStyle(document.documentElement).getPropertyValue(
            "--global-text-color"
        )
    );
    for (let i = 0; i < path.y.length; i++) {
        vertex(i, path.y[i]);
    }
    line(V.x - canvas.width / 4, V.y, 0, V.y);
    endShape();

    const dt = TWO_PI / fourier.length;
    time += dt;

    slider.changed(() => {
        time = 0;
        path = { x: [], y: [] };
    });

    if (path.x.length > 500) {
        path.x.pop();
        path.y.pop();
    }
}

function windowResized() {
    resizeCanvas(0.69 * windowWidth, 0.69 * windowHeight);
    html_slider_value = document.getElementById("slider-value");
    html_slider_value.style.position = "relative";
    html_slider_value.style.left = 0.2 * canvas.width + "px";
}
