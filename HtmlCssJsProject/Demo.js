var books=[]
var input=prompt("Which operation do you want to perform[add|delete|list\exit]:")
while(input!='exit')
{
  if(input=='add')
  {
    addBook()
  }
  else if (input=='list')
  {
    listBooks()
  }
  else if(input=='delete')
  {
    deleteBook()
  }
  else
  {
    console.log("Please choose valid option")
  }
  input=prompt("Which operation do you want to perform[add|delete|list\exit]:")
}
console.log("Thanks for using our application");

function addBook()
{
  var newBook=prompt("Enter books name to add:")
  books.push(newBook)
  console.log("Specified book added");

}

function listBooks() {
  console.log("Lists of Books are");
  for (b of books) {
    console.log(b);
  }
}

function deleteBook() {
  var name=prompt('Enter books name to delete:')
  var index=books.indexOf(name)
  if (index==-1)
  {
    console.log("Specified book not available");
  }
  else{
    books.splice(index,1)
    console.log("Specified book Deleted");
    }
}
