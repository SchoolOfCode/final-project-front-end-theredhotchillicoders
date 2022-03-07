import ActivityButton from './ActivityButton.js'
import { fireEvent, render, screen } from '@testing-library/react'
import { dummyFitness } from '../../DummyData/DummyFitnessData'
import { dummyWellbeing } from '../../DummyData/DummyWellbeingData'

const Info = {
    date: new Date(),
    title: '',
    category: '',
    description: '',
    userid: 1234,
}

Info,
    describe('Fitness activity button', () => {
        it('contains the correct background colour', () => {
            render(
                <ActivityButton
                    title={dummyFitness[0].title}
                    description={dummyFitness[0].description}
                    category={dummyFitness[0].category}
                    image={dummyFitness[0].image}
                    setInfo={jest.fn()}
                    Info={Info}
                ></ActivityButton>
            )
            const colour = '#f58452'
            const actual = screen.getByTestId('ActivityButtonCard')
            expect(actual).toHaveStyle(`background: ${colour}`)
        })
        test.each(dummyFitness)(
            `contains the correct title $title`,
            ({ title, description, category, image }) => {
                render(
                    <ActivityButton
                        title={title}
                        description={description}
                        category={category}
                        image={image}
                        setInfo={jest.fn()}
                        Info={Info}
                    ></ActivityButton>
                )
                const actual = screen.getByText(title)
                expect(actual).toBeInTheDocument()
            }
        )
    })

describe('Wellbeing activity button', () => {
    it('contains the correct background colour', () => {
        render(
            <ActivityButton
                title={dummyWellbeing[0].title}
                description={dummyWellbeing[0].description}
                category={dummyWellbeing[0].category}
                image={dummyWellbeing[0].image}
                setInfo={jest.fn()}
                Info={Info}
            ></ActivityButton>
        )
        const colour = '#9996d9'
        const actual = screen.getByTestId('ActivityButtonCard')
        expect(actual).toHaveStyle(`background: ${colour}`)
    })
    test.each(dummyWellbeing)(
        `contains the title $title`,
        ({ title, description, category, image }) => {
            render(
                <ActivityButton
                    title={title}
                    description={description}
                    category={category}
                    image={image}
                    setInfo={jest.fn()}
                    Info={Info}
                ></ActivityButton>
            )
            const actual = screen.getByText(title)
            expect(actual).toBeInTheDocument()
        }
    )
    test.each(dummyWellbeing)(
        `contains the image`,
        ({ title, description, category, image }) => {
            render(
                <ActivityButton
                    title={title}
                    description={description}
                    category={category}
                    image={image}
                    setInfo={jest.fn()}
                    Info={Info}
                ></ActivityButton>
            )
            const actual = screen.getByAltText(title)
            expect(actual).toBeInTheDocument()
            expect(actual).toHaveAttribute('src', image)
        }
    )
})
