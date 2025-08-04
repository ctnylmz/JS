// Driver
// Passenger
// Booking

class Driver {
    constructor(name) {
        this.name = name
    }
}

class Passenger {
    constructor(name,location) {
        this.name = name
        this.bookings = []
        this.location = location
    }

    book(driver,origin, destination) {
        const booking = new Booking(driver, this,origin, destination)

        this.bookings.push(booking)
    }
}

class Booking {
    constructor(driver, passenger,orgin, destination) {
        this.driver = driver
        this.passenger = passenger
        this.origin = orgin
        this.destination = destination
    }
}

const ali = new Passenger('ali',"Şişli");
const yaman = new Driver('yaman');

ali.book(yaman.name, 'Şişli',"Üsküdar")

console.log(ali);


