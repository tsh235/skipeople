import { container } from './container.js';

export const order = () => {
  const orderElem = document.createElement('section');
  orderElem.classList.add('order');

  const child = `
    <div class="order__content">
      <h2 class="order__title">Заказ успешно размещен <span class="order__price">20 000&nbsp;₽</span></h2>
      <p class="order__number">№43435</p>

      <table class="order__table table">
        <caption class="table__title">Данные доставки</caption>
        <tr class="table__row">
          <td class="table__field">Получатель</td>
          <td class="table__value">Иванов Петр Александрович</td>
        </tr>
        <tr class="table__row">
          <td class="table__field">Телефон</td>
          <td class="table__value">+7 (737) 346 23 00</td>
        </tr>
        <tr class="table__row">
          <td class="table__field">E-mail</td>
          <td class="table__value">Ivanov84@gmail.com</td>
        </tr>
        <tr class="table__row">
          <td class="table__field">Адрес доставки</td>
          <td class="table__value">Москва, ул. Ленина, 21, кв. 33</td>
        </tr>
        <tr class="table__row">
          <td class="table__field">Способ оплаты</td>
          <td class="table__value">Картой при получении</td>
        </tr>
        <tr class="table__row">
          <td class="table__field">Способ получения</td>
          <td class="table__value">Доставка</td>
        </tr>
      </table>

      <a class="order__link btn btn_main" href="/">На главную</a>
    </div>
  `;

  orderElem.append(container(child, 'order__container'));
  return orderElem;
};




