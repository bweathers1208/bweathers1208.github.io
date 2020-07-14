new Vue({
    el:"#app",
    data:{
        state:true,
        /*^this just means the first page should show by default; 
        if false it should hide first page & show second page.*/
        inputName:'',
        /*^this means when the application starts, the input is empty.*/
        names:[],
        showError:false,
        result:'',
        
    },
    methods:{
        addNameToList(){
            if(this.validate(this.inputName)){
                this.names.push(this.inputName);
                console.log(this.names);
                this.inputName='';
                this.showError = false;
            } else {
                console.log('not valid');
                this.showError = true;
            }
        },
        validate(value){
            if(value !== ''){
                return true;
            } else {
                return false;
            }
        },
        showResult(){
            let rand = this.names[Math.floor(Math.random() * this.names.length)];
            this.result = rand;
            this.state = false;
        },
        returnToStart(){
            this.state = true;
            this.names = [];
            this.result = '';
        },
        removeName(index){
            this.names.splice(index, 1);
        }
    }
})
