import React from "react";
import "../styles/magicCat.scss";

export default function MagicCat(props) {
  return (
    <div className="luna-form">
      <div class="luna-tail">
        <div class="tail">
          <div class="tail">
            <div class="tail">
              <div class="tail">
                <div class="tail">
                  <div class="tail">
                    <div class="tail">
                      <div class="tail">
                        <div class="tail">
                          <div class="tail">
                            <div class="tail">
                              <div class="tail">
                                <div class="tail">
                                  <div class="tail">
                                    <div class="tail">
                                      <div class="tail">
                                        <div class="tail">
                                          <div class="tail">
                                            <div class="tail last"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div className="form__header">
          <div className="form__img-wrapper">
            <img className="form__img" alt="" />
          </div>
          <h2 className="form__heading">{props.title}</h2>
          <div></div>
        </div>
        <div class="luna">
          <div class="ears">
            <div class="ear left-ear">
              <div class="inner-ear"></div>
            </div>
            <div class="ear right-ear">
              <div class="inner-ear"></div>
            </div>
          </div>
          <div class="head">
            <div class="moon"></div>
            <div class="face">
              <div class="eyes">
                <div class="eye blink">
                  <div class="inner-eye left"></div>
                </div>
                <div class="eye blink">
                  <div class="inner-eye right"></div>
                </div>
              </div>
              <div class="nose"></div>
              <div class="mouth"></div>
            </div>
          </div>
          <div class="whiskers"></div>
        </div>
        <form className="authorization__form">{props.children}</form>
      </div>
      <div class="logged-in">
        <div class="gif-wrapper">
          <img
            src="http://giphygifs.s3.amazonaws.com/media/tw6L7TjvODnTa/giphy.gif"
            alt="Usagi welcomes you"
          />
          <figcaption>In the name of the moon, we welcome you!</figcaption>
        </div>
      </div>
    </div>
  );
}
