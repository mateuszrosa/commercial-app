import bike1 from '../images/trek1.png';
import bike2 from '../images/trek.png';
import mtb1 from '../images/mtb1.png';
import mtb2 from '../images/mtb2.png';

const initialState = {
    bikes: [
        {
            id: 1,
            name: 'Trek1',
            description: "Lorem ipsum, dolors.",
            price: 1500,
            img: bike1
        },
        {
            id: 2,
            name: 'Trek2',
            description: "Lorem ipsum, ",
            price: 2500,
            img: bike2
        },
        {
            id: 3,
            name: 'Trek3',
            description: "Lorem ipsum,.",
            price: 3500,
            img: mtb1
        },
        {
            id: 4,
            name: 'Trek4',
            description: "Lorem ipsum, ",
            price: 4500,
            img: mtb2
        }
    ]
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            return state;
        }
            default:
        return state;
    }
}