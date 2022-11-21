import React, { useState, useEffect } from "react";
import { StatefulDatepicker } from 'baseui/datepicker';
import { useDispatch, useSelector } from "react-redux";
import { Block } from 'baseui/block';
import { Heading } from "baseui/heading";
import { Button, SIZE } from "baseui/button";
import { Spinner } from "baseui/icon";
import { useNavigate } from "react-router";
import { useStyletron } from 'baseui';
import { offerSearch, confirmBooking } from "../utils/tiqwa"
import { Toast, KIND, ToasterContainer } from 'baseui/toast';
import { DatePicker } from 'baseui/datepicker';
import { addDays } from 'date-fns';
import { Radio, RadioGroup } from 'baseui/radio';
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Select } from "baseui/select";


export default function SearchFlight() {
    const [css, theme] = useStyletron();
    const [flightType, setFlightType] = useState()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [availablelights, setAvailableFlights] = useState('')
    const [singleDate, setSingleDate] = React.useState(null);
    const [rangeDate, setRangeDate] = React.useState([
        new Date(),
        addDays(new Date(), 4),
    ]);
    const [value, setValue] = React.useState('1');


    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({

    //     });
    // }, [])
    const handleTypeChange = (e) => {
        setValue(e.target.value)

    }
    const handleSearch = () => {
        let adults = '1'
        let cabin = 'economy' //premium_economy business first
        let depature_date = '2022-10-30'
        let destination = 'ABV'
        let origin = 'LOS'
        let return_date = '2022-11-02'
        offerSearch(adults, cabin, origin, depature_date, destination, return_date);
        setSuccess('searching')
        setLoading(true)
        if (adults === "" || cabin === "" || origin === "", depature_date === "", destination === "", return_date === "") {
            setError('please fill in all fields')
        } else {
            offerSearch(adults, cabin, origin, depature_date, destination, return_date)
        }
    }



    return (
        <>
            <Heading>
                Search for Flights
            </Heading>
            <div
                className={
                    css({
                        padding: '1rem',
                        width: `calc((200% - ${theme.sizing.scale800
                            }) / 3)`,
                    })}
            >
                <div>
                    <div>

                        <RadioGroup
                            align="horizontal"
                            name="horizontal"
                            onChange={handleTypeChange}
                            value={value}
                        >
                            <Radio value="1">One Way</Radio>
                            <Radio value="2">Round Trip</Radio>
                        </RadioGroup>
                        {value == '1' && (
                            <><DatePicker
                                value={singleDate}
                                onChange={({ date }) => setSingleDate(date)} /><br /></>
                        )

                        }
                        {value == '2' && (
                            <DatePicker
                                range
                                value={rangeDate}
                                onChange={({ date }) => setRangeDate(date)}
                                placeholder="YYYY/MM/DD – YYYY/MM/DD"
                                quickSelect
                            />
                        )

                        }
                    </div>
                    <FormControl
                        label={() => "Adults"}
                        caption={() => "number of adults booking the flight"}
                    >
                        <Input
                            type="number"
                        />
                    </FormControl>
                    <FormControl
                        label={() => "Cabin"}
                        caption={() => "Flight cabin type"}
                    >

                        <Input
                            type="text"
                        />
                    </FormControl>
                    <FormControl
                        label={() => "Destination"}
                        caption={() => "Flight arrival airport "}
                    >
                        <Input
                            type="text"
                        />
                    </FormControl>
                    <FormControl
                        label={() => "Origin"}
                        caption={() => "Flight depature airport "}
                    >
                        <Input
                            type="text"
                        />
                    </FormControl>
                </div>
                <div >

                </div>
                <div>
                    <Button
                        onClick={() => handleSearch()}
                        size={SIZE.compact}
                    >
                        Search Flight
                    </Button>
                </div>

            </div>
            {loading && (
                <Spinner />
            )

            }

            {error && (
                <><ToasterContainer />
                    < p className="" > {error} </p></>
            )
            }

            {
                success && (
                    <><ToasterContainer />
                        <p className="" > {success} </p></>
                )
            }

        </>
    );
}