import React from 'react'
import Board from './board'
import {shallow, mount} from 'enzyme'

it('Board component renders without crashing', () => {
    let squares = Array(9).fill(1);
    shallow(<Board squares={squares}/>);
});