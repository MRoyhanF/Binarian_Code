class AltitudeTooHighError extends Error {
    constructor(message) {
        super(message);
        this.name = "Ketinggian Terlalu Tinggi";
    }
}

class InvalidAltitudeError extends Error {
    constructor(message) {
        super(message);
        this.name = "Ketinggian Tidak Valid";
    }
}

function takeOff(altitude) {
    if (altitude > 10000) {
        throw new AltitudeTooHighError("Ketinggian terlalu tinggi!");
    }
    if (altitude < 0) {
        throw new InvalidAltitudeError("Ketinggian tidak valid!");
    }
    return "Pesawat lepas landas menuju ketinggian " + altitude + " meter. 🛫";
}

module.exports = {
    AltitudeTooHighError,
    InvalidAltitudeError,
    takeOff
};
