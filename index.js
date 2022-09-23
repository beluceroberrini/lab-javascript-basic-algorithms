let hacker1 = 'Pedro';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Santiago';
console.log(`The navigator's name is ${hacker2}`);


    if(hacker1.length > hacker2.length ){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
    }else if (hacker1.length < hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker2.length} characters`)
    }else{
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }


   for(let i = 0; i < hacker1.length; i++){
        let name = hacker1[i].toUpperCase().split("");
        console.log(name);
   }

   const strReversed = hacker1.split("").reverse().join("");
   console.log(strReversed);

   if(hacker1[0] > hacker2[0]){
     console.log("The driver's name goes first.")
    }else if (hacker1[0] < hacker2[0]){
        console.log("Yo, the navigator goes first definitely.")
    }else{
        console.log("What?! You both have the same name?")
    }

    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut laoreet libero. Sed id aliquet quam, at viverra leo. Nulla justo sapien, euismod vitae malesuada sed, venenatis ac lorem. Curabitur nec gravida velit. Ut a scelerisque erat, sed finibus tellus. Sed vel imperdiet nulla, et aliquet mauris. Cras id libero sed dolor posuere interdum sed sit amet orci. Integer faucibus ligula eget interdum dignissim. Proin non faucibus neque, at mattis ante. Pellentesque ultricies risus nec urna rhoncus ultricies. Nam sed lacus porttitor augue tincidunt cursus. Nulla vitae nisl ac neque maximus hendrerit. Morbi vel elit mi. Etiam faucibus interdum eros, id aliquet nulla interdum vel. Vestibulum at dignissim arcu.In in erat luctus, tempor lorem in, scelerisque lectus. Vivamus pretium, metus vestibulum efficitur interdum, magna lacus luctus metus, quis interdum justo sem ac leo. In velit risus, malesuada vitae auctor in, eleifend ac velit. Suspendisse potenti. Etiam semper nibh quis auctor placerat. Vivamus euismod ultrices faucibus. Etiam non hendrerit metus. Maecenas tincidunt eu felis eleifend bibendum. Vestibulum et turpis nec neque aliquam bibendum. Suspendisse eu mauris et sem tristique rhoncus a eu nulla. Fusce venenatis arcu vel orci hendrerit rhoncus. Sed lorem elit, pellentesque non egestas et, gravida et nisl. Mauris ut purus vitae dui viverra varius. In id metus puru";


    const counter = lorem.split("")
    console.log(counter.length);
    
    const counter1 = lorem.split(" ")
    console.log(counter1);
    
  function contarEt() {
      let counter2 = 0;

    for(let i = 0; i < counter1.length; i++){
        if(counter1[i] === 'et'){
            counter2++
        }
    }
    console.log(counter2)
}

contarEt();
    


const isPalindromo = (str) => {
    let strReversed = str.toLowerCase().split(" ").join("")
    strReversed = strReversed.split("").reverse().join("")  
    return strReversed === str ? true : false;
  }

  console.log(isPalindromo("A man, a plan, a canal, Panama"));