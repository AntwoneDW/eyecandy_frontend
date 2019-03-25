import React, { useState, useEffect, applyMiddleware, Component } from 'react';
import {createStore} from 'redux'
import { connect } from "react-redux";
import rootReducer from './reducers'
import loadReturnedImageData from './actions'

const apiEndPoint = 'http://localhost:3030/api';

// const store = createStore(reducer, enhancer);

const App = ({images_loaded = false, images_data = [], loadData}) => {
  console.log(`App's Props ${JSON.stringify(images_loaded)}`);

  //const [imagesObj, setImagesObj] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('useEffect STARTING UP');
    var myHeaders = new Headers();

    var myInit = { method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default' };

    console.log('useEffect Request headers defined');

    var myRequest = new Request(apiEndPoint, myInit);
    console.log('useEffect Request defined');

    //console.log( 'images.loaded is: ' + imagesObj.images.loaded);
    console.log( 'images.loaded is    : ' + images_loaded);
    console.log( 'images_datas size is: ' + images_data.length);
    //if(imagesObj.images.loaded === false)
    if( images_loaded === false)
    {
      fetch(myRequest).then(function(response) {
        console.log('useEffect Fetching Now');
        const responseJson = response.json();
        return responseJson;
      }).then(myJson  => {
        console.log('****');
        console.log(`THE JSON FROM THE SERVER:  ${JSON.stringify(myJson)}`);
        console.log('****');
        //setImagesObj( { images: {loaded: true, data: myJson}} );
        loadData( myJson);
        //console.log(`The New State is:  ${JSON.stringify(imagesObj)}`);
      });
    }
  });

  console.log(`The CURRENT State is:  ${JSON.stringify(images_loaded)}`);

  return (
        <div className="App">
          {JSON.stringify( images_data /* imagesObj.images.data */)}
          {JSON.stringify( images_loaded /* imagesObj.images.data */)}
        </div>
  );
}

const mapStateToProps = (state) => {
  return {
    images_loaded: state.images.loaded,
    images_data: state.images.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: (data) => dispatch(loadReturnedImageData(data))
  };
};

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
