const express = require('express');
const router = express.Router();
const model = require('../models/index');

//get submission based on survey code
router.get('/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const submissions = await model.submission.findAll({
      where: {
        code: id
      }
    });
    if (submissions.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': submissions
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

//count submission based on survey code
router.get('/count/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const submissions = await model.submission.findAndCountAll({
      where: {
        code: id
      }
    });
    if (submissions.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': submissions.count
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

//create new submission with the survey code, the answers, and the score as
//its attribute
router.post('/', async function(req, res, next) {
  try {
    const {
      code,
      answers,
      score
    } = req.body;
    const subAdd = await model.submission.create({
      code,
      answers,
      score,
    });
  if (subAdd) {
    res.status(201).json({
      'status': 'OK',
      'messages': 'submission successfully added',
      'data': subAdd,

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

//get average score based on a survey code
router.get('/averagescore/:id', async function(req, res, next) {
  try {
    const id = req.params.id
    const submissions = await model.submission.findAll({
      attributes: [['AVG(score)', 'AverageScore']],
      where: {
        code: id
      }
    });
    if (submissions.length !== 0) {
      res.json({
        'status': 'OK',
        'messages': '',
        'data': submissions

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

//update submission based on its id/primary key
router.patch('/update/:id', async function (req, res, next) {
  try {
    const submissionID = req.params.id;
    const {
      code,
      answers,
      score
    } = req.body;
    const submissionUpdate = await model.submission.update({
      code,
      answers,
      score
    }, {
      where: {
        id: submissionID
      }
    });
    if (submissionUpdate) {
      res.json({
        'status': 'OK',
        'messages': 'submission updated.',
        'data': submissionUpdate
      })
      console.log(submissionUpdate);
    }
  } catch (err) {
    res.status(400).json({
      'status': 'ERROR',
      'messages': err.message,
      'data': {},
    })
  }
});

//delete submission based on its id/primary key
router.delete('/delete/:id', async function(req, res, next) {
  try {
    const submissionID = req.params.id;
    const submission = await model.submission.destroy({ where: {
      id: submissionID
    }})
    if (submission) {
      res.json({
        'status': 'OK',
        'messages': 'submission is deleted successfully',
        'data': submission,
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
