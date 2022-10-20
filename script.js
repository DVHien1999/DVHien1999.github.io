'use strict';
let input;
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let error = document.querySelector('.error');
let submitBtn = document.querySelector('#submit-btn');
const formContainer = document.querySelector('.Form-container');
const Infomation = document.querySelector('.info');
const jobItem = document.querySelectorAll('.hover');
const BtnViewMore = document.querySelectorAll('.Viewmore');
const jobContent = document.querySelectorAll('.job-content');
// function báo lỗi
let errorMess = function (mess) {
  error.textContent = mess;
  if (error.classList.contains('hidden')) error.classList.remove('hidden');
};
// xử lý event click của button submit thông tin cá nhân
submitBtn.addEventListener('click', function () {
  input = document.querySelector('.email').value;
  console.log(input === 'hiendvFX18922@funix.edu.vn');
  if (input == '') {
    errorMess('Không được để trống');
  } else if (!regex.test(input)) {
    errorMess('Không đúng định dạng');
  } else if (input !== 'hiendvFX18922@funix.edu.vn') {
    errorMess('Không đúng email');
  } else if (input === 'hiendvFX18922@funix.edu.vn') {
    formContainer.classList.add('hidden');
    Infomation.classList.remove('hidden');
  }
});
//
// xử lý event hover của job-info
for (let i = 0; i < jobItem.length; i++) {
  jobItem[i].addEventListener('mouseover', function () {
    BtnViewMore[i].classList.remove('hidden');
  });
  jobItem[i].addEventListener('mouseout', function () {
    BtnViewMore[i].classList.add('hidden');
  });
}
// xử lý event click của Button View More
let Hide = true;
for (let i = 0; i < BtnViewMore.length; i++) {
  BtnViewMore[i].addEventListener('click', function () {
    Hide ? (Hide = false) : (Hide = true);
    if (!Hide) {
      BtnViewMore[i].innerHTML = `<span>&#x25BC;</span> view less`;
      jobContent[i].classList.remove('hidden');
    } else {
      BtnViewMore[i].innerHTML = `<span>&#x25BC;</span> view more`;
      jobContent[i].classList.add('hidden');
    }
  });
}
