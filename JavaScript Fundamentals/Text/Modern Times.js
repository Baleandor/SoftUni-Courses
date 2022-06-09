function modernTimes(sentence){

    let splited = sentence.split(" ");
    let newArray = [];
    for( word of splited){
    if ( word.includes("#")){
        newArray.push ( word )
    }
    
    }
    let filtered = newArray.filter((x) => x.length > 1)
    
    for ( let input of filtered){
        let isWords = true;
        for ( let i = 1; i < input.length ; i++){
            if ( !isNaN(input[i])){
                isWords = false
            }
        }
        if ( isWords ){
            console.log(input.substring(1))
        }
    }
    }