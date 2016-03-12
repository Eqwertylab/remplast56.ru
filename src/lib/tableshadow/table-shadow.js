/* Тень для таблицы */
function shadowInTable(tableWrapper){
    var wrapper = tableWrapper,
        wrapperWidth = wrapper.width(),
        table = wrapper.children('.shdwtab__table'),
        tableWidth = table.width(),
        leftShadow = wrapper.siblings('.shdwtab__shad_lt'),
        rightShadow = wrapper.siblings('.shdwtab__shad_rt'),
        scrollLeft = wrapper.scrollLeft(),
        scrollRight = tableWidth - scrollLeft - wrapperWidth,
        visibleClass='shdwtab__shad_visible';

    // Если прокрутили влево > 5 px, то задать открывающий класс левой тени
    if(scrollLeft > 5){
      leftShadow.addClass(visibleClass)
      leftShadow.css({'opacity' : scrollLeft / 100})
    }else{
      leftShadow.removeClass(visibleClass)
      leftShadow.css({'opacity' : ''})
    }
    // Если недокрутили вправо < 5 px, то задать открывающий класс правой тени
    if(scrollRight > 5){
      rightShadow.addClass(visibleClass)
      rightShadow.css({'opacity' : scrollRight / 100})
    }else{
      rightShadow.removeClass(visibleClass)
      rightShadow.css({'opacity' : ''})
    }
}

/* Смотрю таблицы с классом .shdwtab__table */
$('.shdwtab__table').each(function(idx, el) {

  /* Шаблон обертки для табл. с тенью */
  var shadowWrap =  '<div class="shdwtab">'
                      + '<div class="shdwtab__shad shdwtab__shad_lt"></div>'
                      + '<div class="shdwtab__shad shdwtab__shad_rt"></div>'
                      + '<div class="shdwtab__wrap"></div>'
                  + '</div>';
  
  /* Добавляю шаблон */
  var newTable = $(shadowWrap).insertBefore(el);
  var newTableWrap = newTable.find('.shdwtab__wrap');

  /* Оборачиваю таблицу в шаблон */
  newTableWrap.append(el);

  /* Вешаю события */ 
  newTableWrap.scroll(function() {shadowInTable($(this)); });
  $(window).resize(function() {shadowInTable(newTableWrap); });

  /* Запускаю тень */ 
  shadowInTable(newTableWrap);
});