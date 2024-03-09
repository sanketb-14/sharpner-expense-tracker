const form = document.getElementById("expenseForm")
const expenseList = document.getElementById("expenseList")

function addExpense(amount , description ,category){
    const listItem = document.createElement("li")
    listItem.innerHTML = `
        <div class="w-full border-b-2 border-indigo-700 my-2">
        
        <span class="mr-2"><span class="font=text=xl font-semibold">Product:</span>${description} <span class="font=text=xl font-semibold">Category:</span>${category} <span class="font=text=xl font-semibold">Amount:</span>$${amount}</span>
        <span class="flex justify-end">
        <button class="text-red-500 mx-1 hover:text-red-700" onclick="editExpense(this)">Edit</button>
        <button class="text-red-500 mx-1 hover:text-red-700" onclick="deleteExpense(this)">Delete</button>
        </span>
        </div>
      `
      expenseList.appendChild(listItem)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const amount = parseFloat(form.amount.value)
    const desc = form.description.value
    const category = form.category.value
    addExpense(amount, desc, category)
    form.reset() 

})

