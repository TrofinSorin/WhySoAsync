const express = require('express');
const path =  require('path');
const app = express();
const pg = require('pg');
const dotenv = require('dotenv');
var cors = require('cors');
const uuidV4 = require('uuid/v4');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const  bcrypt  =  require('bcryptjs');
// config for your database
const config = {
  user: 'postgres',
  database: 'postgres',
  password: 'sorin',
};

app.use(cors());
app.use(bodyParser.json());
var pool = new pg.Pool(config);

pool.connect(function(err, client, done) {
  if(err) {
    console.log('Not Connected');
  } else {
    console.log('Connected to Server');
  }
});

//////////  DOGS  
app.get('/dogs', (req, res) => {
  pool.query('SELECT * FROM dogs', function(err, result, done) {
    res.status(200).json({dogs: result.rows});
  });
});

app.get('/dogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM dogs WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    // res.status(200).json(results.rows);
    res.status(200).json({dogs: results.rows});
  });
});

app.post('/dogs', (req, res) => {
  // const id = parseFloat(uuidV4(), 10);
  // console.log('id', id);

  pool.query('INSERT INTO dogs(fullname,rasa) VALUES($1, $2)',
  [req.body.fullname, req.body.rasa]).then(function () {
    res.status(200).json({status: 'success', message: 'inserted dog'});
  })
  .catch((error) => {
    console.log('error', error);
    res.status(400).json({error: error});
  });
});

app.put('/dogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { fullname, rasa } = req.body;
  
  console.log('id', id);
  pool.query(
    'UPDATE dogs SET fullname = $1, rasa = $2 WHERE id = $3',
    [fullname, rasa, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({status: 'success', message: `updated dog with ${id}`});
    }
  );
});

app.patch('/dogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { fullname, rasa } = req.body;
  console.log('id', id);

  pool.query(
    'UPDATE dogs SET fullname = $1 WHERE id = $2',
    [fullname, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({status: 'success', message: `inserted dog with ${id}`});
    }
  );
});

app.delete('/dogs/:id', (req, res)=> {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM dogs WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json({id: id, status: 'success', message: `deleted post with ${id}`});
  });
});

/////////////////////// USERS AUTH /////////////
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', function(err, result, done) {
    console.log(result.rows);
    res.status(200).json({users : result.rows});
  });
});

app.post('/users', function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const password = bcrypt.hashSync(req.body.password);
  const confirmpassword = req.body.confirmpassword;

  console.log('confirmedPassword', confirmpassword);
  pool.query('INSERT INTO users(id,firstName,lastName,username,password, confirmpassword) VALUES($1, $2, $3, $4, $5, $6)',
  [parseInt(uuidV4()), firstName, lastName, username, password, confirmpassword ]).then(function () {

    if (req.body.password !== confirmpassword) {
      res.status(401).send({message: 'Confirm Password Incorect. Please try again'});
      return;
    }

    res.status(200).json({ status: 'User Created', message: 'User Created' });
  })
  .catch(function(err) {
    console.log('catch', err);
  });
});

app.post('/login', function(req, res, next) {
  const body = req.body;
  const SECRET_KEY = 'secretkey23456';
  pool.query('SELECT * FROM users WHERE username = $1', [body.username], (error, results) => {
    if (error) {
      res.status(500).send('Server error!'); 
    }

    const user = results.rows.find(user => user.username == body.username);
    const password = user ? bcrypt.compareSync(body.password, user.password) : null;
    console.log('user', user);
    if(!user) {
      res.status(401).send({message: 'Authentification Failed. User not found'});
      return;
    }

    if (!password) {
      res.status(401).send({message: 'Password Incorect. Please try again'});
      return;
    }
  
    const  expiresIn  =  24  *  60  *  60;
    const  accessToken  =  jwt.sign({ id:  req.body.id }, SECRET_KEY, {
        expiresIn:  expiresIn
    });

    res.status(200).send({ 
      'username':  body.username,
      'access_token':  accessToken,
      'expires_in':  expiresIn,
      'firstName': user.firstname,
      'lastName': user.lastname,
      'id': user.id
     }); 
  });
});

app.put('/multipage', (req, res) => {
  const { multipage } = req.body;
  const id = 1;

  pool.query(
    'UPDATE multipage SET multipage = $1, id = $2',
    [multipage, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json({status: 'success'});
    }
  );
});

app.get('/multipage', (req, res) => {
  pool.query('SELECT * FROM multipage', function(err, result, done) {
    res.status(200).json({multipage: result.rows});
  });
});
/////////////////////// USERS AUTH /////////////
const port = process.env.PORT || 4600;

app.listen(port, (req, res) => {
 console.log(`RUNNING on port ${port}`);
});