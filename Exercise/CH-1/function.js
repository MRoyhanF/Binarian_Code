function luasSegitiga(alas, tinggi) {
    console.log("\n Segitiga -- alas:", alas, "tinggi:", tinggi);
    const area = 0.5 * alas * tinggi;
    console.log("Luas Segitiga:", area);
    return area;
}

function volumeKubus(sisi) {
    console.log("\n Kubus -- sisi:", sisi);
    const volume = Math.pow (sisi,3);
    console.log("Volume Kubus:", volume);
    return volume;
}

function volumeTabung(jj, tinggi) {
    console.log("\n Tabung -- jj:", jj, "tinggi:", tinggi);

    // const pi = 3.14159;
    const volume = Math.PI * Math.pow(jj, 2) * tinggi;
    console.log("Volume Tabung:", volume);
    return volume;
}

// luasSegitiga(5, 10);
// volumeKubus(4);
// volumeTabung(3, 7);



function first(min, max) {
    if (min > max) return;

    let output = '';

    output = space(output, min);

    output = number(output, 0, max + 1 - min);

    console.log(output);

    first(min + 1, max);
}

function space(output, count) {
    if (count < 0) return output;
    return space(output + '  ', count - 1);
}

function number(output, current, max) {
    if (current >= max) return output;
    return number(output + current + ' ', current + 1, max);
}

// first(0, 9);


function second(i , max) {
    if (i > max ) return;
    let output = "";

    output = rowNumber(output, i, 0, max);
    console.log(output);

    second(i + 1, max);
}

function rowNumber(output, i, j, max) {
    if (j >= max) return output;
    let temp = i * j;
    if (temp > 9) {
        output += temp + ' ';
    } else {
        output += temp + '  ';
    }

    return rowNumber(output, i, j + 1, max);
}

// second(0, 9);

function ccc2(i, end) {
    if (i > end) return;
    printRow(i, 0);
    ccc2(i + 1);
}

function printRow(i, j) {
    if (j >= 10) {
        console.log("");
        return;
    }

    let temp = i * j;
    let output = temp > 9 ? temp + ' ' : temp + '  ';
    process.stdout.write(output);
    printRow(i, j + 1);
}

// ccc2(0, 9);


