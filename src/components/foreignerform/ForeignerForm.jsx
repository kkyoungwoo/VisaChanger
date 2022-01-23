import React, {useState, useCallback, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from "emailjs-com";
import './foreignerform.css'
import Header from '../homepage/header/Header'

function ForeignerForm() {

    const history = useHistory();

    const [loadingText,setLoadingText] = useState("신청서 접수")
    const [loadingTextEnglish,setLoadingTextEnglish] = useState("Register")
      const loading = useCallback(()=>{
          setLoadingText("loading ...")
          setLoadingTextEnglish("loading ...")
      },[])

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
              language_type ? alert("정상접수 되었습니다. 감사합니다.") : alert("It's accepted normally. Thank you.")
              history.push("/")
            },
            (error) => {
              console.log(error.text);
              language_type ? alert("메일이 발송되지 않았습니다 파일용량을 확인해주세요. 연락처 : 010-4242-3088") : alert("The e-mail hasn't been sent. Please check the file capacity. Contact: 010-4242-3088")
            }
          );
      };

      const [language_type,setLanguage_type] = useState(false)

      const language_btn = useCallback(()=>{
          setLanguage_type(!language_type)
      },[language_type])

      const [formNum,setFormNum] = useState(0)
      const valueNum = useCallback((e)=>{
        setFormNum(formNum + 1)
      },[language_type])

      const eventNum = useEffect(()=>{
        setFormNum(formNum + 1)
      },[valueNum])

      const [employment,setEmployment] = useState("")
      const [language,setLanguage] = useState("")
      const [sex,setSex] = useState("")

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
              <Header />
            <div className='form_data'>
                <div className='form_title' style={{height: "130px"}}>
                    <div>
                        <div>
                            {language_type ? "빠른 구직을 희망하신다면" : "If you want to find a job quickly, you must"}
                        </div>
                        <div>
                            {language_type ? "정보를 모두 입력해야 합니다." : "enter all the information."}
                        </div>
                    </div>
                    <div className='float_item'>
                    </div>
                </div>
                <div className='language_type' onClick={language_btn}>
                    <div>
                        Language Change button
                    </div>
                    <div className='language_type_inner'>
                        <div className='language_type_item'>
                            {language_type ? <img style={{
                                width: "100px",
                                transition: "1s ease-in-out"
                            }}src="./assets/korea.png" alt="korea" />
                            : <img style={{
                                width: "50px",
                                transition: ".5s ease-in-out"
                            }}src="./assets/korea.png" alt="korea" />}
                        </div>
                        <div>
                            {language_type ? <img style={{
                                width: "50px",
                                transition: ".5s ease-in-out"
                            }}src="./assets/america.png" alt="america" />
                            : <img style={{
                                width: "100px",
                                transition: "1s ease-in-out"
                            }}src="./assets/america.png" alt="america" />}
                        </div>
                    </div>
                </div>
                <form className='form_warp' encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                        <input className="displaynone" type="text" name="employment" value={employment} />
                        <input className="displaynone" type="text" name="language" value={language} />
                        <input className="displaynone" type="text" name="field" value={field} />
                        <input className="displaynone" type="text" name="sex" value={sex} />
                    <div class="visa_label" style={{marginBottom: "30px"}} >
                        <label><input type="radio" name="employment" value="illegality" style={{marginRight:"15px"}} onChange={()=>setEmployment("비자없음")}/>
                            {language_type ? "비자없음" : "No visa"}
                        </label>
                        <label><input type="radio" name="employment" value="legal" style={{marginRight:"15px"}} onChange={()=>setEmployment("비자있음")}/>
                            {language_type ? "비자있음" : "I have a visa"}
                        </label>
                    </div>
                    <div className="input_text">
                        <div>1. {language_type ? "현재 비자" : "Current visa"}</div>
                        <input type="text" name="visa" />
                    </div>
                    <div className="input_text">
                        <div>2. {language_type ? "일자리 넘버" : "Job number"}</div>
                        <input type="text" name="job_number" placeholder='EX) W1JA2'/>
                    </div>
                    <div className="input_text">
                        <div>3. {language_type ? "국적" : "Nationality"}</div>
                        <input type="text" name="global" />
                    </div>
                    <div className="input_text">
                        <div>4. {language_type ? "이름" : "Name"}</div>
                        <input type="text" name="name" />
                    </div>
                    <div className="input_text sex_warp">
                        <div>5. {language_type ? "성별" : "Gender"}</div>
                        <div className='sexitem'>
                            <label className='sex_box first' for="sexmale">
                                <input type="radio" name="sex" id='sexmale' value="Male" style={{marginRight:"20px"}} onChange={()=>setSex("남성")}/>
                                <div className='sex_text'>
                                    {language_type ? "남성" : "Male"}
                                </div>
                            </label>
                            <label className='sex_box' for="sexfemale">
                                <input type="radio" name="sex" id='sexfemale' value="female" style={{marginRight:"20px"}} onChange={()=>setSex("여성")}/>
                                    <div className='sex_text'>
                                        {language_type ? "여성" : "female"}
                                    </div>
                                </label>
                        </div>
                    </div>
                    <div className="input_text">
                        <div>6. {language_type ? "주소" : "Address"}</div>
                        <input type="text" name="address" />
                    </div>
                    <div className="input_text">
                        <div>7. {language_type ? "전화번호" : "Phone number"}</div>
                        <input type="text" name="number" />
                    </div>
                    <div className="input_text">
                        <div>8. {language_type ? "원하는 지역" : "The area you want"}</div>
                        <input type="text" name="worker_wont" placeholder='EX) 대구,서울'/>
                    </div>
                    <div className="input_text field">
                        <div>9. {language_type ? "근무시간 선택" : "Choosing working hours"}</div>
                        <div className="Field_label">
                            <div className='field_warp'>
                                <input type="checkbox" id="firstFunk"onChange={firstFunk} />
                                <label for="firstFunk" className="fieldlabel">
                                    {language_type ? "주간" : "Weekly work"}
                                </label>
                                <input type="checkbox" id="secoundFunk" onChange={secoundFunk}/>
                                <label for="secoundFunk" className="fieldlabel">
                                    {language_type ? "야간" : "Night work"}
                                </label><br />
                            </div>
                            <div className='field_warp'>
                                <input type="checkbox" id="thardFunk" onChange={thardFunk}/>
                                <label className="fieldlabel" for="thardFunk">
                                    {language_type ? "2교대" : "Two shifts"}
                                </label>
                                <input type="checkbox" id="FoursFunk" onChange={FoursFunk}/>
                                <label className="fieldlabel" for="FoursFunk">
                                    {language_type ? "상관없음" : "It doesn't matter"}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="input_text">
                        <div>10. {language_type ? "할 수 있는 일" : "A job that you can do"}</div>
                        <input type="text" name="work_need" placeholder='EX) 해외 마케팅, 단순업무'/>
                    </div>
                    <div className="input_text">
                        <div>11. {language_type ? "한국어 능력" : "Korean proficiency"}</div>
                        <div class="language_label" >
                            <div>
                                <label><input type="radio" name="korean" value="high" style={{maxWidth: "30px",marginRight:"20px"}} onChange={()=>setLanguage("상")}/>
                                    {language_type ? "상" : "Upper"}
                                </label>
                                <label><input type="radio" name="korean" value="middle" style={{maxWidth: "30px",marginRight:"20px"}} onChange={()=>setLanguage("하")}/>
                                    {language_type ? "하" : "Lower"}
                                </label>
                            </div>
                            <div>
                                <label><input type="radio" name="korean" value="low" style={{maxWidth: "30px",marginRight:"20px"}} onChange={()=>setLanguage("중")}/>
                                    {language_type ? "중" : "middle"}
                                </label>
                                <label><input type="radio" name="korean" value="cant" style={{maxWidth: "30px",marginRight:"20px"}} onChange={()=>setLanguage("한국어 불가능")}/>I can't speak Korean.</label>
                            </div>
                        </div>
                    </div>
                    <div className="input_text">
                        <div>12. {language_type ? "근무시작 날짜" : "Work start date"}</div>
                        <input type="text" name="work_start" placeholder='EX) 2022.07.07'/>
                    </div>
                    <div className="input_text">
                        <div>13. {language_type ? "경험(능력)" : "Experience"}</div>
                        <input type="text" name="certificate" placeholder=''/>
                    </div>
                    <div className="send_file">
                        <div>
                            <div>
                                14. {language_type ? "자기소개서 첨부" : "Self-introduction"}
                            </div>
                            <div className='send_file_sub_text'>
                                {language_type ? "(최대 500KB)" : "(Up to 500KB)"}
                            </div>
                            <input type="file" name="my_file" />
                        </div>
                    </div>
                    <div className="textarea_text">
                        <div>15. {language_type ? "기타내용" : "Other contents"}</div>
                        <textarea name="textarea" id="" cols="100%" rows="10" style={{ fontFamily: "GmarketSansMedium", resize: "none"}}></textarea>
                    </div>
                    <div className="input_text"style={{
                            marginTop:"20px"
                        }}>
                        <div>16. {language_type ? "소개자" : "Introducer"}</div>
                        <input type="text" name="introducer"/>
                    </div>
                    <button className="submit_btn" type="submit" onClick={loading}>
                        { language_type ? loadingText : loadingTextEnglish }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForeignerForm
