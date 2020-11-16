import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Contador from './Contador'

describe('Probando aplicacion de React', ()=>{
  let wrapper: any

  beforeEach(()=>{
    wrapper = shallow(<Contador />)
  })
  test('asegurandome que diga lo que tiene que ser', () => {
    expect(wrapper.find('a').text()).toContain("Esta es una aplicacion creada en react")
  });
  test("renderizar un boton con texto incremental",()=> {
    expect(wrapper.find('#incrementar-btn').text()).toBe('incrementar')
  }) 

  test("contador en 0",()=> {
    expect(wrapper.find('#value-contador').text()).toBe("0")
  })

  test("renderizar el click, el incremento y decremento del valor",()=>{
    wrapper.find("#incrementar-btn").simulate('click')
    expect(wrapper.find("#value-contador").text()).toBe("1")
    wrapper.find("#decrementar-btn").simulate('click')
    expect(wrapper.find("#value-contador").text()).toBe("0")
  })

})
