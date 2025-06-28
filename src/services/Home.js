import http from "./http"

export default function getphoto(){
return http.get("/Home").then((data)=> data.data )
}
// Homemenupictuer
export function getHomemenupictuer(){
return http.get("/Homemenupictuer").then((data)=> data.data )
}

//
export  function getHomeMenuicon(){
    return http.get("/HomeMenu").then((data)=> data.data)
    }
    
export  function getaddress(){
    return http.get("/address").then((data)=> data.data)
    }

    export  function getfoods(){
        return http.get("/foods").then((data)=> data.data)
        }
        
        export  function getfoods2(){
            return http.get("/foods2").then((data)=> data.data)
            }

            export  function getfoods3(){
                return http.get("/foods3").then((data)=> data.data)
                }

                export  function getphoto2(){
    return http.get("/photo2").then((data)=> data.data )
    }
    


    export  function getcomments(){
        return http.get("/comments").then((data)=> data.data)
        }
        

        export  function getfoodmenupage(){
            return http.get("/iranianfood").then((data)=> data.data)
            }
     






export  function getiranianfood(){
return http.get("/iranianfood").then((data)=> data.data)
}

 export  function getunirainanfood(){
return http.get("/unirainanfood").then((data)=> data.data)
}
export  function getpizza(){
return http.get("/pizza").then((data)=> data.data)
}
 
export  function getsandavige(){
return http.get("/sandavige").then((data)=> data.data)
}



export  function gettextus(){
return http.get("/textus").then((data)=> data.data)
}
  



 export  function getquestions(){
return http.get("/questions").then((data)=> data.data)
}
                 
 export  function getroles(){
return http.get("/roles").then((data)=> data.data)
}
     

export  function getprivacy(){
return http.get("/privacy").then((data)=> data.data)
}
  


export  function postcontacts(com){
return http.post("/contacts",com).then((data)=> data.data)
}




export  function postconsultation(com){
return http.post("/consultation",com).then((data)=> data.data)
}



  
export  function postRepresentation(com){
return http.post("/Representation",com).then((data)=> data.data)
}



export  function getAppetizer(){
return http.get("/Appetizer").then((data)=> data.data)
}




export  function getDessert(){
return http.get("/Dessert").then((data)=> data.data)
}


export  function getDrink(){
return http.get("/Drink").then((data)=> data.data)
}


export  function getSearchs(){
return http.get("/Search"

).then((data)=> data.data)
}




export  function postresult(com){
return http.post("/result",com).then((data)=> data.data)
}


