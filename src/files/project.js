/*======= Array to store all Projects =======*/
const myProject = []


/*======= Create Project with Factory Function =======*/
function createProject(name){
  return{ 
    name,
    id: crypto.randomUUID(), 
  }
}


/*======= Add to Project list =======*/
function addProjects(name){
  const project = createProject(name)
  myProject.push(project)
}
addProjects("Default")




function displayProjects(){
  const projectShelve = document.querySelector(".project-shelve");

  projectShelve.innerHTML = "";
  
  for( let project of myProject){

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card")
    projectCard.textContent = project.name;
  
    //id will help in deleting project
    projectCard.dataset.id = project.id;

    projectShelve.appendChild(projectCard);

    const deleteProject = document.createElement("button");
    deleteProject.textContent = " Delete";
    deleteProject.classList.add("delete-project-btn")
  
    projectCard.append(deleteProject)

    deleteProject.addEventListener("click", () => {
      const projectId = projectCard.dataset.id;

      const index = myProject.findIndex(project => project.id == projectId);
      myProject.splice(index,1);
      displayProjects()
    })
  }
}
displayProjects();



const createProjectBtn = document.querySelector(".new-project-button");
const dialog = document.querySelector("dialog")

createProjectBtn.addEventListener("click",() => {
  dialog.showModal();
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  const projectName = document.getElementById("project").value;

  addProjects(projectName);
  displayProjects();

  dialog.close();
  form.reset();
  
})

const cancelBtn = document.getElementById("cancel")
cancelBtn.addEventListener("click", () => {
  dialog.close()
})