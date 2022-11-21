import React, { useState, useEffect } from "react";
import { Block } from 'baseui/block';
import { bookFlight, confirmBooking } from "../utils/tiqwa";
import SearchFlight from './SearchFlight';
import { Button } from "baseui/button";
// import { standardCheckout } from "../utils/seerBit";
import axios from "axios";

export default function BookFlight() {
    const [availableFlights, setAvailableFlights] = useState([])
    const [passengerData, setPassengerData] = useState([])

    const handleBooking = () => {
        //mock flight id is used
        let flight_id;
        let rez = confirmBooking(flight_id)
        function confirmBooking(flight_id) {
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
                console.log(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }
        setAvailableFlights(rez)

    }
    const handleBookFlight = () => {
        //mock data is used
        let passengerData;
        let res = bookFlight(passengerData)
        console.log(res)
        setPassengerData(res)
        // standardCheckout(
        //     50000,
        //     "www.testapp.com",
        //     "NG",
        //     "NGN",
        //     "testmerchant@mailinator.com",
        //     Date.now()
        // )
    }
    return (
        <>
            <Block>
                <SearchFlight />
                {availableFlights && (
                    <p>{availableFlights}</p>
                )}
                <Button
                    onClick={handleBooking}
                >
                    confirm booking
                </Button>
                <p>{passengerData}</p>
                <Button
                    onClick={handleBookFlight}
                >
                    Order flight
                </Button>
            </Block>
        </>
    );
}