const database = require('../config/firebaseDb')

function findAll(){
    database.ref()
}

function addOne(user_email, user_id){
    database.ref().set({
        id: user_id,
        email: user_email,
        accounts: []
    }, (error) => {
        if (error) {
            console.log('Error!', error)
        } else {
            console.log('Success! Item has been saved')
        }
    })
}

function updateOne(){
    database.ref().update({})
}

function removeOne(user_id){
    database.ref('/users/' + user_id).remove({}, error =>{
        if (error) {
            console.log('Error!', error)
        } else {
            console.log('Success! Item has been removed')
        }
    })
}

module.exports = { findAll, addOne, updateOne, removeOne }

// Structure

// {
//   users: {
//     "test@test.com": [
//       { "website": "www.netflix.com", "user_email": "test@test.com", "password": "test123!"},
//       { ... }
//     ]
//   }
// }
  