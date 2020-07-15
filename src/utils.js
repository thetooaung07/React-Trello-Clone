export const getInitials = (name) => {
  var initials="";
  var names = name.split(' ');
  initials = names[0].substring(0,1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};


// export const showMenu = (element) => {
//   var rect = document.getElementById('idForRect'+id).getBoundingClientRect()
//   var listMenu = document.querySelector('.showmenu'+id);
//   listMenu.style.display = "flex";
//   listMenu.style.left =  rect.left-15 + "px";
//   listMenu.style.top = rect.top+27 + "px";
// }
