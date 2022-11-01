document.addEventListener("DOMContentLoaded", (event)=>{
    customElements.define("brain-fuck", class front_py extends HTMLElement {
        constructor(){
            this.types = {"h1":"<h1> </h1>","h2": "<h2> </h2>","<h3>": "<h3> </h3>"}
            super();
        }
        connectedCallback(){
            const interpreter = new brainFuck(this.innerText);
            interpreter.run();
            this.script = this.innerText;
            this.innerHTML = interpreter.output;
        }
    });
});
