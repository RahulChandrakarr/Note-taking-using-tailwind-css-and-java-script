

const addNoteBtn = document.getElementById("addNoteBtn");
const updateLSData =()=>{
    const textAreadata = document.querySelectorAll('textarea');
    const textareanotes = [];
    textAreadata.forEach((note) => {
            return textareanotes.push(note.value);  
    })
    console.log(textareanotes);

    localStorage.setItem('note',JSON.stringify(textareanotes));

    
}
const addNewNote = (text = '') => {
    const note = document.querySelector(".noteSection");
    const htmlData = ` <div id="notebox" class=" notebox w-64 mx-10 my-10 bg-white rounded-sm ">
<div id="icons" class="flex flex-1 justify-end gap-3 mr-4 pt-2">
    <img src="delete.png" alt="" id="deletebtn" class=" deletebtn h-8 w-8 bg-yellow-400 rounded-full">
    
</div>
<textarea name="" id="" cols="30" rows="5" class="px-2 py-2 mt-2"
    placeholder="Enter Your Text Here...."></textarea>
</div>`;

    note.insertAdjacentHTML('afterbegin', htmlData);
    

    //geting the refrence

    const deletebtn = document.querySelector(".deletebtn");
   const textarea = document.querySelector("textarea");

    // deleting the note 

    deletebtn.addEventListener('click', () => {
        let notebox = document.querySelector(".notebox");
        notebox.remove();
        updateLSData();
    })
    // toggle using edit button 
    textarea.value =text;
    updateLSData();

    
}
// geting data back from local stroage
const notes = JSON.parse(localStorage.getItem('note'));
if(notes){notes.forEach((note)=>addNewNote(note))};
addNoteBtn.addEventListener("click", () => addNewNote());

