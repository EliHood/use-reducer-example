import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import FormProvider from './context/FormProvider'

const initProps = {
    name: 'Test',
    age: '21',
}

const initalizedComponent = (props) => {
    return render(
        <FormProvider initValue={props}>
            <App />
        </FormProvider>
    )
}
describe('Render App', () => {
    afterEach(cleanup)
    beforeEach(() => {
        initalizedComponent(initProps)
    })
    it('Should render App', () => {
        const wrapper = screen.getByTestId('app-test')
        expect(wrapper).toBeInTheDocument()
    })
    it('Should test name change', () => {
        const name = screen.getByPlaceholderText(
            'Enter A Name'
        ) as HTMLInputElement
        fireEvent.change(name, {
            target: {
                value: 'Bob',
            },
        })
        expect(name.value).toBe('Bob')
    })
    it('Should test age change', () => {
        const name = screen.getByPlaceholderText(
            'Enter Age'
        ) as HTMLInputElement
        fireEvent.change(name, {
            target: {
                value: '20',
            },
        })
        expect(name.value).toBe('20')
    })
})
