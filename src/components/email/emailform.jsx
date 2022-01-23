import React, {useState, useCallback,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from "emailjs-com";
import './email.css'
import Header from '../homepage/header/Header'

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
              alert("입력하신 내용으로 정상접수 되었습니다. 곧 연락드리겠습니다.")
              history.push("/")
            },
            (error) => {
              console.log(error.text);
              alert("메일이 발송되지 않았습니다. 연락처 : 010-4242-3088")
            }
          );
      };
      const [simpleNumText,setSimpleNumText] = useState("간단한")
      const [displayContral,setDisplayContral] = useState("")
      const [simpleNumSeven,setSimpleNumSeven] = useState("7")
      const [simpleNumEight,setSimpleNumEight] = useState("8")
      const [simpleNumEleven,setSimpleNumEleven] = useState("11")
      const [simpleNumBg,setSimpleNumBg] = useState("#3E60DE")
      const [simpleBg,setSimpleBg] = useState("#3E60DE")
      const [simpleColor,setSimpleColor] = useState("white")

      const [loadingText,setLoadingText] = useState("신청서 접수")
      
      const loading = useCallback(()=>{
          setLoadingText("loading ...")
      },[])

      const [formNum,setFormNum] = useState(0)
      const valueNum = useCallback((e)=>{
        setFormNum(formNum + 1)
      },[])
      const eventNum = useEffect(()=>{
        setFormNum(formNum + 1)
      },[valueNum])

      const displayBtn = useCallback(()=>{
        displayContral === "displayout" ? setDisplayContral("") : setDisplayContral("displayout")
        displayContral === "displayout" ? setSimpleNumSeven("7") : setSimpleNumSeven("5")
        displayContral === "displayout" ? setSimpleNumEight("8") : setSimpleNumEight("6")
        displayContral === "displayout" ? setSimpleNumEleven("11") : setSimpleNumEleven("7")
        displayContral === "displayout" ? setSimpleNumText("간단한") : setSimpleNumText("정확한")
        displayContral === "displayout" ? setSimpleNumBg("#d2d2d2") : setSimpleNumBg("#fff")
        displayContral === "displayout" ? setSimpleBg("#3E60DE") : setSimpleBg("gray")
        displayContral === "displayout" ? setSimpleColor("white") : setSimpleColor("black")
      },[displayContral])

    return (
        <div className='form_data'>
            <Header />
            <div className='form_title'  style={{
                    background: simpleBg
                }}>
                <div style={{
                    color: simpleColor
                }}>
                    <div>
                        빠른 구인을 희망하신다면
                    </div>
                    <div>
                        정보를 모두 입력해야 합니다.
                    </div>
                </div>
                <div className='form_curcle' onClick={displayBtn} style={{
                    background: simpleNumBg
                }}>
                    <div>
                        {simpleNumText} 상담
                    </div>
                    <div>
                        바로가기
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
                    <input type="text" name="address" placeholder='최소 읍,면,동 까지' />
                </div>
                <div className="input_text">
                    <div>3. 담당자명</div>
                    <input type="text" name="manager" />
                </div>
                <div className="input_text">
                    <div>4. 담당자 연락처</div>
                    <input type="text" name="manager_number" />
                </div>
                <div className={'input_text ' + displayContral}>
                    <div>5. 내국인 근로자 수</div>
                    <input type="text" name="korea_worker" placeholder='내국인 근로자 보호법에 의한 질문'/>
                </div>
                <div className={'input_text ' + displayContral}>
                    <div>6. 외국인 근로자 수</div>
                    <input type="text" name="foreigner_worker" placeholder='F계열 외국인 제외'/>
                </div>
                <div className="input_text">
                    <div>{simpleNumSeven}. 외국인 필요 인원수</div>
                    <input type="text" name="need_foreigner" placeholder='EX) 3 명'/>
                </div>
                <div className="input_text">
                    <div>{simpleNumEight}. 담당업무</div>
                    <input type="text" name="work_kinds" placeholder='EX) 해외 마케팅, 단순업무'/>
                </div>
                <div className={'input_text ' + displayContral}>
                    <div>9. 한국어 능력</div>
                    <input type="text" name="topik" placeholder='EX) 간단한 소통가능'/>
                </div>
                <div className={'input_text ' + displayContral}>
                    <div>10. 수당 및 복지</div>
                    <input type="text" name="welfare" placeholder='EX) 숙식가능 아침,저녁 별도'/>
                </div>
                <div className="input_text">
                    <div>{simpleNumEleven}. 평균 급여 / 급여일</div>
                    <input type="text" name="pay" placeholder='EX) 200~360 만원 / 20일'/>
                </div>
                <div className={'input_text ' + displayContral}>
                    <div>12. 근무시간 / 근무요일</div>
                    <input type="text" name="workingday" placeholder='EX) 8:00 ~ 18:00 / 월~토'/>
                </div>
                <div className={'input_text ' + displayContral}>
                    <div>13. 잔업, 특근 여부</div>
                    <input type="text" name="overtime" placeholder='EX) 풀잔업 3시간, 일요일 출근가능'/>
                </div>
                <div className={'send_file ' + displayContral}>
                    <div>
                        <div>
                            14. 사업자등록증 첨부
                        </div>
                        <div className='send_file_sub_text'>
                            (최대 500KB)
                        </div>
                        <input type="file" name="my_file" accept=".jpg, .png, .jpeg" />
                    </div>
                </div>
                <div className={'textarea_text ' + displayContral}>
                    <div>15. 기타내용</div>
                    <textarea name="textarea" id="" cols="100%" rows="10" style={{ fontFamily: "GmarketSansMedium", resize: "none"}}></textarea>
                </div>
                <div className={'input_text ' + displayContral} style={{
                        marginTop:"20px"
                    }}>
                    <div>유입경로</div>
                    <input type="text" name="introduction" placeholder='EX) 00업체 소개, 네이버 카페 등'/>
                </div>
                <button className="submit_btn" type="submit" onClick={loading}>{loadingText}</button>
            </form>
        </div>
    )
}

export default Emailform
