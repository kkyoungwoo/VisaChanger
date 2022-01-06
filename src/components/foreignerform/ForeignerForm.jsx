import React, {useState, useCallback, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from "emailjs-com";
import './foreignerform.css'

function ForeignerForm() {

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_thek_form",
            "template_c9vwum1",
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
              alert("메일이 발송되지 않았습니다 파일용량을 확인해주세요. 연락처 : 010-4242-3088")
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

      const [employment,setEmployment] = useState("")
      const [language,setLanguage] = useState("")

    const [field,setField] = useState({})
      
    const [firstCheck,setFirstCheck] = useState("")
    const [secoundCheck,setSecoundCheck] = useState("")
    const [thardCheck,setThardCheck] = useState("")
    const [FoursCheck,setFoursCheck] = useState("")

    const [firstCheckBtn,setFirstCheckBtn] = useState(true)
    const [secoundCheckBtn,setSecoundCheckBtn] = useState(true)
    const [thardCheckBtn,setThardCheckBtn] = useState(true)
    const [FoursCheckBtn,setFoursCheckBtn] = useState(true)

        const firstFunk = useCallback(() =>{
            setFirstCheckBtn(!firstCheckBtn)
            firstCheckBtn ? setFirstCheck("주간") : setFirstCheck("")
        },[firstCheckBtn])

        const secoundFunk = useCallback(() =>{
            setSecoundCheckBtn(!secoundCheckBtn)
            secoundCheckBtn ? setSecoundCheck("야간") : setSecoundCheck("")
        },[secoundCheckBtn])

        const thardFunk = useCallback(() =>{
            setThardCheckBtn(!thardCheckBtn)
            thardCheckBtn ? setThardCheck("2교대") : setThardCheck("")
        },[thardCheckBtn])

        const FoursFunk = useCallback(() =>{
            setFoursCheckBtn(!FoursCheckBtn)
            FoursCheckBtn ? setFoursCheck("상관없음") : setFoursCheck("")
        },[FoursCheckBtn])

        useEffect(()=>{
        setField(firstCheck+" , "+secoundCheck+" , "+thardCheck+" , "+FoursCheck)
    })
      return (
          <div className='foreignerform'>
            <div className='form_data'>
                <div className='form_title'>
                    <div>
                        <div>
                            빠른 구직을 희망하신다면
                        </div>
                        <div>
                            정보를 모두 입력해야 합니다.
                        </div>
                    </div>
                    <div className='float_item'>
                    </div>
                </div>
                <form className='form_warp' encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                        <input className="displaynone" type="text" name="employment" value={employment} />
                        <input className="displaynone" type="text" name="language" value={language} />
                        <input className="displaynone" type="text" name="field" value={field} />
                    <div class="visa_label" style={{marginBottom: "30px"}} >
                        <label><input type="radio" name="employment" value="illegality" style={{marginRight:"20px"}} onChange={()=>setEmployment("비자없음")}/>비자없음</label>
                        <label><input type="radio" name="employment" value="legal" style={{marginRight:"20px"}} onChange={()=>setEmployment("비자있음")}/>비자있음</label>
                    </div>
                    <div className="input_text">
                        <div>1. 현재비자</div>
                        <input type="text" name="visa" />
                    </div>
                    <div className="input_text">
                        <div>2. 국적</div>
                        <input type="text" name="global" />
                    </div>
                    <div className="input_text">
                        <div>3. 이름</div>
                        <input type="text" name="name" />
                    </div>
                    <div className="input_text">
                        <div>4. 주소</div>
                        <input type="text" name="address" />
                    </div>
                    <div className="input_text">
                        <div>5. 전화번호</div>
                        <input type="text" name="number" />
                    </div>
                    <div className="input_text">
                        <div>6. 원하는 지역</div>
                        <input type="text" name="worker_wont" placeholder='EX) 대구,서울'/>
                    </div>
                    <div className="input_text field">
                        <div>7. 근무시간 선택</div>
                        <div className="Field_label">
                            <div className='field_warp'>
                                <input type="checkbox" id="firstFunk"onChange={firstFunk} />
                                <label for="firstFunk" className="fieldlabel">주간</label>
                                <input type="checkbox" id="secoundFunk" onChange={secoundFunk}/>
                                <label for="secoundFunk" className="fieldlabel">야간</label><br />
                            </div>
                            <div className='field_warp'>
                                <input type="checkbox" id="thardFunk" onChange={thardFunk}/>
                                <label className="fieldlabel" for="thardFunk">2교대</label>
                                <input type="checkbox" id="FoursFunk" onChange={FoursFunk}/>
                                <label className="fieldlabel" for="FoursFunk">상관없음</label>
                            </div>
                        </div>
                    </div>
                    <div className="input_text">
                        <div>8. 할 수 있는 일</div>
                        <input type="text" name="work_need" placeholder='EX) 해외 마케팅, 단순업무'/>
                    </div>
                    <div className="input_text">
                        <div>9. 한국어 능력</div>
                        <div class="language_label" >
                            <div>
                                <label><input type="radio" name="korean" value="high" style={{maxWidth: "30px",marginRight:"20px"}} onChange={()=>setLanguage("상")}/>상</label>
                                <label><input type="radio" name="korean" value="middle" style={{maxWidth: "30px",marginRight:"20px"}} onChange={()=>setLanguage("하")}/>하</label>
                            </div>
                            <div>
                                <label><input type="radio" name="korean" value="low" style={{maxWidth: "30px",marginRight:"20px"}} onChange={()=>setLanguage("중")}/>중</label>
                                <label><input type="radio" name="korean" value="cant" style={{maxWidth: "30px",marginRight:"20px"}} onChange={()=>setLanguage("한국어 불가능")}/>I can't speak Korean.</label>
                            </div>
                        </div>
                    </div>
                    <div className="input_text">
                        <div>10. 근무시작 날짜</div>
                        <input type="text" name="work_start" placeholder='EX) 2022.07.07'/>
                    </div>
                    <div className="input_text">
                        <div>11. 경험</div>
                        <input type="text" name="certificate" placeholder=''/>
                    </div>
                    <div className="send_file">
                        <div>
                            <div>
                                12. 자기소개서 첨부
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
                    <div className="input_text"style={{
                            marginTop:"20px"
                        }}>
                        <div>유입경로</div>
                        <input type="text" name="introduction" placeholder='EX) 페이스북, 소개 등'/>
                    </div>
                    <div className="input_text">
                        <div>일자리 넘버</div>
                        <input type="text" name="worker_number" placeholder='EX) C-23'/>
                    </div>
                    <button className="submit_btn" type="submit">신청서 접수</button>
                </form>
            </div>
        </div>
    )
}

export default ForeignerForm
