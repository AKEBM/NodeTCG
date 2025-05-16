
    for (let y=0; y<14; y++){
        for (let x=0; x<24; x++){
            var z = document.createElement("div");
            z.style.width = '5vw';
            z.style.height = '5vw';
            z.style.left = 5*(x-2)+'vw';
            z.style.top = 5*(y-2)+'vw';
            z.style.position = "absolute";
            z.style.opacity = 0.7;
            z.id = "div."+x+"."+y;
            //z.onclick = "show("+z.id+");";
            z.onclick=function(){show("div."+x+"."+y)};
            z.style.zIndex=2;
            z.className = "case";
            z.style.borderRadius = '15px';
            z.style.border = "1px solid red";

            
            
            document.getElementsByClassName('main')[0].appendChild(z);
        }
    }

    for (let y=-1; y<2; y+=2){
        for (let x=-1; x<2; x+=2){
            var z = document.createElement("div");
            z.style.width = '5vw';
            z.style.height = '5vw';
            z.style.left = 0;
            z.style.top = 0;
            z.style.position = "absolute";
            z.style.opacity = 0.7;
            z.style.display = 'none';
            z.id = "div."+x*100+"."+y*100;
            //z.onclick = "show("+z.id+");";
            z.onclick=function(){show("div."+x+"."+y)};
            z.className = "case";
            document.getElementsByClassName('main')[0].appendChild(z);
        }
    }

    var z2 = document.createElement("img");
    z2.src="/cards/friends.png";

    
    z2.style.height = "5vw";
    
    z2.style.position = "absolute";
    

    z2.style.zIndex = 3;
    
    
    document.getElementById("div.3.3").appendChild(z2);
    var z2 = document.createElement("img");
    z2.src="/cards/friends.png";

    
    z2.style.height = "5vw";
    
    z2.style.position = "absolute";
    

    z2.style.zIndex = 3;
    
    
    document.getElementById("div.3.3").appendChild(z2);
    var z2 = document.createElement("img");
    z2.src="/cards/hook.png";

    
    z2.style.height = "5vw";
    
    z2.style.position = "absolute";
    

    z2.style.zIndex = 3;
    
    
    document.getElementById("div.3.3").appendChild(z2);
    var z2 = document.createElement("img");
    z2.src="/cards/friends.png";

    
    z2.style.height = "5vw";
    
    z2.style.position = "absolute";
    

    z2.style.zIndex = 3;
    
    
    document.getElementById("div.3.3").appendChild(z2);
    //document.getElementById("div.3.3").appendChild(zoom2);


    //document.getElementById("div.3.3").appendChild(document.getElementById("div.3.3.1"))
    //document.getElementById("div.3.3").removeChild(document.getElementById("div.3.3.1"))

