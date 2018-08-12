import Vue from 'vue';
import {dateFormat} from "../utils";

/*
将时间值转化为时间格式 eg. 2018-8-11 11:00
 */
Vue.filter('date', dateFormat);
