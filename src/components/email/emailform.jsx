import React from 'react'
import emailjs from "emailjs-com";

function emailform() {

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_thek_form",
            "template_p8sz9ss",
            e.target,
            "user_YOvzVUT3C3OBySLzLPves"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("메일이 정상적으로 발송되었습니다.")
            },
            (error) => {
              console.log(error.text);
              alert("메일이 발송되지 않았습니다. 연락처 : 010-4242-3088")
            }
          );
      };

    return (
        <div>
            <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                <div className="input_text">
                    <div>회사명</div>
                    <input type="text" name="company" />
                </div>
                <div className="input_text">
                    <div>회사주소</div>
                    <input type="text" name="address" />
                </div>
                <div className="input_text">
                    <div>담당자명</div>
                    <input type="text" name="manager" />
                </div>
                <div className="input_text">
                    <div>담당자 연락처</div>
                    <input type="text" name="manager_number" />
                </div>
                <div className="input_text">
                    <div>내국인 근로자 수</div>
                    <input type="text" name="korea_worker" />
                </div>
                <div className="input_text">
                    <div>외국인 근로자 수</div>
                    <input type="text" name="foreigner_worker" />
                </div>
                <div className="input_text">
                    <div>외국인 필요 인원수</div>
                    <input type="text" name="need_foreigner" />
                </div>
                <div className="input_text">
                    <div>담당업무</div>
                    <input type="text" name="work_kinds" />
                </div>
                <div className="input_text">
                    <div>한국어 능력</div>
                    <input type="text" name="topik" />
                </div>
                <div className="input_text">
                    <div>수당 및 복지(숙식제공 등)</div>
                    <input type="text" name="welfare" />
                </div>
                <div className="input_text">
                    <div>급여 수준(잔업 미포함)</div>
                    <input type="text" name="pay" />
                </div>
                <div className="send_file">
                    <div>
                        사업자등록증 첨부(최대 500KB)<input type="file" name="my_file" />
                        이미지 용량이 클 경우 알집을 이용하시거나 ILOVE IMG 사이트를 이용해주세요
                    </div>
                    <input type="text" name="phone" />
                </div>
                <div className="textarea_text">
                    <div>기타 문의사항</div>
                    <textarea name="textarea" id="" cols="30" rows="10" style={{resize: "none"}}></textarea>
                </div>
                <button type="submit">이메일 발송</button>
            </form>
        </div>
    )
}

export default emailform
