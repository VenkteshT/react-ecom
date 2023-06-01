import React, { useState } from "react";
import {
  editProduct,
  deleteProduct,
  addToCart,
  removeFromCart,
  setProduct,
} from "../../redux/products";
import { useDispatch } from "react-redux";
import "./Card.css";
import { Link } from "react-router-dom";

// icons to represent rating insted of numbers format
const stars = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

//
export default function Card({ item, index, cart }) {
  //
  const dispatch = useDispatch();

  // states
  const [edit, setEdit] = useState(false);
  const [editedContent, setEditContent] = useState({
    title: "",
    price: "",
    rating: "",
    description: "",
  });

  //handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditContent((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  };

  // handle update
  const handleUpdate = () => {
    setEdit(false);
    dispatch(editProduct({ id: item.id, index, content: editedContent }));
    setEditContent({
      title: "",
      price: "",
      rating: "",
      description: "",
    });
  };

  // cancel update
  const cancelUpdate = () => {
    setEditContent({
      title: "",
      price: "",
      rating: "",
      description: "",
    });
    setEdit(false);
  };

  // handle cart
  const handleCart = () => {
    if (cart) dispatch(removeFromCart({ id: item.id }));
    else dispatch(addToCart({ product: item }));
  };

  //
  return (
    <div className="item-container">
      <div className="item-content">
        <div className="item-img">
          <Link
            to={"/product-info"}
            onClick={() => dispatch(setProduct({ product: item }))}
          >
            <img
              src={item.img || item.images[0]}
              width={250}
              height={190}
              alt={item.title}
            />
          </Link>
        </div>

        {!edit ? (
          // not it editing state
          <div className="item-info">
            <span className="item-name">{item.title}</span>
            <span className="item-price">₹ {item.price}</span>
            <span className="item-rating">
              {stars[Math.round(item.rating) - 1]}
            </span>
          </div>
        ) : (
          // in editing state
          <div className="item-info">
            <label htmlFor="">title</label>
            <input
              className="item-name"
              name="title"
              value={editedContent.title}
              onChange={handleChange}
            />
            <label htmlFor="">price</label>
            <input
              className="item-price"
              name="price"
              value={editedContent.price}
              onChange={handleChange}
            />
            <label htmlFor="">rating</label>
            <input
              className="item-rating"
              name="rating"
              value={editedContent.rating}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="item-description">
          <div className="about-item">
            {!edit ? (
              // not in editing state
              <>{item.description}</>
            ) : (
              // editing state
              <div className="edit">
                <textarea
                  value={editedContent.description || item.description}
                  name="description"
                  onChange={handleChange}
                  className="item-detail"
                  cols="30"
                  rows="6"
                ></textarea>
                <div className="btns">
                  <button className="update" onClick={handleUpdate}>
                    update
                  </button>

                  <button className="cancel" onClick={cancelUpdate}>
                    cancle
                  </button>
                </div>
              </div>
            )}
          </div>
          {!edit && (
            // not in editing state
            <div className="btns">
              {!cart && (
                // if item not in cart
                <div className="modify-options">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
                    alt="edit"
                    className="edit"
                    onClick={() => {
                      setEdit(true);
                      setEditContent({ ...item });
                    }}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/542/542724.png"
                    alt="delete"
                    className="delete"
                    onClick={() => dispatch(deleteProduct({ id: item.id }))}
                  />
                </div>
              )}
              <button
                className={`${cart ? "remove" : "add"}`}
                onClick={handleCart}
              >
                {cart ? "remove" : " Add To Cart"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
