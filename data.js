const empData = [];

function prepareData() {
    for (let i=0; i < 5; i++) {
        console.log('emp created for '+ i);
        empData.push('emp_' + i);
    }
}
prepareData();
