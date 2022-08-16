for(row=1; row<=4 ;row++){
    str=""
    for(col=1;col<=4;col++){
        str+=" # "
    }
    console.log(str);
    }


    for(row=1; row<=4 ;row++){
        str=""
        for(col=1;col<=row;col++){
            str+=row
        }
        console.log(str);
        }


    for(row=1; row<=4;row++){
        str=""
        for(col=1;col<=row;col++){
            str+=col
        }
        console.log(str);
        }
           

//                  *
//             *           *
//          *       *          *

        for(row=1; row<=4;row++){
            str=" "
            for(space=4;space>row;space--){
                str+=" "
            }
            for(col=1;col<=row;col++){
                str+=" *"  
            }
            console.log(str);
            }


            
        for(row=1; row<=4;row++){
            str=" "
            for(space=4;space>row;space--){
                str+=" "
            }
            for(col=1;col<=row;col++){
                str+=" *"  
            }
            console.log(str);
            }