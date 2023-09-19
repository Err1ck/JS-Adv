const user = {
  id: 1,
  name: "John",
  age: 25,
};
function setItem(){
  localStorage.setItem('user', JSON.stringify(user));
  const getUser = JSON.parse(localStorage.getItem('user'));

  console.log(getUser);  
}

setItem();