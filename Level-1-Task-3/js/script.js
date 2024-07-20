let btn = document.querySelector('#convert-btn');

function celToFahr(c) {
    return (c * 9 / 5) + 32;
}

function fahrToCel(f) {
    return (f - 32) * 5 / 9;
}

function celToKel(c) {
    return parseFloat(c) + 273.15;
}

function kelToCel(k) {
    return k - 273.15;
}

btn.addEventListener("click", () => {
    let val = document.querySelector('#input-value').value;
    let from = document.querySelector("#from-unit").value;
    let to = document.querySelector("#to-unit").value;
    let result = document.querySelector('#result-value');
    let degree = (to === 'K') ? '' : '\u00B0';

    if (val === "") {
        alert("Please Enter Any Value !!!");
        return;
    }

    if (from === to) {
        result.value = val;
    }

    if (from === 'C') {
        if (to === 'F') {
            result.value = celToFahr(val);

        } else if (to === 'K') {
            result.value = celToKel(val);
        }
    }
    else if (from === 'F') {
        if (to === 'C') {
            result.value = fahrToCel(val);

        } else if (to === 'K') {
            result.value = celToKel(fahrToCel(val));
        }
    }
    else if (from === 'K') {
        if (to === 'C') {
            result.value = kelToCel(val);

        } else if (to === 'F') {
            result.value = celToFahr(kelToCel(val));
        }
    }

    result.value = `${parseFloat(result.value).toFixed(2)} ${degree}${to}`;
});