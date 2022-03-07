import RecipeCard from './RecipeCard'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { dummyFitness } from '../../DummyData/DummyFitnessData'
import { dummyWellbeing } from '../../DummyData/DummyWellbeingData'

const Info = {
    date: new Date(),
    title: 'Salad',
    category: 'recipe',
    description: '',
    userid: 1234,
}

const recipe = {
    uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_dd4a76ee9f4ce2efd21e40e3d620f8c4',
    label: 'Steak & Chips Salad',
    image: 'https://www.edamam.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg',
    images: {
        THUMBNAIL: {
            url: 'https://www.edamam.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e-s.jpg',
            width: 100,
            height: 100,
        },
        SMALL: {
            url: 'https://www.edamam.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e-m.jpg',
            width: 200,
            height: 200,
        },
        REGULAR: {
            url: 'https://www.edamam.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg',
            width: 300,
            height: 300,
        },
        LARGE: {
            url: 'https://www.edamam.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e-l.jpg',
            width: 600,
            height: 600,
        },
    },
    source: 'BBC Good Food',
    url: 'http://www.bbcgoodfood.com/recipes/3076/',
    shareAs:
        'http://www.edamam.com/recipe/steak-chips-salad-dd4a76ee9f4ce2efd21e40e3d620f8c4/salad',
    yield: 4,
    dietLabels: ['High-Fiber'],
    healthLabels: [
        'Dairy-Free',
        'Gluten-Free',
        'Wheat-Free',
        'Egg-Free',
        'Peanut-Free',
        'Tree-Nut-Free',
        'Soy-Free',
        'Fish-Free',
        'Shellfish-Free',
        'Pork-Free',
        'Crustacean-Free',
        'Celery-Free',
        'Sesame-Free',
        'Lupine-Free',
        'Mollusk-Free',
        'Alcohol-Free',
    ],
    cautions: [],
    ingredientLines: [
        '750.0g bag frozen potato wedges',
        '1.0 tbsp olive oil',
        '2 pieces sirloin steak , about 350g/12oz in total',
        '120.0g bag herb salad',
        '6.0 tbsp honey and mustard salad dessing , bought or homemade',
    ],
    ingredients: [
        {
            text: '750.0g bag frozen potato wedges',
            quantity: 750,
            measure: 'gram',
            food: 'potato',
            weight: 750,
            foodCategory: 'vegetables',
            foodId: 'food_abiw5baauresjmb6xpap2bg3otzu',
            image: 'https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg',
        },
        {
            text: '1.0 tbsp olive oil',
            quantity: 1,
            measure: 'tablespoon',
            food: 'olive oil',
            weight: 13.5,
            foodCategory: 'Oils',
            foodId: 'food_b1d1icuad3iktrbqby0hiagafaz7',
            image: 'https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg',
        },
        {
            text: '2 pieces sirloin steak , about 350g/12oz in total',
            quantity: 2,
            measure: '<unit>',
            food: 'sirloin steak',
            weight: 680,
            foodCategory: 'meats',
            foodId: 'food_aifm62daw1i6txalya881bcetyzn',
            image: 'https://www.edamam.com/food-img/4f1/4f10105d5c8178f25590ca6dfcd37fca.jpg',
        },
        {
            text: '120.0g bag herb salad',
            quantity: 120,
            measure: 'gram',
            food: 'herb',
            weight: 120,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_avsq22zadwyb5cb5sl1byaa4mbo8',
            image: 'https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg',
        },
        {
            text: '6.0 tbsp honey and mustard salad dessing , bought or homemade',
            quantity: 6,
            measure: 'tablespoon',
            food: 'honey',
            weight: 126,
            foodCategory: null,
            foodId: 'food_bn6aoj9atkqx8fbkli859bbbxx62',
            image: 'https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg',
        },
        {
            text: '6.0 tbsp honey and mustard salad dessing , bought or homemade',
            quantity: 6,
            measure: 'tablespoon',
            food: 'mustard',
            weight: 93.3749999984214,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_a34cdj5b0kyuhfbov30xcb50u4dv',
            image: 'https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg',
        },
    ],
    calories: 2922.3049999990526,
    totalWeight: 1782.8749999984213,
    totalTime: 15,
    cuisineType: ['american'],
    mealType: ['lunch/dinner'],
    dishType: ['salad'],
    totalNutrients: {
        ENERC_KCAL: {
            label: 'Energy',
            quantity: 2922.3049999990526,
            unit: 'kcal',
        },
        FAT: {
            label: 'Fat',
            quantity: 123.31372499994727,
            unit: 'g',
        },
        FASAT: {
            label: 'Saturated',
            quantity: 44.72330249999663,
            unit: 'g',
        },
        FATRN: {
            label: 'Trans',
            quantity: 0.008403749999857926,
            unit: 'g',
        },
        FAMS: {
            label: 'Monounsaturated',
            quantity: 54.04817749996556,
            unit: 'g',
        },
        FAPU: {
            label: 'Polyunsaturated',
            quantity: 7.586227499987782,
            unit: 'g',
        },
        CHOCDF: {
            label: 'Carbs',
            quantity: 317.02076249990796,
            unit: 'g',
        },
        'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 0,
            unit: 'g',
        },
        FIBTG: {
            label: 'Fiber',
            quantity: 64.88699999993686,
            unit: 'g',
        },
        SUGAR: {
            label: 'Sugars',
            quantity: 112.23224999998548,
            unit: 'g',
        },
        'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 103.47120000000001,
            unit: 'g',
        },
        PROCNT: {
            label: 'Protein',
            quantity: 165.40822499994096,
            unit: 'g',
        },
        CHOLE: {
            label: 'Cholesterol',
            quantity: 530.4,
            unit: 'mg',
        },
        NA: {
            label: 'Sodium',
            quantity: 1493.9699999825725,
            unit: 'mg',
        },
        CA: {
            label: 'Calcium',
            quantity: 2594.5212499990057,
            unit: 'mg',
        },
        MG: {
            label: 'Magnesium',
            quantity: 619.8399999992423,
            unit: 'mg',
        },
        K: {
            label: 'Potassium',
            quantity: 6443.084999997601,
            unit: 'mg',
        },
        FE: {
            label: 'Iron',
            quantity: 166.20613749997457,
            unit: 'mg',
        },
        ZN: {
            label: 'Zinc',
            quantity: 34.741799999989894,
            unit: 'mg',
        },
        P: {
            label: 'Phosphorus',
            quantity: 2005.3849999982951,
            unit: 'mg',
        },
        VITA_RAE: {
            label: 'Vitamin A',
            quantity: 232.66874999992106,
            unit: 'µg',
        },
        VITC: {
            label: 'Vitamin C',
            quantity: 208.66012499999525,
            unit: 'mg',
        },
        THIA: {
            label: 'Thiamin (B1)',
            quantity: 1.741273749997206,
            unit: 'mg',
        },
        RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.4032424999988948,
            unit: 'mg',
        },
        NIA: {
            label: 'Niacin (B3)',
            quantity: 58.20302874999108,
            unit: 'mg',
        },
        VITB6A: {
            label: 'Vitamin B6',
            quantity: 6.612902499998896,
            unit: 'mg',
        },
        FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 532.6562499998895,
            unit: 'µg',
        },
        FOLFD: {
            label: 'Folate (food)',
            quantity: 532.6562499998895,
            unit: 'µg',
        },
        FOLAC: {
            label: 'Folic acid',
            quantity: 0,
            unit: 'µg',
        },
        VITB12: {
            label: 'Vitamin B12',
            quantity: 7.548,
            unit: 'µg',
        },
        VITD: {
            label: 'Vitamin D',
            quantity: 0,
            unit: 'µg',
        },
        TOCPHA: {
            label: 'Vitamin E',
            quantity: 13.840399999994318,
            unit: 'mg',
        },
        VITK1: {
            label: 'Vitamin K',
            quantity: 2091.284249999978,
            unit: 'µg',
        },
        'Sugar.alcohol': {
            label: 'Sugar alcohol',
            quantity: 0,
            unit: 'g',
        },
        WATER: {
            label: 'Water',
            quantity: 1145.2335499986787,
            unit: 'g',
        },
    },
    totalDaily: {
        ENERC_KCAL: {
            label: 'Energy',
            quantity: 146.11524999995262,
            unit: '%',
        },
        FAT: {
            label: 'Fat',
            quantity: 189.71342307684193,
            unit: '%',
        },
        FASAT: {
            label: 'Saturated',
            quantity: 223.61651249998312,
            unit: '%',
        },
        CHOCDF: {
            label: 'Carbs',
            quantity: 105.67358749996932,
            unit: '%',
        },
        FIBTG: {
            label: 'Fiber',
            quantity: 259.54799999974745,
            unit: '%',
        },
        PROCNT: {
            label: 'Protein',
            quantity: 330.81644999988185,
            unit: '%',
        },
        CHOLE: {
            label: 'Cholesterol',
            quantity: 176.8,
            unit: '%',
        },
        NA: {
            label: 'Sodium',
            quantity: 62.24874999927386,
            unit: '%',
        },
        CA: {
            label: 'Calcium',
            quantity: 259.4521249999006,
            unit: '%',
        },
        MG: {
            label: 'Magnesium',
            quantity: 147.58095238077198,
            unit: '%',
        },
        K: {
            label: 'Potassium',
            quantity: 137.08691489356596,
            unit: '%',
        },
        FE: {
            label: 'Iron',
            quantity: 923.3674305554143,
            unit: '%',
        },
        ZN: {
            label: 'Zinc',
            quantity: 315.8345454544536,
            unit: '%',
        },
        P: {
            label: 'Phosphorus',
            quantity: 286.4835714283279,
            unit: '%',
        },
        VITA_RAE: {
            label: 'Vitamin A',
            quantity: 25.85208333332456,
            unit: '%',
        },
        VITC: {
            label: 'Vitamin C',
            quantity: 231.84458333332805,
            unit: '%',
        },
        THIA: {
            label: 'Thiamin (B1)',
            quantity: 145.1061458331005,
            unit: '%',
        },
        RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 107.94173076914575,
            unit: '%',
        },
        NIA: {
            label: 'Niacin (B3)',
            quantity: 363.76892968744426,
            unit: '%',
        },
        VITB6A: {
            label: 'Vitamin B6',
            quantity: 508.6848076922227,
            unit: '%',
        },
        FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 133.16406249997237,
            unit: '%',
        },
        VITB12: {
            label: 'Vitamin B12',
            quantity: 314.5,
            unit: '%',
        },
        VITD: {
            label: 'Vitamin D',
            quantity: 0,
            unit: '%',
        },
        TOCPHA: {
            label: 'Vitamin E',
            quantity: 92.26933333329545,
            unit: '%',
        },
        VITK1: {
            label: 'Vitamin K',
            quantity: 1742.7368749999814,
            unit: '%',
        },
    },
    digest: [
        {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 123.31372499994727,
            hasRDI: true,
            daily: 189.71342307684193,
            unit: 'g',
            sub: [
                {
                    label: 'Saturated',
                    tag: 'FASAT',
                    schemaOrgTag: 'saturatedFatContent',
                    total: 44.72330249999663,
                    hasRDI: true,
                    daily: 223.61651249998312,
                    unit: 'g',
                },
                {
                    label: 'Trans',
                    tag: 'FATRN',
                    schemaOrgTag: 'transFatContent',
                    total: 0.008403749999857926,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                },
                {
                    label: 'Monounsaturated',
                    tag: 'FAMS',
                    schemaOrgTag: null,
                    total: 54.04817749996556,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                },
                {
                    label: 'Polyunsaturated',
                    tag: 'FAPU',
                    schemaOrgTag: null,
                    total: 7.586227499987782,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                },
            ],
        },
        {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 317.02076249990796,
            hasRDI: true,
            daily: 105.67358749996932,
            unit: 'g',
            sub: [
                {
                    label: 'Carbs (net)',
                    tag: 'CHOCDF.net',
                    schemaOrgTag: null,
                    total: 0,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                },
                {
                    label: 'Fiber',
                    tag: 'FIBTG',
                    schemaOrgTag: 'fiberContent',
                    total: 64.88699999993686,
                    hasRDI: true,
                    daily: 259.54799999974745,
                    unit: 'g',
                },
                {
                    label: 'Sugars',
                    tag: 'SUGAR',
                    schemaOrgTag: 'sugarContent',
                    total: 112.23224999998548,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                },
                {
                    label: 'Sugars, added',
                    tag: 'SUGAR.added',
                    schemaOrgTag: null,
                    total: 103.47120000000001,
                    hasRDI: false,
                    daily: 0,
                    unit: 'g',
                },
            ],
        },
        {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 165.40822499994096,
            hasRDI: true,
            daily: 330.81644999988185,
            unit: 'g',
        },
        {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 530.4,
            hasRDI: true,
            daily: 176.8,
            unit: 'mg',
        },
        {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 1493.9699999825725,
            hasRDI: true,
            daily: 62.24874999927386,
            unit: 'mg',
        },
        {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 2594.5212499990057,
            hasRDI: true,
            daily: 259.4521249999006,
            unit: 'mg',
        },
        {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 619.8399999992423,
            hasRDI: true,
            daily: 147.58095238077198,
            unit: 'mg',
        },
        {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 6443.084999997601,
            hasRDI: true,
            daily: 137.08691489356596,
            unit: 'mg',
        },
        {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 166.20613749997457,
            hasRDI: true,
            daily: 923.3674305554143,
            unit: 'mg',
        },
        {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 34.741799999989894,
            hasRDI: true,
            daily: 315.8345454544536,
            unit: 'mg',
        },
        {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 2005.3849999982951,
            hasRDI: true,
            daily: 286.4835714283279,
            unit: 'mg',
        },
        {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 232.66874999992106,
            hasRDI: true,
            daily: 25.85208333332456,
            unit: 'µg',
        },
        {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 208.66012499999525,
            hasRDI: true,
            daily: 231.84458333332805,
            unit: 'mg',
        },
        {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 1.741273749997206,
            hasRDI: true,
            daily: 145.1061458331005,
            unit: 'mg',
        },
        {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.4032424999988948,
            hasRDI: true,
            daily: 107.94173076914575,
            unit: 'mg',
        },
        {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 58.20302874999108,
            hasRDI: true,
            daily: 363.76892968744426,
            unit: 'mg',
        },
        {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 6.612902499998896,
            hasRDI: true,
            daily: 508.6848076922227,
            unit: 'mg',
        },
        {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 532.6562499998895,
            hasRDI: true,
            daily: 133.16406249997237,
            unit: 'µg',
        },
        {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 532.6562499998895,
            hasRDI: false,
            daily: 0,
            unit: 'µg',
        },
        {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'µg',
        },
        {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 7.548,
            hasRDI: true,
            daily: 314.5,
            unit: 'µg',
        },
        {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0,
            hasRDI: true,
            daily: 0,
            unit: 'µg',
        },
        {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 13.840399999994318,
            hasRDI: true,
            daily: 92.26933333329545,
            unit: 'mg',
        },
        {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 2091.284249999978,
            hasRDI: true,
            daily: 1742.7368749999814,
            unit: 'µg',
        },
        {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0,
            hasRDI: false,
            daily: 0,
            unit: 'g',
        },
        {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 1145.2335499986787,
            hasRDI: false,
            daily: 0,
            unit: 'g',
        },
    ],
}

