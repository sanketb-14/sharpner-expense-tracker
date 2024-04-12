const Expense = require('../models/ExpenseModel');

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json({
            status: 'success',
            data: expenses,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch expenses',
            error: error.message,
        });
    }
};


exports.createExpense = async (req, res) => {
    const { description, amount } = req.body;
    try {
        const newExpense = await Expense.create({ description, amount });
        res.status(201).json({
            status: 'success',
            data: newExpense,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to create expense',
            error: error.message,
        });
    }
};


exports.deleteExpense = async (req, res) => {
    const expenseId = req.params.id;
    try {
        const expense = await Expense.findByPk(expenseId);
        if (!expense) {
            return res.status(404).json({
                status: 'error',
                message: 'Expense not found',
            });
        }
        await expense.destroy();
        res.status(200).json({
            status: 'success',
            message: 'Expense deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete expense',
            error: error.message,
        });
    }
};
