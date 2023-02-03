"use strict"
    //объекты 
    
    
    const phoneBook = {
        contacks: {
            "Vanya": 89183838383,
            "Sasha": 89187374748,
            "Rita": 74383773384
    
        },
        //метод удаления 
        del(name, number) {
            // this.contacks[name] = number;
            delete phoneBook.contacks[name];
    
        },//метод добавления    
        add(name, number) {
            this.contacks[name] = number;
        }
    };
    //вызовы методов
    phoneBook.del('Rita', 74383773384);
    console.log(phoneBook);
    phoneBook.add('Ilya', 37429874373);
    console.log(phoneBook);
    
    // //вывод имен и номеров в формате "имя - номер"
    
    for (const name in phoneBook.contacks) {
        console.log(`${name} - ${phoneBook.contacks[name]}`)
    };

