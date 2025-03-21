function extensive(str) {
    console.log(str.split('/'));
    const data = str.split('/');
    const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril','Maio',
        'Junho','Julho',"Agosto",'Setembro','Outubro','Novembro',"Dezembro"];
    
    console.log(`${data[0]} de ${mes[parseInt(data[1])-1]} de ${data[2]}`)
}


extensive('22/04/2025')