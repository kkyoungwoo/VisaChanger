import React, {useState, useCallback, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import emailjs from "emailjs-com";
import './form.css'

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
            "template_66hgnxe",
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
          <div className='foreignerform sub'>
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
                        <div>2. Job number</div>
                        <input type="text" name="worker_number" placeholder='EX) W1JA2'/>
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
                        <div>8. {language_type ? "나이" : "age"}</div>
                        <input type="text" name="age" placeholder='EX) 29살'/>
                    </div>
                    <div className="input_text">
                        <div>9. {language_type ? "한국어 능력" : "Korean proficiency"}</div>
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
                        <div>10. {language_type ? "하고 싶은 일" : "what you want to do"}</div>
                        <input type="text" name="want" placeholder='EX) anything'/>
                    </div>
                    <div className="send_file">
                        <div>
                            <div>
                                11. {language_type ? "자기소개서 첨부" : "Self-introduction"}
                            </div>
                            <div className='send_file_sub_text'>
                                {language_type ? "(최대 500KB)" : "(Up to 500KB)"}
                            </div>
                            <input type="file" name="my_file" />
                        </div>
                    </div>
                    <div className="input_text"style={{
                            marginTop:"100px"
                        }}>
                        <div>12. {language_type ? "소개자" : "Introducer"}</div>
                        <input type="text" name="introducer"/>
                    </div>
                    <button className="submit_btn" type="submit" onClick={loading}>
                        {language_type ? loadingText : loadingTextEnglish}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForeignerForm
