const showFunction = () => {

    const temp = document.getElementById('temp').value;
    console.log(temp);

    const selectTemp = document.getElementById('temp_diff').value;
    const valueTemp = temp_diff.options[selectTemp.seclectedIndex].value;


    const celTofeh = (cel) => {

        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }


    const fehTocel = (feh) => {

        let celsius = Math.round((cel - 32) * 5 / 9);
        return fahrenheit;
    }

    let result;


    if (valueTemp == "cel") {
        result = celTofeh(temp)
        document.getElementById('res').innerHTML = ` = ${result} °Fahrenheit`
    } else {
        result = fehTocel(temp)
        document.getElementById('res').innerHTML = ` = ${result} °Celsius`
    }
}
