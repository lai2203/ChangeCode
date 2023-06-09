$("document").ready(function () { });

var showGoToTop = 99;

$(window).scroll(function () {
  if ($(this).scrollTop() >= showGoToTop) {
    $("#go-to-top").fadeIn();
    document.querySelector(".header__logo").classList.add("header-active");
  } else {
    $("#go-to-top").fadeOut();
    document.querySelector(".header__logo").classList.remove("header-active");
  }
});

$("#go-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});
$(document).ready(function () {
  $("#lightSlider").lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 400, //ms'
    auto: false,
    loop: false,
    slideEndAnimation: true,
    pause: 2000,

    keyPress: false,
    controls: true,
    prevHtml: "",
    nextHtml: "",

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [],

    onBeforeStart: function (el) { },
    onSliderLoad: function (el) { },
    onBeforeSlide: function (el) { },
    onAfterSlide: function (el) { },
    onBeforeNextSlide: function (el) { },
    onBeforePrevSlide: function (el) { },
  });
});
const sanphamphobien = [
  {
    id: 1,
    token: "sanphamphobien-1",
    name: "Dịch Vụ cung cấp các giải pháp nông nghiệp cao",
    img: "./img/product/dichvu1.jpg",
    des: `Cung cấp các giải pháp công nghệ tiên tiến vào sản xuất(Thiết kế, triển khai, tự động hóa quy trình sản xuất)
    `,
  },
  {
    id: 2,
    token: "sanphamphobien-2",
    name: "Dịch vụ cung cấp hệ thống Camera",
    img: "./img/product/dichvu2.jpg",
    des: `Lắp đặt camera 24h, gọi là có. Lắp đặt tận tình, không vẽ vời, lên hình khách hài lòng mới nhận tiền`,
  },
  {
    id: 3,
    token: "sanphamphobien-3",
    name: "Dịch vụ sửa chữa máy tính chuyên nghiệp",
    img: "./img/product/dichvu3.jpg",
    des: `cung cấp dịch vụ(Bảo dưỡng, bảo trì, cày đặt và sửa chữa)`,
  },
  {
    id: 4,
    token: "sanphamphobien-4",
    name: "Dịch vụ sửa chữa máy tính chuyên nghiệp",
    img: "./img/product/dichvu4.jpg",
    des: `cung cấp dịch vụ(Bảo dưỡng, bảo trì, cày đặt và sửa chữa)`,
  },
];

var spphobien = document.querySelector("#spphobien");
var listProductNew = document.querySelector("#listProductNew");
var listProductSale = document.querySelector("#listProductSale");
var listProductYml = document.querySelector("#listProductYml");
var aoMoive = document.querySelector("#aomoive");
var aoBanchay = document.querySelector("#aobanchay");
var cothebanthichAo = document.querySelector("#cothebanthichAo");

var quanMoive = document.querySelector("#quanmoive");
var quanBanchay = document.querySelector("#quanbanchay");
var cothebanthichQuan = document.querySelector("#cothebanthichQuan");

var giayMoive = document.querySelector("#giaymoive");
var giayBanchay = document.querySelector("#giaybanchay");
var cothebanthichGiay = document.querySelector("#cothebanthichGiay");

{
  /*
   <div>
      <img class="card-img-top" src= ${item.img} alt="Card image cap" 
       onclick = "getDetailProduct(sanphammoi,${item.id})">
                </div> 



 <input type="text" value = "1"  class="text-input" id="text_so_luong-sanphamhot-${item.id}">




<button class="shopnow2" onclick = "getProduct(sanphammoi,${
  item.id
},'sanphammoi')">Mua ngay</button>

*/
}

