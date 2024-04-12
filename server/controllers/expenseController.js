const Expense = require('../models/ExpenseModel');

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json({
            status: 'success',
            data: expenses,
        });
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({
            status: 'error',
            message: 'Error fetching expenses',
        });
    }
};


exports.addExpense = async (req, res) => {
    const { title, amount } = req.body;

    try {
        const newExpense = await Expense.create({
            title,
            amount,
        });
        res.status(201).json({
            status: 'success',
            data: newExpense,
        });
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({
            status: 'error',
            message: 'Error adding expense',
        });
    }
};

exports.deleteExpense = async (req, res) => {
    const { expenseId } = req.params;

    try {
        const deletedExpense = await Expense.destroy({
            where: {
                id: expenseId,
            },
        });
        if (deletedExpense) {
            res.status(200).json({
                status: 'success',
                message: 'Expense deleted successfully',
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'Expense not found',
            });
        }
    } catch (error) {
        console.error('Error deleting expense:', error);
        res.status(500).json({
            status: 'error',
            message: 'Error deleting expense',
        });
    }
};
