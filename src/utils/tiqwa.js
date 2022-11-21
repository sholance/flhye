//still using tiqwa mock api - a bit tedious gettting past sandbox and prod api cors
import axios from "axios";
const baseUrl = "https://sandbox.tiqwa.com/v1/flight"
const secKey = "sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm"

export const offerSearch = async (adults, cabin, origin, depature_date, destination, return_date) => {
    const options = {
        method: 'GET',
        url: 'https://stoplight.io/mocks/travelwahoo/tiqwa/4296916/search',
        params: {
            origin: 'LOS',
            destination: 'ABV',
            departure_date: '2020-10-30',
            cabin: 'economy',
            adults: '1'
        },
        headers: {
            'Content-Type': 'application/json',
            Prefer: 'code=200, example=Round Trip',
            Authorization: 'Bearer sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}


export function confirmBooking(flight_id) {
    const options = {
        method: 'GET',
        url: 'https://stoplight.io/mocks/travelwahoo/tiqwa/4296916/confirm_price/4b5ea053-12a9-4a63-9196-ba5aa6042583',
        headers: {
            'Content-Type': 'application/json',
            Prefer: 'code=200',
            Authorization: 'Bearer sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
export function bookFlight(flight_id,
    passenger_type,
    first_name,
    last_name,
    dob,
    gender,
    title,
    email,
    phone_number,
    number,
    issuing_date,
    expiry_date,
    issuing_country,
    nationality_country,
    document_type,
    holder
) {

    const options = {
        method: 'POST',
        url: 'https://stoplight.io/mocks/travelwahoo/tiqwa/4296916/book/4b5ea053-12a9-4a63-9196-ba5aa6042583',
        headers: {
            'Content-Type': 'application/json',
            Prefer: 'code=200',
            Authorization: 'Bearer sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm'
        },
        data: {
            passengers: [
                {
                    passenger_type: 'adult',
                    first_name: 'Ogbeni',
                    last_name: 'Lagbaja',
                    dob: '1980-10-11',
                    gender: 'male',
                    title: 'mr',
                    email: 'test@domain.com',
                    phone_number: '+2347038000000',
                    documents: {
                        number: 'A000345633',
                        issuing_date: '2018-10-01',
                        expiry_date: '2022-10-01',
                        issuing_country: 'NG',
                        nationality_country: 'NG',
                        document_type: 'passport',
                        holder: true
                    }
                }
            ]
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
async function bookingDetails(booking_reference) {
    //let booking_reference = TW-FLMSQMQO19
    const options = {
        method: 'GET',
        url: 'https://stoplight.io/mocks/travelwahoo/tiqwa/4296916/ama_0f752b70-8c4d-4e01-aecf-6c7b6a99b68b',
        headers: {
            'Content-Type': 'application/json',
            Prefer: 'code=200',
            Authorization: 'Bearer sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
async function cancelBooking(booking_reference) {

    const options = {
        method: 'POST',
        url: 'https://stoplight.io/mocks/travelwahoo/tiqwa/4296916/ama_0f752b70-8c4d-4e01-aecf-6c7b6a99b68b',
        headers: {
            'Content-Type': 'application/json',
            Prefer: 'code=200',
            Authorization: 'Bearer sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
async function issueTicket(reference) {

    //let reference = TW-FLMSQMQO19 flight reference must be owned by user

    const options = {
        method: 'POST',
        url: 'https://stoplight.io/mocks/travelwahoo/tiqwa/4296916/pay/ama_0f752b70-8c4d-4e01-aecf-6c7b6a99b68b',
        headers: {
            'Content-Type': 'application/json',
            Prefer: 'code=200',
            Authorization: 'Bearer sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
async function airlines() {

    const options = {
        method: 'GET',
        url: 'https://stoplight.io/mocks/travelwahoo/tiqwa/4371211/airlines',
        headers: {
            'Content-Type': 'application/json',
            Prefer: 'code=200',
            Authorization: 'Bearer sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}
async function airportList(keyword) {
    // let keyword = Lagos
    const options = {
        method: 'GET',
        url: 'https://stoplight.io/mocks/travelwahoo/tiqwa/4371211/airports',
        params: { keyword: 'Lagos' },
        headers: {
            'Content-Type': 'application/json',
            Prefer: 'code=200',
            Authorization: 'Bearer sandbox_OWI0OWJkN2EtYzM2NC00YzZjLTlmMTUtNGRmODZhY2YyNTFm'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