function renderSanphammoi() {
  renderSanphamPhoBien();
  sanphammoi.map((item, index) => {
    listProductNew.innerHTML += `
        <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
        <div class="product__new-item">
            <div class="card" style="width: 100%">
                <div>
                    <img class="card-img-top" src= ${item.img
      } alt="Card image cap"  onclick = "getDetailProduct(sanphammoi,${item.id
      })">

                </div>
                <div class="card-body">
                    <h5 class="card-title custom__name-product">
                    ${item.name}
                    </h5>
                    <div class="product__price">
                        <p class="card-text price-color product__price-old">${item.price + 200000
      } đ</p>
                        <p class="card-text price-color product__price-new">${item.price
      } đ</p>
                    </div>
                    <div class="home-product-item__action">
                         
                    <div class="product__size d-flex" style="align-items: center;">
                    <div class="title" style="font-size: 16px; margin-right: 10px;">
                        Kích thước:
                    </div>
                    <div class="select-swap">
                        <div class="swatch-element" data-value="38" >
                            <input type="radio" class="variant-1" id="swatch-sanphamoi-${item.id
      }-1" name="mau"
                                value="S" >
                            <label for="swatch-sanphamoi-${item.id
      }-1" class="sd"><span>38</span></label>
                        </div>
                        <div class="swatch-element" data-value="39">
                            <input type="radio" class="variant-1" id="swatch-sanphamoi-${item.id
      }-2" name="mau"
                                value="M" >
                            <label for="swatch-sanphamoi-${item.id
      }-2" class="sd"><span>39</span></label>
                        </div>
                        <div class="swatch-element" data-value="40">
                            <input type="radio" class="variant-1" id="swatch-sanphamoi-${item.id
      }-3" name="mau"
                                value="L" >
                            <label for="swatch-sanphamoi-${item.id
      }-3" class="sd"><span>40</span></label>
                        </div>
                    </div>
                </div>
                        </div>
                      <div class="product__wrap">
                            <div class="product__amount w-100">
                                <div class="product__wap-change d-flex justify-content-center">
                                    <p for="" class = "soluong">Nhập số lượng: </p>
                                        <input type="text" value = "1"  class="text-input" id="text_so_luong-sanphammoi-${item.id
      }">
                                </div>
                            </div>
                        </div>
                        <div class="product__shopnow">
                            <button class="shopnow2" onclick = "getProduct(sanphammoi,${item.id
      },'sanphammoi')">Mua ngay</button>
                        </div>
                    </div>
                    <div class="sale-off">
                        <span class="sale-off-percent">20%</span>
                        <span class="sale-off-label">GIẢM</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
        `;
  });
  sanphamhot.map((item) => {
    listProductSale.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
        <div class="product__new-item">
            <div class="card" style="width: 100%">
                <div>
                    <img class="card-img-top" src= ${item.img
      } alt="Card image cap"  onclick = "getDetailProduct(sanphamhot,${item.id
      })">

                </div>
                <div class="card-body">
                    <h5 class="card-title custom__name-product">
                    ${item.name}
                    </h5>
                    <div class="product__price">
                        <p class="card-text price-color product__price-old">${item.price + 200000
      } đ</p>
                        <p class="card-text price-color product__price-new">${item.price
      } đ</p>
                    </div>
                    <div class="home-product-item__action">
                         
                    <div class="product__size d-flex" style="align-items: center;">
                    <div class="title" style="font-size: 16px; margin-right: 10px;">
                        Kích thước:
                    </div>
                    <div class="select-swap">
                        <div class="swatch-element" data-value="38" >
                            <input type="radio" class="variant-1" id="swatch-sanphamhot-${item.id
      }-1" name="mau"
                                value="S" >
                            <label for="swatch-sanphamhot-${item.id
      }-1" class="sd"><span>38</span></label>
                        </div>
                        <div class="swatch-element" data-value="39">
                            <input type="radio" class="variant-1" id="swatch-sanphamhot-${item.id
      }-2" name="mau"
                                value="M" >
                            <label for="swatch-sanphamhot-${item.id
      }-2" class="sd"><span>39</span></label>
                        </div>
                        <div class="swatch-element" data-value="40">
                            <input type="radio" class="variant-1" id="swatch-sanphamhot-${item.id
      }-3" name="mau"
                                value="L" >
                            <label for="swatch-sanphamhot-${item.id
      }-3" class="sd"><span>40</span></label>
                        </div>
                    </div>
                </div>
                        </div>
                      <div class="product__wrap">
                            <div class="product__amount w-100">
                                <div class="product__wap-change d-flex justify-content-center">
                                    <p for="" class = "soluong">Nhập số lượng: </p>
                                        <input type="text" value = "1"  class="text-input" id="text_so_luong-sanphamhot-${item.id
      }">
                                </div>
                            </div>
                        </div>
                        <div class="product__shopnow">
                            <button class="shopnow2" onclick = "getProduct(sanphamhot,${item.id
      },'sanphamhot')">Mua ngay</button>
                        </div>
                    </div>
                    <div class="sale-off">
                        <span class="sale-off-percent">20%</span>
                        <span class="sale-off-label">GIẢM</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `;
  });
  bansethich.map((item) => {
    listProductYml.innerHTML += `
    <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
        <div class="product__new-item">
            <div class="card" style="width: 100%">
                <div>
                    <img class="card-img-top" src= ${item.img
      } alt="Card image cap"  onclick = "getDetailProduct(bansethich,${item.id
      })">

                </div>
                <div class="card-body">
                    <h5 class="card-title custom__name-product">
                    ${item.name}
                    </h5>
                    <div class="product__price">
                        <p class="card-text price-color product__price-old">${item.price + 200000
      } đ</p>
                        <p class="card-text price-color product__price-new">${item.price
      } đ</p>
                    </div>
                    <div class="home-product-item__action">
                         
                    <div class="product__size d-flex" style="align-items: center;">
                    <div class="title" style="font-size: 16px; margin-right: 10px;">
                        Kích thước:
                    </div>
                    <div class="select-swap">
                        <div class="swatch-element" data-value="38" >
                            <input type="radio" class="variant-1" id="swatch-bansethich-${item.id
      }-1" name="mau"
                                value="S" >
                            <label for="swatch-bansethich-${item.id
      }-1" class="sd"><span>38</span></label>
                        </div>
                        <div class="swatch-element" data-value="39">
                            <input type="radio" class="variant-1" id="swatch-bansethich-${item.id
      }-2" name="mau"
                                value="M" >
                            <label for="swatch-bansethich-${item.id
      }-2" class="sd"><span>39</span></label>
                        </div>
                        <div class="swatch-element" data-value="40">
                            <input type="radio" class="variant-1" id="swatch-bansethich-${item.id
      }-3" name="mau"
                                value="L" >
                            <label for="swatch-bansethich-${item.id
      }-3" class="sd"><span>40</span></label>
                        </div>
                    </div>
                </div>
                        </div>
                      <div class="product__wrap">
                            <div class="product__amount w-100">
                                <div class="product__wap-change d-flex justify-content-center">
                                    <p for="" class = "soluong">Nhập số lượng: </p>
                                        <input type="text" value = "1"  class="text-input" id="text_so_luong-bansethich-${item.id
      }">
                                </div>
                            </div>
                        </div>
                        <div class="product__shopnow">
                            <button class="shopnow2" onclick = "getProduct(bansethich,${item.id
      },'bansethich')">Mua ngay</button>
                        </div>
                    </div>
                    <div class="sale-off">
                        <span class="sale-off-percent">20%</span>
                        <span class="sale-off-label">GIẢM</span>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `;
  });
}

function renderAo() {
  let i = 0;
  ao.map(function (item, i) {
    if (i < 8) {
      aoMoive.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
      <div class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
      <img class="card-img-top" src= ${item.img} alt="Card image cap" 
       onclick = "getDetailProduct(ao,${item.id})">
                </div> 

              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                     <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                      <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-ao-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-ao-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-ao-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                <input type="text" value = "1"  class="text-input" id="text_so_luong-ao-${item.id
        }">
                                </div>
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(ao,${item.id
        },'ao')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </a>
</div>
        `;
    }
    if (i >= 7 && i < 15) {
      aoBanchay.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
      <div class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
      <img class="card-img-top" src= ${item.img} alt="Card image cap" 
      onclick = "getDetailProduct(ao,${item.id})">
                </div> 
              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                     <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                      <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-ao-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-ao-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-ao-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                <input type="text" value = "1"  class="text-input" id="text_so_luong-ao-${item.id
        }">
                                </div>
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(ao,${item.id
        },'ao')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </a>
