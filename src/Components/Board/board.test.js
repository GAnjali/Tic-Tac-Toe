import React from 'react'
import Board from './board'
import {shallow, mount} from 'enzyme'

it('Board component renders without crashing', () => {
    let squares = Array(9).fill(1);
    shallow(<Board squares={squares}/>);
});

it('Should call onClick by clicking on Board square', () => {
   let squares = Array(9).fill(0);
   let onClick = jest.fn();
   let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
   wrapper.find('button.square').first().simulate('click');
   expect(onClick).toBeCalledWith(0);
});