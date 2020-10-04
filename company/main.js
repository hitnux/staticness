/**/
$( document ).ready(function() {
    vue();
});
/* */

function vue(){
    vuecomponents();
    new Vue({
        el: '#app',
        data:{
            source:"http://halilbilgin.com.tr/staticness/blog/data.json", // JSON URL
            menu:[],
            carousel: []
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                const self = this;
                $.getJSON( this.source, function( data ) {
                    self.menu = data["menu"];
                    self.carousel = data["carousel"];
                });
            }
        }
    });
}
function vuecomponents(){
}