const express = require('express')
const router = express.Router()
const {getAllExpenses , addExpense , deleteExpense} = require('../controllers/expenseController')
router.route('/').get(getAllExpenses).post(addExpense)

router.route('/:expenseId')
    .delete(deleteExpense);

module.exports = router

