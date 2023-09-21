const btn_start = document.querySelector('.btn_start'),
      start_page = document.querySelector('.start_page'),
      input_page = document.querySelector('.input_page'),
      num_page = document.querySelector('.num_page'),
      result_page = document.querySelector('.result_page'),
      checkboxs = document.querySelectorAll('.input_page_checkboxs_item input'),
      check_btn = document.querySelector('.input_page_submit button');

function TogglePage(page) {
    page.classList.toggle('hide');
}
const values = [];

btn_start.addEventListener('click', () => {
    TogglePage(start_page);

    const numbers = [0,1,2,3,4,5,6,7,8,9];
    for(let i = 0;i < 6; i++) {
        let ind = Math.floor(Math.random() * 10) - i;
        values.push(numbers.splice(ind, 1)[0]);
    }
    values.forEach(item => {
        const span = document.createElement('span');
        console.log(Math.floor(Math.random()));
        if(Math.round(Math.random())) {
            span.style.cssText = 'color: orange';
        }
        span.innerText = item + '\n';
        num_page.append(span);
    });
    TogglePage(num_page);
    setTimeout(() => {
        TogglePage(num_page);
        TogglePage(input_page);
    }, 5000);
});
check_btn.addEventListener('click', () => {
    const answers = [];
    checkboxs.forEach(cb => {
        if(cb.checked) {
            answers.push(Number(cb.value));
        }
    });

    console.log(answers, values);
    values.forEach(item => {
        if(answers.indexOf(item) != -1) {
            result_page.innerHTML += item + 'выбран верн';
        } else {
            result_page.innerHTML += item + 'неверно';
        }
    });
    TogglePage(input_page);
    TogglePage(result_page);
});