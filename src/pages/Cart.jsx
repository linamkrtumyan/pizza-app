import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title"> Корзина</h2>
        <div className="cart__clear">
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className="content__items">
        <div class="cart__item">
          <div class="cart__item-img">
            <img
              class="pizza-block__image"
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div class="cart__item-info">
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div class="cart__item-count">
            <div class="button button--outline button--circle cart__item-count-minus">
              {/* include ../../../public/img/plus.svg  */}
            </div>
            <b>2</b>
            <div class="button button--outline button--circle cart__item-count-plus">
              {/* include ../../../public/img/plus.svg  */}
            </div>
          </div>
          <div class="cart__item-price">
            <b>770 ₽</b>
          </div>
          <div class="cart__item-remove">
            <div class="button button--outline button--circle">
              {/* include ../../../public/img/plus.svg  */}
            </div>
          </div>
        </div>
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            {" "}
            Всего пицц: <b>3 шт.</b>{" "}
          </span>
          <span>
            {" "}
            Сумма заказа: <b>900 ₽</b>{" "}
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <a
            href="/"
            className="button button--outline button--add go-back-btn"
          >
            <Link to={"/"}>
              <span>Вернуться назад</span>
            </Link>
          </a>
          <div className="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
