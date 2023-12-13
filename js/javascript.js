const myButton = document.getElementById('button')

myButton.addEventListener('click', function () {
    let Container = document.getElementById("container")
    Container.classList.add('d-block');

});




const grid = document.getElementById('griglia')
console.log(griglia)

//const Number = [];


for(let i = 1; i <= 100; i++){
    const newCell = document.createElement("div");
    newCell.classList.add('col-2');
    newCell.innerHTML = i;
    
    grid.append(newCell)

    newCell.addEventListener('click', function () {
    
        newCell.classList.toggle('clicked');
    
    });

    
}  

    

    