</div>
      `;
    }
    if (i >= 15) {
      cothebanthichAo.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
      <div class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
      <img class="card-img-top" src= ${item.img} alt="Card image cap" 
      onclick = "getDetailProduct(ao,${item.id})">
                </div> 

              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                     <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                      <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-ao-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-ao-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-ao-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-ao-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                <input type="text" value = "1"  class="text-input" id="text_so_luong-ao-${item.id
        }">
                                </div>
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(ao,${item.id
        },'ao')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </a>
</div>
      `;
    }
  });
}
function renderQuan() {
  let i = 0;
  quan.map(function (item, i) {
    if (i < 8) {
      quanMoive.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20" onclick = "getProduct(${item.id
        })">
      <div href="./ProductDetail.html" class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
          <img class="card-img-top" src= ${item.img} alt="Card image cap" 
           onclick = "getDetailProduct(quan,${item.id})">
                    </div> 
              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                  <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                  <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-quan-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-quan-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-quan-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                    <input type="text" value = "1"  class="text-input" id="text_so_luong-quan-${item.id
        }">
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(quan,${item.id
        },'quan')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </div>
</div>
        `;
    }
    if (i >= 8 && i < 16) {
      quanBanchay.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20" onclick = "getProduct(${item.id
        })">
      <div href="./ProductDetail.html" class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
          <img class="card-img-top" src= ${item.img} alt="Card image cap" 
           onclick = "getDetailProduct(quan,${item.id})">
                    </div> 
              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                      <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                      <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-quan-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-quan-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-quan-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                    <input type="text" value = "1"  class="text-input" id="text_so_luong-quan-${item.id
        }">
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(quan,${item.id
        },'quan')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </div>
</div>
      `;
    }
    if (i >= 15) {
      cothebanthichQuan.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20" onclick = "getProduct(${item.id
        })">
      <div href="./ProductDetail.html" class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
          <img class="card-img-top" src= ${item.img} alt="Card image cap" 
           onclick = "getDetailProduct(quan,${item.id})">
                    </div> 
              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                     <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                      <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-quan-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-quan-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-quan-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-quan-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                    <input type="text" value = "1"  class="text-input" id="text_so_luong-quan-${item.id
        }">
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(quan,${item.id
        },'quan')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </div>
</div>
      `;
    }
  });
}
function renderSanphamPhoBien() {
  sanphamphobien.map(function (item, i) {
    console.log(item);
    spphobien.innerHTML += `
    <div class="col-lg-6 col-sm-12 mb-20">
    <div class="card" style="width: 100%;">
    <div>
    <img class="card-img-top" src= "${item.img}" alt="Card image cap"  onclick = "getDetailProduct(sanphamphobien,${item.id})">
        <div class="card-body">
            <h4 class="card-title">${item.name}</h4> 
            <p class="card-text custom__name-product" style="font-weight: 400;">${item.des}</p>
            <div title="Video HannaPow"
                class="btn btn-buynow" onclick = "getDetailProduct(sanphamphobien,${item.id})" >Xem chi tiết  <i class="fas fa-arrow-right"
                    style="font-size: 16px;margin-left: 5px;"></i></div>
        </div>
    </div>
</div>
    `;
  });
}

function renderGiay() {
  giay.map(function (item, i) {
    if (i < 8) {
      giayMoive.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
      <div class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
          <img class="card-img-top" src= ${item.img} alt="Card image cap" 
           onclick = "getDetailProduct(giay,${item.id})">
                    </div> 
              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                     <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                      <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-giay-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-giay-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-giay-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                    <input type="text" value = "1"  class="text-input" id="text_so_luong-giay-${item.id
        }">
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(giay,${item.id
        },'giay')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </a>
</div>
        `;
    }
    if (i >= 7 && i < 15) {
      giayBanchay.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
      <div class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
          <img class="card-img-top" src= ${item.img} alt="Card image cap" 
           onclick = "getDetailProduct(giay,${item.id})">
                    </div> 
              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                     <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                      <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-giay-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-giay-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-giay-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                    <input type="text" value = "1"  class="text-input" id="text_so_luong-giay-${item.id
        }">
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(giay,${item.id
        },'giay')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </a>
</div>
      `;
    }
    if (i > 15) {
      console.log(i, item);
      cothebanthichGiay.innerHTML += `
      <div class="col-lg-3 col-md-6 col-sm-12 mb-20">
      <div class="product__new-item">
          <div class="card" style="width: 100%">
          <div>
          <img class="card-img-top" src= ${item.img} alt="Card image cap" 
           onclick = "getDetailProduct(giay,${item.id})">
                    </div> 
              <div class="card-body">
                  <h5 class="card-title custom__name-product">
                  ${item.name}
                  </h5>
                  <div class="product__price">
                     <p class="card-text price-color product__price-old">${item.price + 200000
        }đ</p>
                      <p class="card-text price-color product__price-new">${item.price
        } đ</p>
                  </div>
                  <div class="home-product-item__action">
                         
                  <div class="product__size d-flex" style="align-items: center;">
                      <div class="title" style="font-size: 16px; margin-right: 10px;">
                          Kích thước:
                      </div>
                      <div class="select-swap">
                          <div class="swatch-element" data-value="38">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-1" name="mau"
                                  value="S" >
                              <label for="swatch-giay-${item.img
        }-1" class="sd"><span>38</span></label>
                          </div>
                          <div class="swatch-element" data-value="39">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-2" name="mau"
                                  value="M" >
                              <label for="swatch-giay-${item.img
        }-2" class="sd"><span>39</span></label>
                          </div>
                          <div class="swatch-element" data-value="40">
                              <input type="radio" class="variant-1" id="swatch-giay-${item.img
        }-3" name="mau"
                                  value="L" >
                              <label for="swatch-giay-${item.img
        }-3" class="sd"><span>40</span></label>
                          </div>
                      </div>
                  </div>
                  <div class="product__wrap">
                      <div class="product__amount w-100">
                          <div class="product__wap-change d-flex justify-content-center">
                                <p for="" class = "soluong">Nhập số lượng: </p>
                                    <input type="text" value = "1"  class="text-input" id="text_so_luong-giay-${item.id
        }">
                                </div>
                            </div>
                      </div>
                  </div>
                  <div class="product__shopnow">
                  <button class="shopnow2" onclick = "getProduct(giay,${item.id
        },'giay')">Mua ngay</button>
                  </div>
              </div>
              <div class="sale-off">
                  <span class="sale-off-percent">20%</span>
                  <span class="sale-off-label">GIẢM</span>
              </div>
          </div>
      </div>
  </a>
