const buttons = document.querySelectorAll(".button");
    
let things = {};
    

    
    function getData() {
       
        fetch("./data.json") 
            .then(res => res.json()) 
            .then(data => {

                things = data;
                
            })
        .catch(error => console.error(error));
    }

    function buildData(event) {
        console.log("clicked");
        let panel = document.querySelector(".bio-panel");

        if (panel) {
            panel.classList.remove("hidden");
            let containers = panel.children;
            
            containers[0].querySelector("img").src = `images/${things[this.dataset.key].pic}`;
            containers[1].textContent = things[this.dataset.key].name;
            containers[2].textContent = things[this.dataset.key].description;
            containers[3].textContent = things[this.dataset.key].what;
              }
        else {
            panel.classList.add("hidden");
        }
    };

    buttons.forEach(btn => (btn.addEventListener("click", buildData)));

    getData();


    let fadeIn = document.querySelector(".bio-panel");
    document.querySelector(".button").onclick = function() {
        fadeIn.classList.add("fade");
    };

    var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}


    
