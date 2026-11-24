import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import App from '../App.vue'

describe('App', () => {
  it('renders the landing sections', () => {
    const wrapper = mount(App, { global: { plugins: [createPinia()] } })

    expect(wrapper.text()).toContain('Long story.')
    expect(wrapper.text()).toContain('Short link.')
    expect(wrapper.text()).toContain('Make room for a shorter link.')
    expect(wrapper.text()).toContain('Three steps. Zero fuss.')
    expect(wrapper.text()).toContain('What is Kira URL?')
    expect(wrapper.text()).toContain('Your next link, a little lighter.')
  })

  it('opens the first FAQ answer and toggles it closed', async () => {
    const wrapper = mount(App, { global: { plugins: [createPinia()] } })

    const toggle = wrapper
      .findAll('button')
      .find((button) => button.text().includes('What is Kira URL?'))
    expect(toggle).toBeDefined()
    expect(wrapper.text()).toContain('A small tool for making long URLs shorter')

    await toggle!.trigger('click')
    expect(wrapper.text()).not.toContain('A small tool for making long URLs shorter')
  })
})
