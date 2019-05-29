const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET surveys listing.
router.get('/', async function(req, res, next) {
  try {
    const code = await model.surveyCode.findAll({});
    if (code.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': code
      })
    } else {
      res.json({
        'status': 'ERROR',
        'messages': 'EMPTY',
        'data': {}
      })
    }
  } catch (err) {
    res.json({
      'status': 'ERROR',
      'messages': err.messages,
      'data': {}
    })
  }
});

// create a survey code
router.post('/', async function(req, res, next) {
  try {
    const {
      code
    } = req.body;
    const surveyCode = await model.surveyCode.create({
      code
    });
  if (surveyCode) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'Code successfully added',
      'data': surveyCode,

    })
    console.log(req.body);
  }
 } catch (err) {
   res.status(400).json({
     'status': 'ERROR',
     'messages': err.message,
     'data': {},
   })
 }
});


// DELETE a survey code based on its ID/primary key
router.delete('/delete/:id', async function(req, res, next) {
  try {
    const id = req.params.id;
    const surveyCode = await model.surveyCode.destroy({ where: {
      code: id
    }})
    if (surveyCode) {
      res.json({
        'status': 'OK',
        'messages': 'Survey is deleted successfully',
        'data': surveyCode,
      })
    }
  } catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
    //console.log(id);

  }
});


module.exports = router;
