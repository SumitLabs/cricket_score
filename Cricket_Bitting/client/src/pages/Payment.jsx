import "./payment.css";
import React from "react";
import { useParams } from "react-router-dom";

const Payment = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <div className="container">
      <div className="payment">
        <div className="paytm">
          <img src="paytm.png" alt="paytm logo" />
          <div className="user_info">
            <h3>Aryan Textile </h3>
            <p>UPI ID: UJJBB89311764676@Ujjivan</p>
            <div className="flex center price_bg">
              <h2 className="price text-center flex center ">
                <p>{props.pay}₹</p>
              </h2>
            </div>
            <div className="QR_code">
              <img src="QR-Code.png" alt="QR Code" />
            </div>
          </div>
          <p className="pay-footer">
            Scan this OR or send money to number from any app. Money will reach
            in Aryan Textile ,Ujjivan Small Finance bank account.
          </p>
          <hr />
        </div>
      </div>
      <h3 className="note container">Please fill given form after payment !</h3>

      <div className="bank_details container">
        <h3>Bank Details : </h3>
        <div className="account_details">
          <p>
            <span>A/C :</span> 2275120250000391
          </p>
          <p>
            <span>RTGS / NEFT IFSC CODE :</span> UJVN0002275
          </p>
          <p>
            <span>Bank Address :</span> LUDHIANA - FEROZPUR ROAD
          </p>
          <p>DHANDHRA ROAD OPPOSITE GLADA FLAT,</p>
          <p>NEAR NITISH VIHAR DUGRI FIRST FLOOR MUSKAN TOWER,</p>
          <p>LUDHIANA 141003</p>
        </div>
      </div>
      <div className="container">
        <form
          action="https://formspree.io/f/maykonkk"
          method="post"
          className="flex fex_direction pay_proof"
        >
          <input
            type="text"
            name="User Name"
            placeholder="Username"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <input
            type="phone"
            name="Phone Number"
            placeholder="Phone Number ex: +91-9436..."
            autoComplete="off"
            required
          />

          <input
            type="text"
            name="Transaction id"
            placeholder="Enter your Transaction id"
            autoComplete="off"
          />
          <textarea
            name="Massage"
            cols="30"
            rows="10"
            placeholder="Subject..."
            autoComplete="off"
            required
          ></textarea>
          <input type="file" name="pay slipe" required />
          <input
            type="submit"
            value="Submit"
            className="submit"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};

export default Payment;
