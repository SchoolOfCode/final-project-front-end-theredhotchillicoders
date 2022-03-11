import TimeButton from './TimeButton'
import { render, screen } from '@testing-library/react'

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
    it('contains the correct ID to assign background colour', async () => {
        render(
            <TimeButton
                time={FitnessInfo.time}
                setInfo={jest.fn()}
                Info={FitnessInfo}
                category={FitnessInfo.category}
            ></TimeButton>
        )
        const actual = screen.getByTestId('TimeButtonCard')
        expect(actual).toHaveAttribute('id', 'fitness')
    })
    it(`contains the time: ${FitnessInfo.time}`, () => {
        render(
            <TimeButton
                time={FitnessInfo.time}
                setInfo={jest.fn()}
                Info={FitnessInfo}
                category={FitnessInfo.category}
            ></TimeButton>
        )
        const actual = screen.getByText(FitnessInfo.time)
        expect(actual).toBeInTheDocument()
    })
})
describe('Wellbeing activity button', () => {
    it('contains the correct ID to assign background colour', () => {
        render(
            <TimeButton
                time={WellbeingInfo.date}
                setInfo={jest.fn()}
                Info={WellbeingInfo}
                category={WellbeingInfo.category}
            ></TimeButton>
        )
        const actual = screen.getByTestId('TimeButtonCard')
        expect(actual).toHaveAttribute('id', 'wellbeing')
    })
    it(`contains the time: ${WellbeingInfo.time}`, () => {
        render(
            <TimeButton
                time={WellbeingInfo.time}
                setInfo={jest.fn()}
                Info={WellbeingInfo}
                category={WellbeingInfo.category}
            ></TimeButton>
        )
        const actual = screen.getByText(WellbeingInfo.time)
        expect(actual).toBeInTheDocument()
    })
})
