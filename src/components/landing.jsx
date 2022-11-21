import React from 'react'
import { useStyletron } from 'baseui';
import { Heading } from 'baseui/heading';


function Landing() {
    const [css, theme] = useStyletron();

    return (
        <div>
            <div
                className={css({
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '200px',
                    textAlign: 'center'
                })}
            >
                <Heading>
                    BOOK FLIGHTS - PAY ONLY WHEN YOUR FLIGHT STARTS
                </Heading>
            </div>
        </div>
    )
}

export default Landing