const form = document.getElementById("expenseForm")
const expenseList = document.getElementById("expenseList")
const expenses  = JSON.parse(localStorage.getItem("expenses") || [])

function renderExpenses(){
    expenseList.innerHTML = expenses.map((expense) => `
        <div class="w-full fle flex-col border-b-2 border-indigo-700 my-2" data-id="${expense.id}">
          <span class="mr-2"><span class="font=text=xl font-semibold">Product:</span>${expense.description} <span class="font=text=xl font-semibold">Category:</span>${expense.category} <span class="font=text=xl font-semibold">Amount:</span>$${expense.amount}</span>
          <span class="flex justify-end">
            <button class="text-indigo-600 mx-1 hover:text-indigo-800" onclick="editExpense('${expense.id}')">Edit</button>
            <button class="text-red-600 mx-1 hover:text-red-800" onclick="deleteExpense('${expense.id}')">Delete</button>
          </span>
        </div>
      `).join("")
}

function addExpense(amount , description ,category){
    const id = Date.now().toString()
    const expense = { id, amount, description, category };
    if(!id || !amount || !category || !description) return
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}
function deleteExpense(id) {
    expenses.splice(
        expenses.findIndex((expense) => expense.id === id),
        1
    );
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

function editExpense(id) {
    const index = expenses.findIndex((expense) => expense.id === id);
    const expense = expenses[index];
  
    const newAmount = prompt("Enter new amount:", expense.amount);
    const newDescription = prompt("Enter new description:", expense.description);
    const newCategory = prompt("Enter new category:", expense.category);
    if (newAmount !== null && newDescription !== null && newCategory !== null) {
        expenses[index] = { ...expense, amount: newAmount, description: newDescription, category: newCategory };
        localStorage.setItem("expenses", JSON.stringify(expenses));
        renderExpenses();
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const amount = parseFloat(form.amount.value)
    const desc = form.description.value
    const category = form.category.value
    addExpense(amount, desc, category)
    form.reset() 

})
renderExpenses();

