$(document).ready(function() {
  
  
  // Drag with title
  
  new jBox('Modal', {
    attach: '#modal-drag-on-title',
    width: 220,
    title: 'Resume',
    overlay: false,
    content: 'Drag me around by using the title',
    draggable: 'title',
    repositionOnOpen: false,
    repositionOnContent: false
  });