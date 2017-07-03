/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header';

describe('<Header />', () => {

	it('has a "<title>" tag', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('title').text()).toBe("Estimeo Highlights")
	})
	
	it('link 1 is registered', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.contains('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />'))
	})
	
	it('link 2 is registered', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.contains(' <link rel="stylesheet" href="/static/css/estimeo-style.css"/>'))
	})
	
	it('has only one <style>', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('style').length).toBe(1)
	})

    /*it('will fail', () => {
        expect(false).toBe(true)
    })*/
})