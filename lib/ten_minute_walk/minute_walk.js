const direction = (route) => {
    if(route.length != 10 ){
        return false;
    }
    let x = 0;
    let y = 0;

    for(const destination of route){
        if( destination === 'w'){
            x--;
        }
        else if(destination === 'e'){
            x++;
        }
        else if(destination === 's'){
            y--;
        }
        else if(destination === 'n'){
            y++;
        }
        else {
            return false;
        }
    }
   return x === 0 && y === 0;
};

module.exports = direction;