</div>
      `;
    }
  });
  {
  }
}
const chitiet = document.querySelector("#chitiet");
function renderProductDetail() {
  let product = localStorage.getItem("productDetail");
  let value = JSON.parse(product);
  chitiet.innerHTML += `
  <div class="row product__detail-row d-flex justify-content-between">
     <div class="col-xl-6" id="main-img" style="cursor: pointer;">
                        <img src="${value.img
    }" class="big-img" alt="ảnh chính" id="img-main"
                            xoriginal="./assets/img/product/ult1.jpg">

                    </div>  
                    <div class="col-xl-6">
                    <div class="product__name">
                    <h2>${value.name}</h2>
                </div>
                <div class="status-product">
                            Trạng thái: <b>Còn hàng</b>
                        </div>
                        <div class="infor-oder">
                            Loại sản phẩm: <b>Video dép</b>
                        </div>
                        <div class="product__price">
                            <h2>${value.price}đ</h2>
                        </div>

                        <div class="price-old">
                            Giá gốc:
                            <del>${+value.price + 200000}đ</del>
                            <span class="discount">(-20%)</span>
                        </div>
                        <div class="product__size d-flex" style="align-items: center;">
                        <div class="title" style="font-size: 16px; margin-right: 10px;">
                            Kích thước:
                        </div>
                        <div class="select-swap">
                        <div class="swatch-element" data-value="38">
                            <input type="radio" class="variant-1" id="swatch-${value.img
    }-38" name="mau"
                                value="S">
                            <label for="swatch-${value.img
    }-38" class="sd"><span>38</span></label>
                        </div>
                        <div class="swatch-element" data-value="39">
                            <input type="radio" class="variant-1" id="swatch-${value.img
    }-39" name="mau"
                                value="M">
                            <label for="swatch-${value.img
    }-39" class="sd"><span>39</span></label>
                        </div>
                        <div class="swatch-element" data-value="40">
                            <input type="radio" class="variant-1" id="swatch-${value.img
    }-40" name="mau"
                                value="L">
                            <label for="swatch-${value.img
    }-40" class="sd"><span>40</span></label>
                        </div>
                    </div>
                    </div>
                    <div class="product__wrap">
                    <div class="product__amount w-100">
                        <div class="product__wap-change d-flex justify-content-center">
                            <p for="" class="soluong">Nhập số lượng: </p>
                            <input type="text" value="1" class="text-input"
                                id="text_so_luong-product-${value.token}">
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="shopnow" onclick = "getProductInDetail()">Mua ngay</button>
                </div>
                        
