import SelectArea from '../SelectArea'
import { React, expect, sinon, RTU, render, findByTag, scryByTag, scryByType } from '__tests__'

describe('<SelectArea />', () => {
  var selectArea, options, value, input

  describe('without any argument', () => {
    beforeEach(() => {
      selectArea = render(<SelectArea />)
    })

    it('renders', () => {
      expect(selectArea).to.exist
    })
  })

  describe('value', () => {
    it('can be get and set by an array', () => {
      options = ['foo', 'bar', 'baz']
      value = options.slice(1)
      selectArea = render(<SelectArea options={options} value={value} />)

      expect(selectArea.value).to.deep.equal(value)
    })
  })

  describe('click', () => {
    var handleChange = sinon.spy()

    beforeEach(() => {
      options = ['foo', 'bar', 'baz']
      selectArea = render(
        <SelectArea
          renderButton={() => <span />}
          onChange={handleChange}
          options={options} />
      )

      const buttons = scryByTag(selectArea, 'span')
      RTU.Simulate.click(buttons[0])
    })

    it('triggers change handler with the new value', () => {
      expect(handleChange).to.have.been.calledWith(options.slice(0, 1))
    })

    it('does not change the value', () => {
      expect(selectArea.value).to.be.empty
    })
  })
})
