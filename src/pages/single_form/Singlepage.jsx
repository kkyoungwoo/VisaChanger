import React, {useState, useCallback,useEffect} from 'react'
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";
import { useHistory } from 'react-router-dom'
import emailjs from "emailjs-com";

const filters = [
    {
      id: 0,
      text: "0",
      title: "한국어",
      subTitle: "일자리 상담",
      subText: "온라인으로 상담을 신청해주시면 빠르고 더 정확한 상담을 받을 수 있습니다",
      content: [
          {
            name : "국적",
            type : "text",
            discription : "Nationality",
            emailjsText: "nationality",
          },
          {
            name : "현재 체류자격 유형",
            type : "text",
            discription : "Current visa type",
            emailjsText: "visatype",
          },
          {
            name : "이름",
            type : "text",
            discription : "name",
            emailjsText: "name",
          },
          {
            name : "전화번호",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "성별",
            type : "text",
            discription : "남성",
            emailjsText: "gender",
          },
          {
            name : "나이",
            type : "text",
            discription : "Age",
            emailjsText: "age",
          },
          {
            name : "주소",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "원하는 근무지역",
            type : "text",
            discription : "The area you want to work",
            emailjsText: "wantlocation",
          },
          {
            name : "희망 직종",
            type : "text",
            discription : "상관없음",
            emailjsText: "want",
          },
          {
            name : "원하는 근무시간",
            type : "text",
            discription : "10:00 ~ 20:00 or 2교대",
            emailjsText: "hours",
          },
          {
            name : "한국어 능력",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          },
          {
            name : "당신은 살 곳을 옮길 수 있나요?",
            type : "text",
            discription : "Yes or No",
            emailjsText: "place",
          },
          {
            name : "업체코드",
            type : "text",
            discription : "W0DE2",
            emailjsText: "jobnumber",
          }
      ]
    },
    {
      id: 1,
      text: "1",
      title: "English",
      subTitle: "Job counseling",
      subText: "If you apply for counseling online, you can get faster and more accurate counseling",

      content: [
          {
            name : "Nationality",
            type : "text",
            discription : "Donggu in Daegu",
            emailjsText: "nationality",
          },
          {
            name : "Current visa type",
            type : "text",
            discription : "D-2",
            emailjsText: "visatype",
          },
          {
            name : "Name",
            type : "text",
            discription : "Name",
            emailjsText: "name",
          },
          {
            name : "Phone Number",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "Gender",
            type : "text",
            discription : "Male",
            emailjsText: "gender",
          },
          {
            name : "Age",
            type : "text",
            discription : "32",
            emailjsText: "age",
          },
          {
            name : "Address",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "The area you want to work",
            type : "text",
            discription : "Jinryang Industrial Complex in Daegu",
            emailjsText: "wantlocation",
          },
          {
            name : "Desired job",
            type : "text",
            discription : "It doesn't matter",
            emailjsText: "want",
          },
          {
            name : "The working hours you want",
            type : "text",
            discription : "10:00 ~ 20:00 or 2nd shift",
            emailjsText: "hours",
          },
          {
            name : "Korean language skills",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          },
          {
            name : "Can you move somewhere to live?",
            type : "text",
            discription : "Yes or No",
            emailjsText: "place",
          },
          {
            name : "Company code",
            type : "text",
            discription : "W0DE2",
            emailjsText: "jobnumber",
          }
      ]
    },
    {
      id: 2,
      text: "2",
      title: "tiếng Việt",
      subTitle: "tư vấn việc làm",
      subText: "Nếu bạn đăng ký tư vấn trực tuyến, bạn có thể nhận được tư vấn nhanh chóng và chính xác hơn",

      content: [
          {
            name : "Quốc tịch",
            type : "text",
            discription : "Donggu ở Daegu",
            emailjsText: "nationality",
          },
          {
            name : "Loại visa hiện hành",
            type : "text",
            discription : "D-2",
            emailjsText: "visatype",
          },
          {
            name : "Tên",
            type : "text",
            discription : "Name",
            emailjsText: "name",
          },
          {
            name : "Số điện thoại",
            type : "text",
            discription : "Phone",
            emailjsText: "phone",
          },
          {
            name : "Giới tính",
            type : "text",
            discription : "Male",
            emailjsText: "gender",
          },
          {
            name : "Tuổi tác",
            type : "text",
            discription : "32",
            emailjsText: "age",
          },
          {
            name : "Địa chỉ",
            type : "text",
            discription : "Location",
            emailjsText: "location",
          },
          {
            name : "Khu vực bạn muốn làm việc",
            type : "text",
            discription : "Jinryang Industrial Complex in Daegu",
            emailjsText: "wantlocation",
          },
          {
            name : "Công việc mong muốn",
            type : "text",
            discription : "Không quan trọng",
            emailjsText: "want",
          },
          {
            name : "muốn thời gian làm việc",
            type : "text",
            discription : "10:00 ~ 20:00 or làm việc hai ca",
            emailjsText: "hours",
          },
          {
            name : "Kỹ năng tiếng Hàn",
            type : "text",
            discription : "TOPIK Level or korea proficiency",
            emailjsText: "lang",
          },
          {
            name : "Bạn có thể di chuyển nơi sống không?",
            type : "text",
            discription : "Yes or No",
            emailjsText: "place",
          },
          {
            name : "Mã công ty",
            type : "text",
            discription : "W0DE2",
            emailjsText: "jobnumber",
          }
      ]
    }
];


