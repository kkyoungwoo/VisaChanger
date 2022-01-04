import React, {useState, useCallback,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from "emailjs-com";
import './email.css'

function Emailform() {

    const history = useHistory();

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
              alert("정상접수 되었습니다. 감사합니다.")
              history.push("/")
            },
            (error) => {
              console.log(error.text);
              alert("메일이 발송되지 않았습니다. 연락처 : 010-4242-3088")
            }
          );
      };

      const [formNum,setFormNum] = useState(0)
      const valueNum = useCallback((e)=>{
        setFormNum(formNum + 1)
      },[])
      const eventNum = useEffect(()=>{
        setFormNum(formNum + 1)
      },[valueNum])

    return (
        <div className='form_data'>
            <div className='form_title'>
                <div>
                    <div>
                        빠른 채용을 희망하신다면
                    </div>
                    <div>
                        정보를 모두 입력해야 합니다.
                    </div>
                </div>
                <div className='float_item'>
                </div>
            </div>
            <form className='form_warp' encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                <div className="input_text">
                    <div>1. 회사명</div>
                    <input type="text" name="company" />
                </div>
                <div className="input_text">
                    <div>2. 회사주소</div>
                    <input type="text" name="address" />
                </div>
                <div className="input_text">
                    <div>3. 담당자명</div>
                    <input type="text" name="manager" />
                </div>
                <div className="input_text">
                    <div>4. 담당자 연락처</div>
                    <input type="text" name="manager_number" />
                </div>
                <div className="input_text">
                    <div>5. 내국인 근로자 수</div>
                    <input type="text" name="korea_worker" placeholder='내국인 근로자 보호법에 의한 질문'/>
                </div>
                <div className="input_text">
                    <div>6. 외국인 근로자 수</div>
                    <input type="text" name="foreigner_worker" placeholder='F계열 외국인 제외'/>
                </div>
                <div className="input_text">
                    <div>7. 외국인 필요 인원수</div>
                    <input type="text" name="need_foreigner" />
                </div>
                <div className="input_text">
                    <div>8. 담당업무</div>
                    <input type="text" name="work_kinds" placeholder='EX) 해외 마케팅, 단순업무'/>
                </div>
                <div className="input_text">
                    <div>9. 한국어 능력</div>
                    <input type="text" name="topik" placeholder='EX) 간단한 소통가능'/>
                </div>
                <div className="input_text">
                    <div>10. 수당 및 복지</div>
                    <input type="text" name="welfare" placeholder='EX) 숙식제공 (점심,저녁)'/>
                </div>
                <div className="input_text">
                    <div>11. 급여 수준</div>
                    <input type="text" name="pay" placeholder='EX) 최저시급 보장 등'/>
                </div>
                <div className="send_file">
                    <div>
                        <div>
                            12. 사업자등록증 첨부
                        </div>
                        <div className='send_file_sub_text'>
                            (최대 500KB)
                        </div>
                        <input type="file" name="my_file" />
                    </div>
                </div>
                <div className="textarea_text">
                    <div>13. 기타내용</div>
                    <textarea name="textarea" id="" cols="100%" rows="10" style={{ fontFamily: "GmarketSansMedium", resize: "none"}}></textarea>
                </div>
                <button className="submit_btn" type="submit">상담 신청</button>
            </form>
        </div>
    )
}

export default Emailform
