import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import BusinessRegistration from '../../components/business/BusinessRegistration';
import axios from 'axios';
// import Notifications from 'react-notify-toast';


describe(<BusinessRegistration />, () => {
    let wrapper,component;
    wrapper = shallow(<BusinessRegistration />);
    // component = wrapper.find(BusinessRegistration).dive()
    

    it('should find state undefined', ()=> {
        

    });

    it('submit a valid form', () => {
        
    })


})