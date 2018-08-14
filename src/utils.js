/* ===============================================
 *                公 用 资 源 函 数
 * =============================================== */
export function dateFormat(time) {
  let date=new Date(time);
  return date.toLocaleString();
  /*var year=date.getFullYear();
  var month=(date.getMonth()+1)<10?("0"+(date.getMonth()+1)):(date.getMonth()+1);
  var day=date.getDate()<10?("0"+date.getDate()):date.getDate();
  var day=date.getDay()<10?("0"+(date.getDay()+1)):date.getDay()+1;
  var hours=date.getHours()<10?("0"+date.getHours()):date.getHours();
  var minuts=date.getMinutes()<10?("0"+date.getMinutes()):date.getMinutes();
  var seconds=date.getSeconds()<10?("0"+date.getSeconds()):date.getSeconds();*/

}
Date.prototype.toLocaleString = function() {
  let year = this.getFullYear();
  let month = (this.getMonth()+1)<10?("0"+(this.getMonth()+1)):(this.getMonth()+1);
  let day = this.getDate()<10?("0"+this.getDate()):this.getDate();
  //let week = this.getDay()<10?("0"+(this.getDay()+1)):this.getDay()+1;
  let hours = this.getHours()<10?("0"+this.getHours()):this.getHours();
  let minuts = this.getMinutes()<10?("0"+this.getMinutes()):this.getMinutes();
  //let seconds = this.getSeconds()<10?("0"this.getSeconds()):this.getSeconds();
  return year + "-" + month + "-" + day + " " + hours + ":" + minuts;
};
