"use client";
import React, { useState } from "react";
import combo1 from "../../../assets/images/6 BO QUA PK.png";
import Image from "next/image";
import style from "@/style/SixCombo.module.css";
import "../../../style/SixCombo.scss";
export default function SixCombo() {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div style={{ backgroundColor: "#1f1f1d" }}>
      <Image src={combo1} alt="combo1" className={style.comboImage} />
      <div className={`${style.BoxCombo} ${expanded ? style.expanded : ""}`}>
        <h2 className="BoxCombo-title">Thể Lệ Chương Trình</h2>
        <div className="BoxCombo-content" id="test">
          <h2 className="BoxCombo-title">
            ĐĂNG KÝ THÔNG TIN IPHONE 16 SERIES - NHẬN QUÀ KHỦNG - ĐĂNG KÝ NGAY
          </h2>
          <h2>ĐĂNG KÝ THÔNG TIN IPHONE 16 SERIES</h2>
          <h3>Thời gian chương trình</h3>
          <p>
            Từ <strong>0h01’ 20/09/2024</strong> ; Nhận hàng từ{" "}
            <strong>0h01’ ngày 27/09/2024</strong>
          </p>
          <h3>Quy trình đăng ký nhận thông tin</h3>
          <ul>
            <li>
              <strong>Bước 1</strong>: Từ 0h01’ ngày 20/09/2024 quý khách có thể
              truy cập trang đăng ký của Bạch Long Mobile{" "}
              <a href="https://bachlongmobile.com/iphone-16-series/">tại đây</a>
            </li>
            <li>
              <strong>Bước 2</strong>: Chọn chiếc iPhone 16 series phù hợp mà
              quý khách muốn nhận thông tin (dòng máy, dung lượng, màu sắc)
            </li>
            <li>
              <strong>Bước 3</strong>: Để lại thông tin vào mẫu đăng ký ={">"}{" "}
              Sau đó bấm nút đăng ký
            </li>
            <li>
              <strong>Bước 4</strong>: Sau khi đăng ký thành công, Bạch Long
              Mobile sẽ gửi đến khách hàng một thông báo và một{" "}
              <strong>tin nhắn zalo</strong> để <strong>xác nhận</strong> thông
              tin của quý khách và <strong>mã code</strong> đăng ký.
            </li>
            <li>
              <strong>Bước 5</strong>: Trong thời gian sớm nhất bộ phận Chăm sóc
              khách hàng để liên hệ lại với quý khách qua số điện thoại để{" "}
              <strong>xác nhận</strong>
            </li>
            <li>
              <strong>Bước 6</strong>: Nhận thông tin trả hàng: quy trình trả
              hàng sẽ chia làm 3 giai đoạn:
              <ul>
                <li>
                  + Giai đoạn 1: từ ngày 27/09 - 30/09 (Ưu tiên khách hàng đăng
                  ký nhận thông tin sớm)
                </li>
                <li>+ Giai đoạn 2: từ ngày 1/10 - 15/10</li>
                <li>+ Giai đoạn 3: từ ngày 16/10 - 30/11</li>
              </ul>
            </li>
            <strong>Lưu ý:</strong>
            <li>
              Quý khách nên sử dụng số điện thoại có đăng ký Zalo để thuận tiện
              nhận thông tin từ Bạch Long.
            </li>
          </ul>
          <h2>
            <strong>NHẬN QUÀ KHỦNG</strong>
          </h2>
          <h3>Mua iPhone trúng iPhone</h3>
          <p>Bạch Long chơi lớn với vòng quay may mắn vật lý:</p>
          <p>Khi khách hàng mua iPhone 16 Series:</p>
          <strong>
            {" "}
            ={">"} Tặng ngay 1 mũ bảo hiểm và 1 Phiếu hẹn tham gia vòng quay vật
            lý trúng thưởng iPhone 16 CHÍNH HÃNG trị giá hơn 21 TRIỆU ĐỒNG.
          </strong>
          <strong>Lưu ý</strong>
          <p>
            {" "}
            - Tất cả các khách hàng tham gia vòng quay may mắn đều trúng quà
            100%
          </p>
          <p>
            {" "}
            - Thời gian diễn ra Vòng quay vật lý:{" "}
            <span style={{ color: "red" }}>09h30</span>, ngày{" "}
            <span style={{ color: "red" }}> 02/11/2024</span> tại Bạch Long
            Mobile,{" "}
            <span style={{ color: "red" }}>
              251 - 253 Trần Hưng Đạo Q.1 TP.HCM
            </span>
          </p>
          <h3>Ưu đãi đặc quyền 5 sao:</h3>
          <ul>
            <li>
              Tặng 16 hộp quà độc quyền “Cóc sạc, Pin dự phòng, Cường lực cao
              cấp” trị giá 2.000.000 dành cho 16 khách hàng đầu tiên đến sớm
              trong ngày mở bán.
            </li>
            <li>
              Tặng 80 hộp quà độc quyền “Cóc sạc, Ốp lưng, Cường lực cao cấp”
              trị giá 1.600.000đ cho 80 khách hàng tham gia mở bán sớm nhất.
            </li>
            <li>
              Độc quyền: giảm ngay 1.000.000đ khi tham gia Bảo hành toàn
              diện.Nâng cấp 12 tháng thành 16 tháng.
            </li>
            <li>
              Trả góp 0% qua thẻ tín dụng (mPOS):
              <p>- 20 suất đầu tiên : giảm ngay 1.000.000đ.</p>
              <p>- 18 suất tiếp theo : giảm 500.000đ</p>
            </li>
            <li>Combo phụ kiện iPhone 16 Series giảm đến 60%</li>
          </ul>
          <h3>Ưu đãi thanh toán tại Bạch Long</h3>
          <ul>
            <li>
              Trả góp 0% và ưu đãi thêm khi thanh toán trả góp qua các kênh:
              Kredivo, Home Pay Later, Shinhan, mCredit,...
            </li>
            <li>Cà thẻ Visa, Mastercard miễn phí</li>
            <li>Thu cũ lên đời iPhone 16 series lên tới 100% giá trị máy</li>
          </ul>
          <p>
            Mọi thắc mắc quý khách vui lòng liên hệ qua hotline:
            <strong> 1900.63.64.69</strong> hoặc{" "}
            <a href="https://bachlongmobile.com/contact/">
              <strong>website:</strong>
            </a>{" "}
            để được hỗ trợ kịp thời{" "}
          </p>
        </div>
      </div>

      <button
        className={style.expandButton}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
  );
}
