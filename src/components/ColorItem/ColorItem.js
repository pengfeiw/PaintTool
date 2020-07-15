export default{
    props:{
        backgroundColor: String
    },
    methods:{
        changeColor(){
            this.$store.commit("changeColor", this.backgroundColor);
        }
    }
}