const Singlepage = () => {

    const history = useHistory();

    const [activeFilter, setActiveFilter] = useState("Singlepage");
    const [simpleTextNum,setSimpleTextNum] = useState(2)
    const [simpleText,setSimpleText] = useState("문의양식을 선택해주세요")
    const [loadingText,setLoadingText] = useState("신청서 접수")
      
      const loading = useCallback(()=>{
          setLoadingText("loading ...")
      },[])

    
    const handleChange = (e) => {
        setActiveFilter(e.target.id);
        setSimpleTextNum(filters[e.target.id].id)
        setSimpleText(filters[e.target.id].title)
    }


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
              console.log(result.text)
              alert("신청해주셔서 감사합니다. / Success Thank you")
              history.push("/completion")
            },
            (error) => {
              console.log(error.text)
              alert("Error message / C/S number : 010-4242-3088")
            }
          );
      };

    return (
        <>
            <SEO title="work visa" />
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            {/**cards start */}
                            <div>
                                <div className="col-lg-12">
                                    <ul className="rwt-portfolio-filter filter-button-default liststyle mb--20">
                                        {filters.map((filter) => (
                                        <li className="list-item" key={filter.id} >
                                            <button
                                            onClick={handleChange}
                                            className={
                                                filter.id === filter.text
                                                ? "current"
                                                : " "
                                            }
                                            id={filter.id}
                                            >
                                            <div className="none_pointer">
                                                {filter.title}
                                            </div>
                                            </button>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/**cards end */}
                            <div className="row">
                                <div className="col-lg-12 mb--50 mt--50" id="form_btn">
                                    <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Online counseling"
                                            title = {filters[simpleTextNum].subTitle}
                                            description = {filters[simpleTextNum].subText}
                                        />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                        <div className='form_data container'>
                            <form className='form_warp' encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
                              <input type="text" name="value" value={filters[simpleTextNum].title} style={{display:"none"}}/>
                                {filters[simpleTextNum].content.map((item,idx) => (
                                  <div key={idx}>
                                    <div style={{
                                      marginBottom: "10px",
                                      fontWeight: "bold"
                                    }}>
                                      {item.name}
                                    </div>
                                    <input type={item.type} name={item.emailjsText} placeholder={item.discription} style={{
                                      height: "50px",
                                      marginBottom: "20px",
                                    }}/>
                                  </div>
                                ))}
                                    <div style={{display:"flex",
                                        justifyContent:"center",
                                        marginTop: "30px",
                                        marginBottom: "60px"}}>
                                        <button className="submit_btn btn-default btn-large" type="submit" onClick={loading}>{loadingText}</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Singlepage;
