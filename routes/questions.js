const express = require('express');
const router = express.Router();
const model = require('../models/index');

//get questions for a survey code
router.get('/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const question = await model.questions.findAll({
      attributes: ['question'],
      where: {
        code: id
      }
    });
    if (question.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': question
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

//get question, its ID, and its answer for a survey code
router.get('/QNA/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const qa = await model.questions.findAll({
      attributes: ['id', 'question', 'answer'],
      where: {
        code: id
      }
    });
    if (qa.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': qa
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

//get the list of answers of the questions of a survey
router.get('/answers/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const qa = await model.questions.findAll({
      attributes: ['answer'],
      where: {
        code: id
      }
    });
    if (qa.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': qa
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

//create new question with the survey code, the survey's question, and the
//answer of the question as the attribute
router.post('/', async function(req, res, next) {
  try {
    const {
      code,
      question,
      answer
    } = req.body;
    const q_add = await model.questions.create({
      code,
      question,
      answer
    });
  if (q_add) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'Code successfully added',
      'data': q_add,

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

// update/edit question based on its ID/primary key
router.patch('/update/:id', async function (req, res, next) {
  try {
    const questionID = req.params.id;
    const {
      code,
      question,
      answer
    } = req.body;
    const newQuestion = await model.questions.update({
      code,
      question,
      answer
    }, {
      where: {
        id: questionID
      }
    });
    if (newQuestion) {
      res.json({
        'status': 'OK',
        'messages': 'question updated.',
        'data': newQuestion
      })
    }
  } catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
  }
});

//delete question from its ID/primary key
router.delete('/delete/:id', async function(req, res, next) {
  try {
    const questionID = req.params.id;
    const question = await model.questions.destroy({ where: {
      id: questionID
    }})
    if (question) {
      res.json({
        'status': 'OK',
        'messages': 'question is deleted successfully',
        'data': question,
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
