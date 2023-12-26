import React from "react";
import "../../custom_styles/parallax.css";

// source from : https://codepen.io/designfenix/pen/xxWeEQV

const Parallax = () => {
  return (
    <div className="wrapper-images">
      {[1, 2].map((val, key) => {
        return (
          <div key={key} className="iterations">
            {/*5 images by row -*/}
            <div className="images-line">
              {[1, 2, 3].map((val, key2) => {
                return (
                  <div key={key2} className="flex">
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal)",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/*5 images by row -*/}
            <div className="images-line">
              {[1, 2, 3].map((val, key2) => {
                return (
                  <div key={key2} className="flex">
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB81FFA55537B7021F8656FF0BE79D5A5153EA25C2474A83BFAB6E714E81CB53/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DB81FFA55537B7021F8656FF0BE79D5A5153EA25C2474A83BFAB6E714E81CB53/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BD6265B65C2956ACCB44E13778A5A67DB2E7786DA88768654E1F53D1F44B907/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BD6265B65C2956ACCB44E13778A5A67DB2E7786DA88768654E1F53D1F44B907/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B44FE70953E3765853134FE4C632C4C25D51D1DDF5DCB4F4105B419D410FFE19/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B44FE70953E3765853134FE4C632C4C25D51D1DDF5DCB4F4105B419D410FFE19/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/59CBA35AB929C8A53706D0412754BD7A338BB37813D104DBEAF69444D5ABF79D/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/59CBA35AB929C8A53706D0412754BD7A338BB37813D104DBEAF69444D5ABF79D/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FE9AA3E685B55B382DDBF77DA3E679DA343A70FC1308837D6E2296459E03F417/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FE9AA3E685B55B382DDBF77DA3E679DA343A70FC1308837D6E2296459E03F417/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/*5 images by row -*/}
            <div className="images-line">
              {[1, 2, 3].map((val, key2) => {
                return (
                  <div key={key2} className="flex">
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C5F8728CD265CD3C22B3F6356B2514F3C112D9B874D1553665C0855702B1BB3/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9C5F8728CD265CD3C22B3F6356B2514F3C112D9B874D1553665C0855702B1BB3/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7FDD68992FA1EA5F6B0B09D7C4D170908EF457ECEBE1808A170CBE8EA36F5FD/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7FDD68992FA1EA5F6B0B09D7C4D170908EF457ECEBE1808A170CBE8EA36F5FD/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EEE09E81171ED8EBF20FF8052920838990F9626F58211628B6D8DECBCD1389AB/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EEE09E81171ED8EBF20FF8052920838990F9626F58211628B6D8DECBCD1389AB/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA6235F6977391952DBBCDADF2B4A76CF712FBA11719A17EA58C2171DAC4641E/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA6235F6977391952DBBCDADF2B4A76CF712FBA11719A17EA58C2171DAC4641E/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                    <div
                      className="line"
                      style={{
                        backgroundImage:
                          "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3B909145E05EC6E0E3F3004B2BCECC74C39D0AE42DB64C81C5088160F636DA6E/scale?width=400&aspectRatio=0.71&format=jpeg)",
                      }}
                    >
                      <div
                        className="img"
                        style={{
                          backgroundImage:
                            "url(https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3B909145E05EC6E0E3F3004B2BCECC74C39D0AE42DB64C81C5088160F636DA6E/scale?width=400&aspectRatio=0.71&format=jpeg)",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Parallax;
