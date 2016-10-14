'use strict';

ymaps.ready(function () {

  var myMap = new ymaps.Map('map-1', {
          center: [60.0215,30.3686],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Центральный офис',
          balloonContent: 'Тихорецкий пр. д. 21'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/placemark.png',
          // Размеры метки.
          iconImageSize: [150, 97],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-75, -97]
      });
  myMap.geoObjects.add(myPlacemark);

  var myMap = new ymaps.Map('map-2', {
          center: [59.9230,30.3484],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Офис "Обводный"',
          balloonContent: ' Бизнес-центр «Stels», ул. Боровая, д. 32, офис 218'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/placemark.png',
          // Размеры метки.
          iconImageSize: [150, 97],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-75, -97]
      });
  myMap.geoObjects.add(myPlacemark);
});