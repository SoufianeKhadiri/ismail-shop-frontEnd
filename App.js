import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import TShirtList from './components/TShirtList';
import NavBar from './components/NavBar';
import axios from 'axios';
import { fetchTshitsData, user_login } from './api/user_Api';

export default function App() {

  
  const [tshirts, setTshirts] = useState([]);

  // useEffect(() => {
  //     const loadData = async () => {
  //       loginAndGetUserData('test5@test.com', '123456')
  // .then(data => {
  //   console.log('User data:', data);
  // })
  // .catch(error => {
  //   console.error('Login failed:', error);
  // });

  //         // try {
            
  //         //     const fetchedTshirts = await fetchTshirtsFromApi();
  //         //     setTshirts(fetchedTshirts);
  //         // } catch (error) {
  //         //     Alert.alert('Error', 'Failed to load T-shirts: ' + error.message);
  //         // }
  //     };

  //     loadData();
  // }, []);
  // loginAndGetUserData('test5@test.com', '123456')
  // .then(data => {
  //   console.log('User data:', data);
  // })
  // .catch(error => {
  //   console.error('Login failed:', error);
  // });
  

        
  // const [tshirts, setTshirts] = useState([
  //   { id: '1', name: 'Classic White Tee', price: '19.99', imageUrl: 'https://www.snipes.at/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dw24f55347/1899765_P.jpg?sw=900&sh=900&sm=fit&sfrm=png' },
  //       { id: '2', name: 'Vintage Rock Band Tee', price: '29.99', imageUrl: 'https://www.snipes.at/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dw68956b2a/2170210_P.jpg?sw=900&sh=900&sm=fit&sfrm=png' },
  //       { id: '3', name: 'Graphic Art Tee', price: '24.99', imageUrl: 'https://www.snipes.at/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dwbb8c49ae/2141682_P1.jpg?sw=900&sh=900&sm=fit&sfrm=png' },
  //       { id: '3', name: 'Graphic Art Tee', price: '24.99', imageUrl: 'https://www.snipes.at/dw/image/v2/BDCB_PRD/on/demandware.static/-/Sites-snse-master-eu/default/dwbb8c49ae/2141682_P1.jpg?sw=900&sh=900&sm=fit&sfrm=png' }
        
  // ]);

  const handleTShirtPress = (tshirt) => {
    // Handle T-shirt press here (e.g., navigate to details page)
    console.log('T-shirt pressed:', tshirt);
  };

  return (
    <View style={styles.container}>
        <NavBar />
        <TShirtList tshirts={tshirts} onTShirtPress={handleTShirtPress} />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: -20,
  },
});



const fetchTshirtsFromApi= async () => {
  const apiUrl = 'https://ismailshop-backend.onrender.com/rest/api/tshirts';
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0NUB0ZXN0LmNvbSIsImNyZWF0ZWQiOjE3MDMyNjQzOTMwMDEsImV4cCI6MTcwMzg2OTE5M30.PGl6nnj-XdMvm2GAb4rTo3AFgUVBi0cHyodpRaIAenU5PVcStg4xbINOQw6baAkV4xdp7NSsI8X5eptrmUwKSA'; // Replace with your actual token

  try {
      const response = await fetch(apiUrl, {
         mode: 'no-cors',
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`, // notice the Bearer before your token
        },
      });

      if (!response.ok) {
        console.log('API request failed with status ' + response.status);
      }

      const data = await response.json();
      console.log(data)
      return data; // Return the fetched data
  } catch (error) {
      console.error('Error fetching T-shirts:', error);
      throw error; // Re-throw the error for handling in the calling function
  
    }
};


user_login({
  email:'test5@test.com',
  password:'123456'
}).then(result => {
  const token =  result.data.token
  console.log(token)
 
  fetch('https://ismailshop-backend.onrender.com/rest/api/tshirts', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
  },
  
}).then(response => console.log(response.json()));

 // fetchDataWithToken("https://ismailshop-backend.onrender.com/rest/api/tshirts",token)
  // fetchTshitsData(token).then(result => {
  //   console.log(result.data)
  // })
}).catch(err => {
  console.error(err);
})


// axios.get('/https://ismailshop-backend.onrender.com/rest/api/tshirts', {
//   firstName: 'test5@test.com',
//   lastName: 'Flintstone'
// },{
// headers:{
//   Accept: 'application/json',
//  'Content-Type': 'application/json',
//   Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0NUB0ZXN0LmNvbSIsImNyZWF0ZWQiOjE3MDM2MjM4OTMxNzUsImV4cCI6MTcwNDIyODY5M30.aK_FH-ZtE7UQxQiaVb5vE7UGf3eLRm_OpkflkgR7SCMe2Kz-9mTajX3YH3UiiAqrEsoQrjlr6Wv37xVwLoHLwA' // if you use token
// }
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


const fetchSecretData = (api,token)=> {
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  fetch(api, {headers})
      .then(response => response.json())
      .then(data => setSecretData(data.data));
}

async function fetchDataWithToken(apiUrl, token) {
  try {
    const response = await fetch(apiUrl, {
      mode: 'no-cors',
      method: 'GET', // or 'POST', 'PUT', etc., depending on the API requirement
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Using the token for authorization
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed:', error);
    throw error;
  }
}
