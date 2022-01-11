const initialState = {
    bikes: [
        {
            id: 1,
            name: 'Trek1',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod consequatur dolorum amet necessitatibus consectetur dolores.",
            price: 1500
        },
        {
            id: 2,
            name: 'Trek2',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod consequatur dolorum amet necessitatibus consectetur dolores.",
            price: 2500
        },
        {
            id: 3,
            name: 'Trek3',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod consequatur dolorum amet necessitatibus consectetur dolores.",
            price: 3500
        },
        {
            id: 4,
            name: 'Trek4',
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod consequatur dolorum amet necessitatibus consectetur dolores.",
            price: 4500
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            return state;
        }
    }
}