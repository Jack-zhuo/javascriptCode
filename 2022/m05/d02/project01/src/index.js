import $ from 'jquery';

import './index.css';

import './index.less';

import logo from './images/logo.png';
$(".box").attr('src',logo);
$(function () {
    $("li:even").css('color','pink');


})