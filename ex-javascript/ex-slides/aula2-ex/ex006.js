function camelize(strHip) {
    let strCam = '';
    console.log(strHip.split('-')); 
    strHip.split('-').forEach(value => {
        console.log(value.replace(value[0],value[0].toUpperCase()));
        strCam += value.replace(value[0],value[0].toUpperCase());
        
    })
    console.log(strCam);
}


camelize('background-color');