/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Welcome from '../components/Welcome';

describe('<Welcome />', () => {


	it('has only one <h1>', () => {
		const wrapper = shallow(<Welcome />);
		expect(wrapper.find('h1').length).toBe(1)
	})
	
	it('has only one <p>', () => {
		const wrapper = shallow(<Welcome />);
		expect(wrapper.find('p').length).toBe(1)
	})
	
	/*it('inner text of "<h1>" is welcome', () => {
		const wrapper = shallow(<Welcome />);
		expect(wrapper.find('h1').first().props().title).toBe("Welcome !")
	})*/

    /*it('will success', () => {
        expect(true).toBe(true)
    })*/
})