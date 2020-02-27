import React from 'react';
import Hello from '../routing/Hello';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const tree = shallow(<Hello />);
    tree.update()
    expect(tree).toMatchSnapshot();
});


it('contains correct id', () => {
    const bloop = 1;
    const hello = shallow(<Hello match={bloop} />);
    expect(hello.containsMatchingElement(<p>Hello, the id is 1</p>)).toBeTruthy();
    expect(hello).toMatchSnapshot();
})

