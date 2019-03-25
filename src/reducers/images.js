const imagesReducer = (state = [], action = {type:''}) => {
    console.log('imagesReducer: State: ' + JSON.stringify(state));
    console.log('imagesReducer: action: ' + JSON.stringify(action));
    console.log('imagesReducer: action type: ' + action.type);
    switch (action.type) {
        case 'LOAD_IMG_DATA':
            const theNewState = {...state, loaded: true, data: action.payload };
            console.log('imagesReducer theNewState: ' + JSON.stringify(theNewState)  );
            return theNewState;
        default:
            return state
    }
}

export default imagesReducer