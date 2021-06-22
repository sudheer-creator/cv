console.log("this is tutorial of regular expressions");
// Array of objects
const myObj = [
    {
        name: "Sohan",
        class: 12,
        rollno: 10,
        address: "om nagar",
        programming: "python",
        image:"https://randomuser.me/api/portraits/med/men/70.jpg",
        

    },
    {
        name: "Rishab",
        class: 12,
        rollno: 10,
        address: "om nagar",
        programming: "java",
        androiddeveloper: true,
        image:"https://randomuser.me/api/portraits/med/men/74.jpg"

    },
    {
        name: "Pawan",
        class: 13,
        rollno: 24,
        address: "om nagar",
        programming: "c sharp",
       
        image:"https://randomuser.me/api/portraits/med/men/76.jpg",

    },
    {
        name: "Aakash",
        class: 12,
        rollno: 10,
        address: "om nagar",
        programming: "python",
        
        image:"https://randomuser.me/api/portraits/med/men/67.jpg",

    },
    {
        name: "Rohan",
        class: 11,
        rollno: 12,
        address: "sai nagar",
        programming: "c++",
        
        image:"https://randomuser.me/api/portraits/med/men/75.jpg",


    },
    {
        name: "Mohan",
        class: 10,
        rollno: 1,
        address: "deewali colony ",
        programming: "javascript",
        
        image:"https://randomuser.me/api/portraits/med/men/79.jpg",


    }
]
function profileIterator(profiles) {
    nextIndex = 0;
    return{
        next:function(){
            return (nextIndex<profiles.length?
                {value:profiles[nextIndex++],done:false}:{done:true})
   
    }
}
}
const myNewObj=profileIterator(myObj);
let next = document.getElementById('next');
next.addEventListener('click', updateProfile);
updateProfile();

function updateProfile() {
    console.log("next is clicked");

    const currentCandidate=myNewObj.next().value;

    
    let profile=document.getElementById('profile');
    let image=document.getElementById('image');
    if(currentCandidate!=undefined){
        image.innerHTML=`<img src='${currentCandidate.image}'style=border-radius:150px;" >`;
        profile.innerHTML=`<div class="card" style="width: 18rem;background:blue;margin-left:130px">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">My Name is:${currentCandidate.name}</li>
          <li class="list-group-item"> I study in ${currentCandidate.class}</li>
          <li class="list-group-item"> My roll no is${currentCandidate.rollno}</li>
          <li class="list-group-item"> Lives at  ${currentCandidate.address}</li>
          <li class="list-group-item"> Programming Languages ${currentCandidate.programming}</li>
        </ul>
      </div>`
    }
    else{
        console.log("This is the end of profiles");
        window.location.reload();
    }
    
    
    
    
    
}



