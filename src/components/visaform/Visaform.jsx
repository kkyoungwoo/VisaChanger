import React, {useState, useCallback} from 'react'
import Header from '../homepage/header/Header'
import emailjs from "emailjs-com";
import { useHistory } from 'react-router-dom'
import './visaform.css'

function Visaform() {

    const history = useHistory();

    const [loadingText,setLoadingText] = useState("상담 신청")
      const loading = useCallback(()=>{
          setLoadingText("loading ...")
      },[])


    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_thek_form",
        "template_plc8ox7",
        e.target,
        "user_YOvzVUT3C3OBySLzLPves"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("메일이 정상적으로 발송되었습니다.")
          history.push("/")
        },
        (error) => {
          console.log(error.text);
          alert("메일이 발송되지 않았습니다. 연락처 : 010-4242-3088")
        }
      );
  };

    return (
        <div className='visaform_warp'>
            <Header />
            <div className='visaform_inner'>
                <form clsaaName='visaform_box' encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                    <div className="input_text">
                        <div>이름</div>
                        <input type="text" name="message" />
                    </div>
                    <div className="input_text">
                        <div>전화번호</div>
                        <input type="text" name="phone" />
                    </div>
                    <div className="textarea_text">
                        <div>상담내용</div>
                        <textarea name="textarea" id="" cols="30" rows="10" style={{resize: "none"}}></textarea>
                    </div>
                    <button type="submit" onClick={loading}>{loadingText}</button>
                </form>
            </div>
        </div>
    )
}

export default Visaform
