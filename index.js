function getData(){

    const username=document.getElementById('username').value;
    const baseURL=`https://api.github.com/users/${username}/repos`;
    
    $.ajax({
        url: baseURL,

        success: function(data){

            let tempRow='';
            let tempRow1='';
            let tempRow2=''
            if(data!=null){
            for(let i=0;i<data.length;i++){
                tempRow=tempRow+`<tr><td>${data[i].name}</td></tr>`;
                
                tempRow1=tempRow1+`<tr><td>${data[i].full_name}</td></tr>`;
                
                tempRow2=tempRow2+`<tr><td>${data[i].url}</td></tr>`;
                            }
                        document.getElementById('name').innerHTML=tempRow;     
                        document.getElementById('fullname').innerHTML=tempRow1;     
                        document.getElementById('url').innerHTML=tempRow2;            

                        }
                        else{
                            console.log("No Repos found");
                        }

                        console.log(data);
        },
        error: function(e){
            console.log(e);
        }
    });
}