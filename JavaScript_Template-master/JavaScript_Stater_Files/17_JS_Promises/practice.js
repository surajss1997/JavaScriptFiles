let do10Study = new Promise((pass,fail) => {
    let isPass = true;
    if(isPass)
    { pass('You are passed in 10th');
    }
    else {
        fail('You are faild in 10th');
    }
});

let doDiploma = new Promise((pass,fail) =>{


    let isPass = true;
    if(isPass)
    {
        pass('You are passed in diploma');
    }
    else {
        fail('You are failed in diploma');
    }
});

let doAdmissionDegree = new Promise((pass,fail) => {
    let isPass = true;
    if(isPass)
    {
        pass('You got admission in Engineering');
    }
    else {
        fail('Sorry!! you are not eligible');
    }

});

let clearSecondYear = new Promise((pass,fail) => {

    let isPass = true;
    if(isPass)
    {
        pass('You cleared second year');
    }
    else {
        fail('You are failed');
    }
});


let clearThirdYear = new Promise((pass,fail) => {

    let isPass= true;
    if(isPass)
    {
        pass('You cleard 3rd year');
    }
    else
    {
        fail('You failed in 3rd year');
    }
});



let clearLastYear = new Promise((pass,fail) => {
    let isPass = true;
    if(isPass)
    {
        pass('You are now Engineer');
    }
    else
    {
        fail('You are failed in last year');
    }

});

let doME = new Promise(( pass,fail) => {
    let isPass= true;
    if(isPass)
    {
        pass('You are eligible ');
    }
    else
    {
        fail('You are not Eligible');
    }
});

let clearFirstME = new Promise((pass,fail) => {
    let isPass= true;
    if (isPass)
    {
        pass('You are clear first year in ME');
    }
    else {
        fail('You are failed in ME first year');
    }
});

let clearSecondME = new Promise((pass,fail) => {
    let isPass=  true;
    if (isPass)
    {
        pass('You are passed !!!');
    }
    else {
        fail('You are failed');
    }
});

let doPhd = new Promise((pass,fail) => {
    let isPass= true;
    if (isPass)
    {
        pass('You are eligible for PHD');
    }

    fail('You are not eligible for PHD');

});

let doJob = new Promise((pass,fail) => {
    let isPass = true;
    if (isPass)
    {
        pass('your age is now 30.....get marry soon');
    }
    fail('now take SANYAAS!!! and go to HIMALAYA');
});


do10Study.then((message)=> {
    let result =`${message} => `;

    doDiploma.then((message) =>{
        result += `${message} =>`;

        doAdmissionDegree.then((message)=> {
            result += `${message} =>`;

            clearSecondYear.then((message) => {
                result += `${message} =>`;

                clearThirdYear.then((message) => {
                    result += `${message} =>`;

                    clearLastYear.then((message) =>{
                        result += `${message} =>`;

                        doME.then((message)  => {
                            result += `${message} =>`;

                            clearFirstME.then((message) => {
                                result += `${message} =>`;

                                clearSecondME.then((message) => {
                                    result += `${message} =>`;

                                    doPhd.then((message) => {
                                        result += `${message} =>`;

                                        doJob.then((message) => {
                                            result += `${message}`;
                                            console.log(result);
                                        }).catch((message) => {
                                            console.error(message);
                                        });
                                        console.log(result);
                                    }).catch((message) => {
                                        console.error(message);
                                    });

                                console.log(result);
                            }).catch((message) => {
                                console.error(message);
                            });

                            console.log(result);
                        }).catch((message) => {
                            console.error(message);
                        });


                        console.log(result);
                    }).catch((message) => {
                        console.error(message);
                    });

                    console.log(result);
                }).catch((message) => {
                    console.error(message);
                });

                console.log(result);
            }).catch((message) => {
                console.error(message);
            });

            console.log(result);
        }).catch((message) => {
            console.error(message);
        });

        console.log(result);
    }).catch((message) => {
        console.error(message);
    });

    console.log(result);
}).catch((message) => {
    console.error(message);
});

    console.log(result);
}).catch((message) => {
    console.error(message);
});

