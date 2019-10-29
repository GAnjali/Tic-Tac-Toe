import React from 'react'
import Square from './square'
import {mount, shallow} from 'enzyme';
import Board from "../Board/board";

it('Square component renders without crashing', function () {
    let squares = Array(9).fill(null);
    shallow(<Square/>);
});

it('Should call onClick by clicking on Square square', () => {
    let squares = Array(9).fill(0);
    let onClick = jest.fn();
    let wrapper = mount(<Square squares={squares} onClick={onClick}/>);
    wrapper.find('button.square').first().simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
});