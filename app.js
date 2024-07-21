const box = document.querySelectorAll(".box");

// console.log(box);
// console.log("hello")

box.forEach(el=>{
    el.addEventListener('click',()=>{
        const boxdiv = el.querySelector(".boxdiv");

        if(boxdiv.classList.contains("hide")){
            boxdiv.classList.remove("hide");
            boxdiv.classList.add("show");
        }else{
            boxdiv.classList.remove("show");
            boxdiv.classList.add("hide");
        }
    })
})


const left = document.querySelector(".left");
const right = document.querySelector(".right");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener('click',()=>{
    left.classList.toggle("left-width");
    
    right.classList.toggle("right-width");
})


const profile_btn =  document.querySelector(".profile-btn");

const drop_down_content = document.querySelector(".drop-down-content");



profile_btn.addEventListener('click',()=>{
    if(drop_down_content.classList.contains("hide")){
        drop_down_content.classList.remove("hide");
        drop_down_content.classList.add("show");
    }else{
        drop_down_content.classList.remove("show");
        drop_down_content.classList.add("hide");
    }
})

const addEmp = document.querySelector(".addEmp");
const overlay_contanier = document.querySelector(".overlay-contanier");

addEmp.addEventListener('click',()=>{
    if(overlay_contanier.classList.contains("hide")){
        overlay_contanier.classList.remove("hide");
        overlay_contanier.classList.add("show");
    }else{
        overlay_contanier.classList.remove("show");
        overlay_contanier.classList.add("hide");
    }
})

const cross = document.querySelector(".cross");
cross.addEventListener('click',()=>{
    overlay_contanier.classList.remove("show");
    overlay_contanier.classList.add("hide");
})




const table = document.querySelector(".table");

// const submit_btn = document.querySelector(".submit-btn");

const form = document.querySelector(".form-container");



