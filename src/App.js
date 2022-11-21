import { styled } from 'baseui';
import { Heading, HeadingLevel } from 'baseui/heading'
import { Block } from 'baseui/block';
import { StatefulTabs, Tab } from "baseui/tabs-motion";
import NavBar from './components/navbar';

export default function App() {
  return (
    <Block className='main-block'>
      <HeadingLevel>
        <NavBar />
      </HeadingLevel>
    </Block>
  );
}