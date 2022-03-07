import TimeButton from './TimeButton'
import { fireEvent, render, screen } from '@testing-library/react'
import { dummyFitness } from '../../DummyData/DummyFitnessData'
import { dummyWellbeing } from '../../DummyData/DummyWellbeingData'

const FitnessInfo = {
    time: '30 mins',
    title: '',
    category: 'fitness',
    description: '',
    userid: 1234,
}

const WellbeingInfo = {
    time: '15 mins',
    title: '',
    category: 'wellbeing',
    description: '',
    userid: 1234,
}

describe('Fitness activity button', () => {
    it('contains the correct background colour', () => {
        render(
            <TimeButton
                time={FitnessInfo.time}
                setInfo={jest.fn()}
                Info={FitnessInfo}
            ></TimeButton>
        )
        const colour = '#f58452'
        const actual = screen.getByTestId('TimeButtonCard')
        expect(actual).toHaveStyle(`background: ${colour}`)
    })
    it(`contains the time: ${FitnessInfo.time}`, () => {
        render(
            <TimeButton
                time={FitnessInfo.time}
                setInfo={jest.fn()}
                Info={FitnessInfo}
            ></TimeButton>
        )
        const actual = screen.getByText(FitnessInfo.time)
        expect(actual).toBeInTheDocument()
    })
})
describe('Wellbeing activity button', () => {
    it('contains the correct background colour', () => {
        render(
            <TimeButton
                time={WellbeingInfo.date}
                setInfo={jest.fn()}
                Info={WellbeingInfo}
            ></TimeButton>
        )
        const colour = '#9996d9'
        const actual = screen.getByTestId('TimeButtonCard')
        expect(actual).toHaveStyle(`background: ${colour}`)
    })
    it(`contains the time: ${WellbeingInfo.time}`, () => {
        render(
            <TimeButton
                time={WellbeingInfo.time}
                setInfo={jest.fn()}
                Info={WellbeingInfo}
            ></TimeButton>
        )
        const actual = screen.getByText(WellbeingInfo.time)
        expect(actual).toBeInTheDocument()
    })
})
