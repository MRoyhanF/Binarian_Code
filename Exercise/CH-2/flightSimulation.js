const { 
    AltitudeTooHighError, 
    InvalidAltitudeError, 
    takeOff 
} = require('./errors');

function flightSimulation(altitude) {
    try {
        const message = takeOff(altitude);
        console.log(message);
    } catch (error) {
        if (error instanceof AltitudeTooHighError || error instanceof InvalidAltitudeError) {
            console.error("Error: " + error.message);
        } else {
            console.error("Error: " + error.message);
        }
    }
}

flightSimulation(12000);
flightSimulation(-500);
flightSimulation(8000);
flightSimulation("dfsfsd");