describe('RecipeCard tests', () => {
    it('contains the correct background colour', () => {
        render(
            <RecipeCard
                recipe={recipe}
                Info={Info}
                setInfo={jest.fn()}
            ></RecipeCard>
        )
        const element = screen.getByTestId('recipeCard')
        const colour = '#0f7173'
        expect(element).toHaveStyle(`background: ${colour}`)
    })
    it(`contains the correct title: ${recipe.label}`, () => {
        render(
            <RecipeCard
                recipe={recipe}
                Info={Info}
                setInfo={jest.fn()}
            ></RecipeCard>
        )
        const element = screen.getByTestId('recipeTitle')
        expect(element).toHaveTextContent(recipe.label)
    })
    it(`contains the image`, () => {
        render(
            <RecipeCard
                recipe={recipe}
                Info={Info}
                setInfo={jest.fn()}
            ></RecipeCard>
        )
        const element = screen.getByAltText(recipe.label)
        expect(element).toBeInTheDocument()
        expect(element).toHaveAttribute('src', recipe.images.REGULAR.url)
    })
    it(`contains the url: ${recipe.url}`, () => {
        render(
            <RecipeCard
                recipe={recipe}
                Info={Info}
                setInfo={jest.fn()}
            ></RecipeCard>
        )
        const element = screen.getByRole('link', { href: recipe.url })
        expect(element).toBeInTheDocument()
        expect(element).toHaveAttribute('href', recipe.url)
    })
    it(`contains the servings: ${recipe.yield} servings`, () => {
        render(
            <RecipeCard
                recipe={recipe}
                Info={Info}
                setInfo={jest.fn()}
            ></RecipeCard>
        )
        const element = screen.getByTestId('recipeDetails')
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent(recipe.yield)
    })
    it(`contains the time: ${recipe.totalTime} mins`, () => {
        render(
            <RecipeCard
                recipe={recipe}
                Info={Info}
                setInfo={jest.fn()}
            ></RecipeCard>
        )
        const element = screen.getByTestId('recipeDetails')
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent(recipe.totalTime)
    })
    it(`contains the calories: ${Math.round(recipe.calories)} calories`, () => {
        render(
            <RecipeCard
                recipe={recipe}
                Info={Info}
                setInfo={jest.fn()}
            ></RecipeCard>
        )
        const element = screen.getByTestId('recipeDetails')
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent(Math.round(recipe.calories))
    })
})
