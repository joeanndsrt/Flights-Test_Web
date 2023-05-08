export interface IFlights {
    type: string;
    class: string;
    adults: number;
    childs?: number;
    tours:[
        departureDate: Date,
        returnDate: Date,
        airportOriginCode: string,
        airportDestinationCode: string
    ]
}