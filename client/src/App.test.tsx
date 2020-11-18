import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Form from './Form'

describe('Probando aplicacion de React', ()=>{
  let wrapper: any

  beforeEach(()=>{
    wrapper = shallow(<Form />)
  })
})