</div>
  </div>
  `;
}

function getProductInDetail() {
  let value;
  let product = localStorage.getItem("productDetail");
  let sanpham = JSON.parse(product);
  var radio = document.getElementsByName("mau");
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      value = radio[i].value;
    }
  }
  let number = document.querySelector(
    `#text_so_luong-product-${sanpham.token}`
  );
  let size = document.querySelector('input[name="mau"]:checked');
  if (size == undefined) {
    alert("Vui lòng chọn size");
  } else {
    let temp = true;
    allStorage().map(function (values) {
      if (JSON.parse(values).token === sanpham.token) {
        temp = false;
        console.log("temp", JSON.parse(values));
        currentValues = +JSON.parse(values).number;
      }
    });
    console.log("number", number.value, temp);
    if (temp) {
      if (number.value >= 100) {
        alert("Sản phẩm này đã đạt 100 sản phẩm trong giỏ!");
        localStorage.setItem(
          sanpham.token,
          JSON.stringify({
            name: sanpham.name,
            size: size.value,
            price: sanpham.price,
            img: sanpham.img,
            number: 100,
            token: sanpham.token,
          })
        );
      } else {
        console.log("san pham moi");
        localStorage.setItem(
          sanpham.token,
          JSON.stringify({
            name: sanpham.name,
            size: size.value,
            price: sanpham.price,
            img: sanpham.img,
            number: number.value,
            token: sanpham.token,
          })
        );
      }
      showSuccessToast();
    } else {
      localStorage.removeItem(sanpham.token);
      if (+number.value >= 100) {
        alert("Sản phẩm này đã đạt 100 sản phẩm trong giỏ!");
        localStorage.setItem(
          sanpham.token,
          JSON.stringify({
            name: sanpham.name,
            size: size.value,
            price: sanpham.price,
            img: sanpham.img,
            number: 100,
            token: sanpham.token,
          })
        );
      } else {
        localStorage.setItem(
          sanpham.token,
          JSON.stringify({
            name: sanpham.name,
            size: size.value,
            price: sanpham.price,
            img: sanpham.img,
            number: +number.value,
            token: sanpham.token,
          })
        );
        showSuccessToast();
      }
    }

    temp = true;
  }
  value = 0;
}

