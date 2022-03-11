import Task from './Task.js'
import { render, screen } from '@testing-library/react'

const todo = {
    date: new Date(),
    title: 'Salad',
    category: 'recipe',
    description: '',
    userid: 1234,
}

const todosArray = [
    {
        id: 164,
        userid: 'bq6A8sQrpdaaDuDUvXux1c14bi12',
        date: '2022-03-06T00:00:00.000Z',
        title: 'Running',
        category: 'fitness',
        description: 'run to the shops',
        duration: '15 mins',
        image: null,
        iscomplete: true,
    },
    {
        id: 170,
        userid: 'bq6A8sQrpdaaDuDUvXux1c14bi12',
        date: '2022-03-07T00:00:00.000Z',
        title: 'Caramel Cake',
        category: 'recipe',
        description:
            'http://www.lottieanddoof.com/2009/02/my-favorite-cake-period/',
        duration: '0 mins',
        image: null,
        iscomplete: true,
    },
    {
        id: 171,
        userid: 'bq6A8sQrpdaaDuDUvXux1c14bi12',
        date: '2022-03-07T00:00:00.000Z',
        title: 'Yoga',
        category: 'wellbeing',
        description: 'Do yoga',
        duration: '0 mins',
        image: null,
        iscomplete: false,
    },
    {
        id: 172,
        userid: 'bq6A8sQrpdaaDuDUvXux1c14bi12',
        date: '2022-03-07T00:00:00.000Z',
        title: 'Drink 2L of water',
        category: 'goals',
        description: 'Drink 2L water',
        duration: '0 mins',
        image: null,
        iscomplete: false,
    },
]

const filteredToDos = []

describe('Task tests', () => {
    test.each(todosArray)(
        `contains the correct title ${todo.title}`,
        (todo) => {
            render(
                <Task
                    todo={todo}
                    deleteTaskOnClick={jest.fn()}
                    setFilteredToDos={jest.fn()}
                    filteredToDos={filteredToDos}
                ></Task>
            )
            const element = screen.getByTestId('Task')
            expect(element).toHaveTextContent(todo.title)
        }
    )
    test.each(todosArray)(
        `contains the correct duration ${todo.duration} unless a recipe`,
        (todo) => {
            render(
                <Task
                    todo={todo}
                    deleteTaskOnClick={jest.fn()}
                    setFilteredToDos={jest.fn()}
                    filteredToDos={filteredToDos}
                ></Task>
            )
            const element = screen.getByTestId('Task')
            if (todo.category !== 'recipe') {
                expect(element).toHaveTextContent(todo.duration)
            }
        }
    )
    test.each(todosArray)(`does not contain a duration if a recipe`, (todo) => {
        render(
            <Task
                todo={todo}
                deleteTaskOnClick={jest.fn()}
                setFilteredToDos={jest.fn()}
                filteredToDos={filteredToDos}
            ></Task>
        )
        const element = screen.getByTestId('Task')
        if (todo.category === 'recipe') {
            expect(element).not.toHaveTextContent(todo.duration)
        }
    })
    test.each(todosArray)(`contains the correct id to assign CSS`, (todo) => {
        render(
            <Task
                todo={todo}
                deleteTaskOnClick={jest.fn()}
                setFilteredToDos={jest.fn()}
                filteredToDos={filteredToDos}
            ></Task>
        )
        const element = screen.getByTestId('Task')
        expect(element).toHaveAttribute('id', todo.category)
    })
    test.each(todosArray)(
        `checkbox is currently checked/unchecked based on iscomplete: ${todo.iscomplete}`,
        (todo) => {
            render(
                <Task
                    todo={todo}
                    deleteTaskOnClick={jest.fn()}
                    setFilteredToDos={jest.fn()}
                    filteredToDos={filteredToDos}
                ></Task>
            )
            const element = screen.getByTestId('TaskCheckbox')
            if (todo.iscomplete === true) {
                expect(element).toBeChecked()
            } else {
                expect(element).not.toBeChecked()
            }
        }
    )
    test.each(todosArray)(
        `has a url if a recipe: ${todo.description}`,
        (todo) => {
            render(
                <Task
                    todo={todo}
                    deleteTaskOnClick={jest.fn()}
                    setFilteredToDos={jest.fn()}
                    filteredToDos={filteredToDos}
                ></Task>
            )
            if (todo.category === 'recipe') {
                const element = screen.getByRole('link', {
                    href: todo.description,
                })
                expect(element).toBeInTheDocument()
                expect(element).toHaveAttribute('href', todo.description)
            }
        }
    )
    test.each(todosArray)(
        `has no url if not recipe: ${todo.description}`,
        (todo) => {
            render(
                <Task
                    todo={todo}
                    deleteTaskOnClick={jest.fn()}
                    setFilteredToDos={jest.fn()}
                    filteredToDos={filteredToDos}
                ></Task>
            )
            if (todo.category !== 'recipe') {
                const element = screen.getByTestId('Task')
                expect(element).toBeInTheDocument()
                expect(element).not.toHaveAttribute('href', todo.description)
            }
        }
    )
})
