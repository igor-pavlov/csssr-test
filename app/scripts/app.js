import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import '../blocks/slider/slider';
import '../../node_modules/jquery-mask-plugin';

$(() => {
	svg4everybody();
});

$(document).ready(function () {
	$('.signature__input input').mask('00.00.0000');
	$('.text__input input[type=number]').mask('0000');
});
