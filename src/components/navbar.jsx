import * as React from 'react';
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Avatar } from 'baseui/avatar';
import { useStyletron, expandBorderStyles } from 'baseui/styles';
import { Button } from 'baseui/button';
import { StyledLink } from "baseui/link";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StatefulSelect as Search, TYPE } from 'baseui/select';
import Flight from './flights';
import Book from './book';
import Owner from "./flightOwner";
import Claims from "./claims";
import Passenger from './passenger';
import Landing from './landing';

const SuperLink = props => <StyledLink $as={Link} {...props} />;
const options = {
    options: [
        { id: 'AliceBlue', color: '#F0F8FF' },
        { id: 'AntiqueWhite', color: '#FAEBD7' },
        { id: 'Aqua', color: '#00FFFF' },
        { id: 'Aquamarine', color: '#7FFFD4' },
        { id: 'Azure', color: '#F0FFFF' },
        { id: 'Beige', color: '#F5F5DC' },
        { id: 'Bisque', color: '#FFE4C4' },
        { id: 'Black', color: '#000000' },
    ],
    labelKey: 'id',
    valueKey: 'color',
    placeholder: 'Search flights',
    maxDropdownHeight: '300px',
};

export default function Navbar() {
    return (
        <Router>
            <div>
                <HeaderNavigation className={'nav-bar'}>
                    <NavigationList $align={ALIGN.left}>
                        <NavigationItem>
                            <SuperLink to="/">Flhye</SuperLink>
                        </NavigationItem>
                    </NavigationList>
                    <NavigationList $align={ALIGN.center} />
                    <NavigationList $align={ALIGN.right}>
                        <NavigationItem>
                            <SuperLink to="/flight/new">Book</SuperLink>
                        </NavigationItem>
                        <NavigationItem>
                            <SuperLink to="/flights">Flights</SuperLink>
                        </NavigationItem>

                        <NavigationItem>
                            <SuperLink to="/claims">Claims</SuperLink>
                        </NavigationItem>
                    </NavigationList>
                    <NavigationList $align={ALIGN.right}>
                        <NavigationItem style={{ width: '200px' }}>
                            <Search
                                {...options}
                                type={TYPE.search}
                                getOptionLabel={props => props.option.id || null}
                                onChange={() => { }}
                            />
                        </NavigationItem>
                        <NavigationItem>
                            <Link to="/passenger">
                                <Avatar
                                    overrides={{
                                        Root: {
                                            style: ({ $theme }) => ({
                                                ...expandBorderStyles($theme.borders.border500),
                                            }),
                                        },
                                    }}
                                    name="kolade victor"
                                    size="scale1000"
                                    src="https://not-a-real-image.png"
                                    Link="/profile"
                                />
                            </Link>
                        </NavigationItem>
                    </NavigationList>
                </HeaderNavigation>
                <div className='p10'>
                    <Routes>
                        <Route path="/flights" element={<Flight />} >flights</Route>
                        <Route path="/flight/new" element={<Book />} >book</Route>
                        <Route path="/owner" element={<Owner />} >owner</Route>
                        <Route path="/claims" element={<Claims />} >claims</Route>
                        <Route path="/passenger" element={<Passenger />} >passenger</Route>
                        <Route path="/" element={<Landing />} >Home</Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}