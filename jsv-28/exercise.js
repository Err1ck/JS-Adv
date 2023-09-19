const user = {
  id: 1,
  name: "John",
  age: 25,
};

function setItem(){
  localStorage.setItem("user",JSON.stringify(user));
}