form.addEventListener('submit',(event)=>{
    event.preventDefault();


   
   
   
    var name = form.elements['name'].value;
    form.elements['name'].value = "";
    // console.log(name);
    var email = form.elements['email'].value;
    form.elements['email'].value="";
    var address = form.elements['address'].value;
    form.elements['address'].value="";
    var phone = form.elements['phone'].value;
    form.elements['phone'].value ="";


  
    overlay_contanier.classList.remove("show");
    overlay_contanier.classList.add("hide");


    

    let arr = [name,email,address,phone];

    // console.log(arr[0]);

    const row  = document.createElement("tr");
    row.classList.add("r");

    for(let i=0;i<4;i++){
        const tdata = document.createElement("td");
        tdata.innerText=arr[i];
        tdata.classList.add(".t");

        //tdata.classList.add('1234'[i]);
        row.appendChild(tdata);
    }
    const tdata2 = document.createElement("td");
    tdata2.classList.add(".t");
    tdata2.innerHTML += '<div class="edit-box"><i class="fa fa-pencil edit" aria-hidden="true"></i><i class="fa fa-trash remove" aria-hidden="true"></i></div>';
    
    row.appendChild(tdata2);

    table.appendChild(row);

//     const forminput = document.querySelectorAll(".form-input");
// forminput.value = "";

    


    //////  remove row

    const remove = row.querySelector(".remove");
    remove.addEventListener('click',()=>{
        var parentRow = remove.parentNode.parentNode.parentNode;
        // console.log(parentRow);
        table.removeChild(parentRow);
    })




    const edit_container = document.querySelector(".edit-container");


    //////////  edit details

    const edit = row.querySelector(".edit");
   

     
        edit.addEventListener('click',()=>{
            // var parentRow = edit.parentNode.parentNode.parentNode;
            // console.log(parentRow);
         

           

            

           const newrow  = edit.parentNode.parentNode.parentNode;
           console.log(newrow);
           
            edit_container.classList.remove("hide");
            edit_container.classList.add("show");


          var  cross = document.querySelector(".edit-cross");
            cross.addEventListener('click',()=>{
                edit_container.classList.remove("show");
                edit_container.classList.add("hide");
            })

            const edit_form =  document.querySelector(".edit-form-container");

            var rowChild = newrow.childNodes;
            console.log(rowChild);
            
          edit_form.elements['name'].value = rowChild[0].innerText;
          edit_form.elements['email'].value = rowChild[1].innerText;
          edit_form.elements['address'].value = rowChild[2].innerText;
          edit_form.elements['phone'].value = rowChild[3].innerText;

            
          edit_form.addEventListener('submit', (event) => {
            event.preventDefault();
        
            console.log("edit_form hello");
        
            const btn = edit_form.querySelector(".edit-btn");
            console.log(btn);
            console.log(rowChild);
            var edit_name =  edit_form.elements['name'].value;
            

            //  edit_form.elements['name'].value = "";
           //    console.log(edit_name);
              var edit_email =  edit_form.elements['email'].value;
            //  edit_form.elements['email'].value="";
              var edit_address =  edit_form.elements['address'].value;
            //   edit_form.elements['address'].value="";
              var edit_phone =  edit_form.elements['phone'].value;
            //   edit_form.elements['phone'].value ="";



            console.log(edit_name);
            console.log(edit_email);
            console.log(edit_address);
            console.log(edit_phone);
        
            // Update the rowChild elements with the new values
            rowChild[0].innerText = edit_name;
            rowChild[1].innerText = edit_email;
            rowChild[2].innerText = edit_address;
            rowChild[3].innerText = edit_phone;
        
            // Hide the edit container
            edit_container.classList.remove("show");
            edit_container.classList.add("hide");
        });
        
        // Function to open the edit form and set rowChild
        function openEditForm(row) {
            rowChild = row.children;
        
            // Set form values to the current row values
            edit_form.elements['name'].value = rowChild[0].innerText;
            edit_form.elements['email'].value = rowChild[1].innerText;
            edit_form.elements['address'].value = rowChild[2].innerText;
            edit_form.elements['phone'].value = rowChild[3].innerText;
        
            // Show the edit container
            edit_container.classList.remove("hide");
            edit_container.classList.add("show");
        }


           
            // var email = form.elements['email'].value;
            // var address = form.elements['address'].value;
            // var phone = form.elements['phone'].value;
        

        })
     })
    

    overlay_contanier.classList.remove("show");
    overlay_contanier.classList.add("hide");



    const right_mid = document.querySelector(".right-mid");

    const tempDiv = document.createElement('div');

   const loadContent = (para)=>{

    console.log("load cotent chl rha h");

    fetch('GST_task/index.html')
     .then(res=>{
        if(res.ok){
            return res.text();
        }
     })
      .then(htmlSnippet => {

            //  right_mid.innerHTML = htmlSnippet;
            
            tempDiv.innerHTML = htmlSnippet;
      });


     console.log("fetch chl rha h")

     console.log(tempDiv);

    //  const crud = document.querySelector(".crud");


    //   right_mid.removeChild(crud);
      right_mid.appendChild(tempDiv);

    // right_mid.replaceChild(tempDiv,crud);
  

      const scripts = tempDiv.querySelector('script');
      console.log(scripts.type);
      
        console.log("chal rhi hu m tu tension mt le");

         scripts.type = 'application/javascript';

        // Create a new script element
        const newScript = document.createElement('script');
        // newScript.type = script.type ? script.type : 'application/javascript';
        newScript.type = scripts.type ;
        
        // Copy the script content
        if (scripts.src) {
          // If the script has a src attribute, copy it to the new script
          newScript.src = scripts.src;
          newScript.async = false; // to maintain execution order
        } else {
          // Otherwise, copy the text content
          newScript.textContent = scripts.textContent;
        }
        
        // Append the new script to the document
        document.head.appendChild(newScript);   
    


};



    const gst_btn = document.querySelector(".gst-btn");

    gst_btn.addEventListener('click',()=>{
        console.log("hello from eventlistener");
        loadContent();
    })