//    anime({targets:'h1',left: 100});
//anime({targets:'h1',left: 0});
//document.getElementById("div.5.3").appendChild(document.getElementById("div.3.3.1"))
//document.getElementById("div.3.3.1").id = "div."

    var selected;
    var value = 0;
    var selected_for_movement=null;


    var old_left = 0;
    var old_top = 0;

    //on cache les boutons gauche et droite
    anime({targets: '#left', left: "-200px", duration: 0})
    anime({targets: '#right', right: "-200px", duration: 0})

    function show(id_){
        if (document.getElementById('check').checked){
            document.getElementById('check').checked = false;
            anime({targets:document.getElementsByClassName('menu div')[0], opacity: document.getElementById('check').checked+0,translateX: 45*(document.getElementById('check').checked) +'vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration: 400})
            return;
        }
        if (document.getElementById('switch').checked || selected_for_movement){
            if (!selected_for_movement){
                selected_for_movement = id_;
                return;
            }
            else{
                var xmlHttp = null; 
                xmlHttp = new XMLHttpRequest(); 
                xmlHttp.open( "GET", "move/"+selected_for_movement+"/"+id_, false ); 
                xmlHttp.send( null ); 
                selected_for_movement = null;
                return;
            }
            
        }

        if (selected){//dézoom
            


            
            var divs = document.getElementsByClassName('case');

            for (var a=0; a<divs.length ; a++){
    
                    anime({targets: divs[a], opacity:0.7, duration: 2000})
            }
            
            
            for (var a=0; a<selected.children.length; a++){
                anime({targets:selected.children[a], translateX: 0.55*a+'vw',translateY: -0.55*a+'vw', duration:700, height: 5+(state)*3+"vw", delay: 0+150*a, easing: 'cubicBezier(.5, .05, .1, .3)'});
                anime({targets:selected.children[a],left:0, duration:700, height: 5+(state)*3+"vw", delay: 300+150*a, easing: 'cubicBezier(.5, .05, .1, .3)'});
                

                selected.children[a].style.zIndex = 10-a;
            }
            
            anime({targets: selected, left:old_left, top: old_top, duration: 1000, delay: 00});
            if (state == 1){
                if (player==1){
                    anime({targets:selected,translateX: '17vw',translateY: '17vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
                }
                else if (player==2){
                    
                    anime({targets:selected,translateX: -8*10+'vw',translateY: '17vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
                }
                else if (player==3){
                    
                    anime({targets:selected,translateX: '17vw',translateY: -4.4*10+'vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
                }
                else if (player==4){
                    
                    anime({targets:selected,translateX: -8*10+'vw',translateY: -4.4*10+'vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
                }
            }
            selected = null; 
            value = 0;
            
            anime({targets: '#left', left: "-200px", duration: 1000, delay: 600})
            anime({targets: '#right', right: "-200px", duration: 1000, delay: 600})
            return;
        }
        
        
        //anime({targets: body[0],opacity: 0, duration: 3000});

        
        
        anime({targets: '#left', left: "4vw", duration: 1000, delay: 600})
        anime({targets: '#right', right: "1vw", duration: 1000, delay: 600})

        var element = document.getElementById(id_);
        selected = element;
        var divs = document.getElementsByClassName('case');

        for (var a=0; a<divs.length ; a++){
            if (divs[a]!=element){
                //divs[a].style.opacity = 0.1;
                anime({targets: divs[a], opacity:0.1, duration: 2000})
            }
            else{
                //divs[a].left = 0;
                //divs[a].top = 0;
                anime({targets: divs[a], opacity:1, duration: 2000})
                
                
            }
        }

        old_left = element.style.left;
        old_top = element.style.top;
        element.style.left = "10vw";
        element.style.top = "10vw";
        
        anime({targets: element, translateX: 0, translateY:0, duration:0});
  
        

        for (var a=0; a<element.children.length ; a++){
            anime({targets: element.children[a], left: a*0.5+'vw', height: 0, duration:0})
            anime({targets: element.children[a], left: a*30+'vw', duration: 300, delay: 400+150*a})
        }
        anime({targets: element.children, height: '40vw', translateX:'-8vw', translateY:'-7vw',duration: 800});
        //anime({targets: selected, translateX: -50*(state+1)*divs[a].id[5], translateY: -50*(state+1)*divs[a].id[7], duration: 3000, delay:2000})
translateX: '17vw'
        //anime({targets: element, top: '0vw', left: '3vw', duration: 2000})

        
    }
    function left(){
        if (value<0){value+=1};
        for (var a=0; a<selected.children.length ; a++){
            anime({targets: selected.children[a], left: a*30+value*50+"vw"})
        }
    }
    function right(){
        value-=1;
        for (var a=0; a<selected.children.length ; a++){
            anime({targets: selected.children[a], left: a*30+value*50+"vw"})
        }
    }


function move(bx, by, dx, dy){
  var children = document.getElementById('div.'+bx+'.'+by).children;
  
  anime({targets:children, 
  translateX: 5*(dx-bx)+3*(dx-bx)*(state)+'vw',
  translateY: 5*(dy-by)+3*(dy-by)*(state)+'vw', duration: 700
  });
  if (bx>90 || bx< -90||by>90 ||  by< -90){
    console.log("aaa");
    anime({targets:children, opacity: 0, duration: 0})
    anime({targets:children, opacity: 1, duration: 1000, delay: 700})
  }
  //anime({targets:children,translateX: 0, duration:0, delay: 500});


    setTimeout(()=>{
      var children = document.getElementById('div.'+bx+'.'+by).children;
      while(0<children.length){
        var tableChild = children[0];
        document.getElementById('div.'+dx+'.'+dy).appendChild(tableChild);
        anime({targets:tableChild,translateX: '0vw',translateY: '0vw', duration:0});
      }
      var children = document.getElementById('div.'+dx+'.'+dy).children;
      

      for (var a=0; a<children.length;a++){
        anime({targets:children[a],translateX: 0.55*a+'vw',translateY: -0.55*a+'vw', duration:1400, delay: 100});
        children[a].style.zIndex = 10-a;
      }
      //anime({targets:tableChild,left: '0', duration:0});
      
      
      //anime({targets:tableChild,translateX: '-20'*(state+1)+'vw'})
    }, 700)
    

}


function card_out(div, nb, player){
    var div = document.getElementById(div);
    if (player==1){var newdiv = document.getElementById("div.-100.-100");}if (player==2){var newdiv = document.getElementById("div.100.-100");}if (player==3){var newdiv = document.getElementById("div.-100.100");}if (player==4){var newdiv = document.getElementById("div.100.100");}

    console.log(newdiv);
    child = div.children[nb];
    setTimeout(()=>{
        newdiv.appendChild(child);
        selected_for_movement = newdiv.id;
    }, 700);
}

setTimeout(()=>{
    selected_for_movement = null;
}, 2000);




    var state = 0;
    function change_view(){
        if (player==0){return;}
        state+=1;
        if (state==2){state=0}
        if (state==1){
            
            anime({targets: "#wallpaper", width:"240vw", easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
            liste = document.getElementsByClassName('case');
            if (player==1){
                anime({targets:liste,translateX: '17vw',translateY: '17vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
            }
            else if (player==2){
                
                anime({targets: "#wallpaper", translateX:-8*10+'vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
                //anime({targets: document.body.,translateX: -8*10+'vw',translateY: '17vw'});
                anime({targets:liste,translateX: -8*10+'vw',translateY: '17vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
            }
            else if (player==3){
                
                anime({targets: "#wallpaper", translateY:-4*10+'vw' , easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
                //anime({targets: document.body.,translateX: -8*10+'vw',translateY: '17vw'});
                anime({targets:liste,translateX: '17vw',translateY: -4.4*10+'vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
            }
            else if (player==4){
                
                anime({targets: "#wallpaper", translateX:-8*10+'vw',translateY:-4*10+'vw' , easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
                //anime({targets: document.body.,translateX: -8*10+'vw',translateY: '17vw'});
                anime({targets:liste,translateX: -8*10+'vw',translateY: -4.4*10+'vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});
            }


            for (let y=0; y<14; y++){
                for (let x=0; x<24; x++){var a = document.getElementById('div.'+x+'.'+y); a.style.left = 8*(x-2)+'vw';
                    a.style.top = 8*(y-2)+'vw';a.style.width='8vw';a.style.height='8vw'
                    
                    var children = a.children;
                    for (var i = 0; i < children.length; i++) {
                        if (children[i].style.height=='5vw'){children[i].style.height='8vw';}
                        else{children[i].style.width='2vw';}
                        
                    }
                } 
            }

        }
        else{
            anime({targets: "#wallpaper", width:"120vw", translateX:0, translateY:0, easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});

            liste = document.getElementsByClassName('case');
            

            for (let y=0; y<14; y++){
                for (let x=0; x<24; x++){var a = document.getElementById('div.'+x+'.'+y); a.style.left = 5*(x-2)+'vw';
                    a.style.top = 5*(y-2)+'vw';a.style.width='5vw';a.style.height='5vw'
                    
                    var children = a.children;
                    for (var i = 0; i < children.length; i++) {
                        if (children[i].style.height=='8vw'){children[i].style.height='5vw';}
                        else{children[i].style.width='1vw';}
                    }
                } 
            }
            anime({targets:liste,translateX: '0vw',translateY: '0vw', easing: 'cubicBezier(.5, .05, .1, .3)', duration:300});

        }
    }



var last_command = "";





function main(){
    
    var xmlHttp = null; 
    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open( "GET", "get_data", false ); 
    xmlHttp.send( null ); 
    var text = xmlHttp.responseText.replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x27;', "'").replace('&#x3D;', "=").replace('&#x3D;', "=").replace('&#x3D;', "=").replace('&#x3D;', "=").replace('&#x3D;', "=").replace('&#x3D;', "=").replace('&#x3D;', "=").replace('&#x3D;', "=").replace('&lt;', "<").replace('&lt;', "<").replace('&lt;', "<").replace('&lt;', "<").replace('&gt;', ">");
    if (text.replace(last_command, '')!=''){
        console.log(text.replace(last_command, ''));
        eval(text.replace(last_command, ''));
        if (state==1){eval(text);}
        
        last_command = text;
    }
    setTimeout(main, 1000);
}


setTimeout(main, 1000);    



