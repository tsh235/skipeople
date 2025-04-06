import { container } from './container.js';

export const cart = () => {
  const cartElem = document.createElement('section');
  cartElem.classList.add('cart');

  const child = `
    <h2 class="cart__title section-title">Корзина</h2>

    <div class="cart__wrapper">
      <ul class="cart__list">
        <li class="cart__item">
          <img class="cart__img" src="/img/photo-small.jpg" alt="фото товара" width="120" height="99">
          <h3 class="cart__item-title">Горные лыжи</h3>
          <p class="cart__article">арт. 84348945757</p>
          <div class="cart__item-control">
            <button class="cart__item-btn">-</button>
            <span class="cart__item-count">1</span>
            <button class="cart__item-btn">+</button>
          </div>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
        </li>
        <li class="cart__item">
          <img class="cart__img" src="/img/photo-small.jpg" alt="фото товара" width="120" height="99">
          <h3 class="cart__item-title">Горные лыжи</h3>
          <p class="cart__article">арт. 84348945757</p>
          <div class="cart__item-control">
            <button class="cart__item-btn">-</button>
            <span class="cart__item-count">1</span>
            <button class="cart__item-btn">+</button>
          </div>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
        </li>
        <li class="cart__item">
          <img class="cart__img" src="/img/photo-small.jpg" alt="фото товара" width="120" height="99">
          <h3 class="cart__item-title">Горные лыжи</h3>
          <p class="cart__article">арт. 84348945757</p>
          <div class="cart__item-control">
            <button class="cart__item-btn">-</button>
            <span class="cart__item-count">1</span>
            <button class="cart__item-btn">+</button>
          </div>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
        </li>
      </ul>

      <div class="cart__total">
        <h3 class="cart__subtitle">Оформление</h3>

        <div class="cart__total-info">
          <p class="cart__total-count">3 товара на сумму:</p>
          <p class="cart__total-price">20&nbsp;000&nbsp;₽</p>
        </div>

        <p class="cart__total-delivery">Доставка 0&nbsp;₽</p>

        <button class="cart__btn btn btn_main" type="submit" form="form-order">Оформить заказ</button>
      </div>

      
      <form class="cart__form form-order" id="form-order" method="POST">
        <h3 class="cart__subtitle cart__subtitle_form-order">Данные для доставки</h3>

        <fieldset class="form-order__fieldset form-order__fieldset_input">
          <input class="form-order__input" type="text" name="name" required placeholder="Фамилия Имя Отчество">
          <input class="form-order__input" type="tel" name="phone" required placeholder="Телефон">
          <input class="form-order__input" type="email" name="email" required placeholder="E-mail">
          <input class="form-order__input" type="text" name="address" required placeholder="Адрес доставки">
          <textarea class="form-order__textarea" name="comments" placeholder="Комментарий к заказу"></textarea>
        </fieldset>

        <fieldset class="form-order__fieldset form-order__fieldset_radio">
          <legend class="form-order__legend">Доставка</legend>
          <label class="form-order__label radio">
            <input class="radio__input" type="radio" name="deliveryType" value="Доставка" required checked />
            Доставка
          </label>
          <label class="form-order__label radio">
            <input class="radio__input" type="radio" name="deliveryType" value="Самовывоз" required />
            Самовывоз
          </label>
        </fieldset>

        <fieldset class="form-order__fieldset form-order__fieldset_radio">
          <legend class="form-order__legend">Оплата</legend>
          <label class="form-order__label radio">
            <input class="radio__input" type="radio" name="paymentType" value="Картой при получении" required checked />
            Картой при получении
          </label>
          <label class="form-order__label radio">
            <input class="radio__input" type="radio" name="paymentType" value="Наличными при получении" required />
            Наличными при получении
          </label>
        </fieldset>
      </form>
    </div>
  `;

  cartElem.append(container(child));
  return cartElem;
};


  


