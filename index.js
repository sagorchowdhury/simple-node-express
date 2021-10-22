const express = require('express');
const cors = require('cors');
const app = express();

app.use = (cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {

    res.send(" hey  ARE YOU LOKKING YOUR DATA")

})

const users = [
    { id: 0, name: "sagor", email: "sagor@gmail.com", phone: "01711111111" },
    { id: 1, name: "rocky", email: "rocky@gmail.com", phone: "01722222222" },
    { id: 2, name: "raj", email: "raj@gmail.com", phone: "01733333333" },
    { id: 3, name: "onontho", email: "onontho@gmail.com", phone: "01744444444" },
    { id: 4, name: "suntho", email: "suntho@gmail.com", phone: "01755555555" }


]
//
app.get('/users', (req, res) => {

    const search = req.query.search;

    // use quaery paramitas----------------

    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));

        res.send(searchResult);

    }
    else {
        res.send(users)

    }
});
//app method--------------------
app.post('/users', (req, res => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hittint the post', req.body)
    // res.send('inside post ')
    res.json(newUser);

})


//dynamuc api-----------

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);


})


app.listen(port, () => {
    console.log(" listen to port", port);
})