function statusSearch() {
  document.querySelector(".search-box").classList.toggle("open");
}

// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  console.log("co chay vao day");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                  <div class="toast__icon">
                      <i class="${icon}"></i>
                  </div>
                  <div class="toast__body">
                      <h3 class="toast__title">${title}</h3>
                      <p class="toast__msg">${message}</p>
                  </div>
                  <div class="toast__close">
                      <i class="fas fa-times"></i>
                  </div>
              `;
    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Thành công!",
    message: "Sản phẩm đã được thêm vào giỏ!",
    type: "success",
    duration: 3000,
  });
}
function showSubmitToast() {
  console.log("co chay vao day");
  toast({
    title: "Thành công!",
    message: "Đơn hàng đã đặt thành công!",
    type: "success",
    duration: 3000,
  });
}
function showErrorLoginMinToast() {
  toast({
    title: "Thất bại!",
    message: "Tài khoản và mật khẩu tối thiểu 6 kí tự!",
    type: "error",
    duration: 5000,
  });
}
function showErrorMaxProductToast() {
  toast({
    title: "Thất bại!",
    message: "Số lượng sản phẩm vượt quá 100!",
    type: "error",
    duration: 5000,
  });
}
function showErrorLoginMaxToast() {
  toast({
    title: "Thất bại!",
    message: "Tài khoản và mật khẩu tối đa 22 kí tự!",
    type: "error",
    duration: 5000,
  });
}

const productDetail = [];
const text_so_luong = document.querySelector("#text_so_luong");
function getProduct(item, id, name) {
  let value;
  var radio = document.getElementsByName("mau");
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      value = radio[i].value;
    }
  }
  let number = document.querySelector(
    `#text_so_luong-${name}-${item[id - 1].id}`
  );
  console.log("number", number);
  let size = document.querySelector('input[name="mau"]:checked');
  if (size == undefined) {
    alert("Vui lòng chọn size");
  } else {
    let temp = true;
    let currentValue = 0;
    allStorage().map(function (value) {
      console.log(JSON.parse(value).token, item[id - 1].token);
      if (JSON.parse(value).token === item[id - 1].token) {
        temp = false;
        currentValue = +JSON.parse(value).number;
      }
    });
    if (temp) {
      if (number.value >= 100) {
        showErrorMaxProductToast();
        localStorage.setItem(
          item[id - 1].token,
          JSON.stringify({
            name: item[id - 1].name,
            size: size.value,
            price: item[id - 1].price,
            img: item[id - 1].img,
            number: number.value,
            token: item[id - 1].token,
          })
        );
      } else {
        localStorage.setItem(
          item[id - 1].token,
          JSON.stringify({
            name: item[id - 1].name,
            arr: name,
            size: size.value,
            price: item[id - 1].price,
            img: item[id - 1].img,
            number: number.value,
            token: item[id - 1].token,
          })
        );
      }

      showSuccessToast();
    } else {
      localStorage.removeItem(item[id - 1].token);
      if (+number.value + currentValue >= 100) {
        showErrorMaxProductToast();
        localStorage.setItem(
          item[id - 1].token,
          JSON.stringify({
            name: item[id - 1].name,
            size: size.value,
            price: item[id - 1].price,
            img: item[id - 1].img,
            number: 100,
            token: item[id - 1].token,
          })
        );
      } else {
        localStorage.setItem(
          item[id - 1].token,
          JSON.stringify({
            name: item[id - 1].name,
            size: size.value,
            price: item[id - 1].price,
            img: item[id - 1].img,
            number: +number.value + currentValue,
            token: item[id - 1].token,
          })
        );
        showSuccessToast();
      }
    }

    temp = true;
  }
  value = 0;
}

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }
  return values;
}
const hinhanhdonhang = document.querySelector("#hinhanhdonhang");
const thongtindonhang = document.querySelector("#thongtindonhang");
const sum_value = document.querySelector("#sum-value");
let sum = 0;
let index = 0;
let arr = [];
allStorage().map(function (item) {
  let value = JSON.parse(item);
  arr.push(value);
  let temp = value.token;
  if (value.id !== "productDetail") {
    sum += value.price * value.number;
    hinhanhdonhang.innerHTML += `
        <div class="col-xl-12 d-flex cart-item">
        <div class="col-3">
            <img src="${value.img}" alt="" width="100%">
        </div>
        <div class="col-8 d-flex m-auto">
            <div class="col-4 align-self-start">
                <h5 class="card-title custom__name-product">
                  ${value.name}
                </h5>
      
                <div class="product__price  align-self-start">
                    <p class="card-text price-color product__price-new"> ${value.price} đ</p>
                </div>
            </div>
            <div class="product__wrap col-8 align-self-start">
                <div class="product__amount w-100 ">
                    <div class="product__wap-change justify-content-around  d-flex left__cart">
                      <div className="block__soluong w-100">
                        <p className="soluong">Số lượng</p>
                        <p>${value.number}</p>
                      </div>
                      <div className="block__soluong  w-100">
                        <p className="soluong">Size</p>
                        <p>${value.size}</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-1 d-flex" >
            <i class="fas fa-times" onclick = "removeItem('${value.token}')"></i>
        </div>
      </div>
        `;
    thongtindonhang.innerHTML += `
        <li class="cart-right-item col-xl-12"><span class="cart-right-item-header col-xl-4">${value.name}</span>
        <div class="col-xl-3">
            <div class="gr-icon-change"><span class="current-value">${value.number}</span></div>
        </div>
        <span class="col-xl-2">${value.size}</span><span class="col-xl-3 sumPrice">${value.price} VND
        </span>
        
        </li>
        
        `;
    index++;
  }
});
function removeItem(key) {
  localStorage.removeItem(key);
  window.location.href = "giohang.html";
}
function submitcart() {
  showSubmitToast();
  localStorage.clear();
  setTimeout(function () {
    window.location.href = "giohang.html";
  }, 1000);
}
sum_value.innerHTML = `${sum} VND `;
let product = {};
function getDetailProduct(arr, id) {
  localStorage.setItem(
    "productDetail",
    JSON.stringify({
      id: "productDetail",
      name: arr[id - 1].name,
      price: arr[id - 1].price,
      img: arr[id - 1].img,
      token: arr[id - 1].token,
    })
  );
  window.location.href = "chitietsanpham.html";
}

function userLogin() {
  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#password").value;
  if (email.length < 6 || pass.length < 66) {
    showErrorLoginMinToast();
  }
  if (email.length > 22 || pass.length > 22) {
    console.log(email.length, pass.length)
    showErrorLoginMaxToast();
  }
  if (
    email.length >= 6 &&
    pass.length >= 6 &&
    email.length <= 22 &&
    pass.length <= 22
  ) {
    window.location.href = "ProjectManagement.html";
  }
}
function addProject() {
  const projectname = document.querySelector("#projectname").value;
  const description = document.querySelector("#description").value;
  if (projectname.length < 22 || description.length < 66) {
    showErrorLoginMinToast();
  }
  if (projectname.length > 22 || description.length > 22) {
    console.log(projectname.length, description.length)
    showErrorLoginMaxToast();
  }
  if (
    projectname.length >= 22 &&
    description.length >= 22 &&
    projectname.length <= 22 &&
    description.length <= 22
  ) {
    window.location.href = "ProjectManagement.html";
  }
}