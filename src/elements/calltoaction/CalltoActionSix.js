import React from 'react';
const callToActionData = {
    title: "Ready to start creating a standard website?",
    subtitle: "Finest choice for your home & office",
    btnText: "Purchase Doob",
}
const CalltoActionSix = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-6">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8 col-12">
                        <div className="inner">
                            <div className="content text-left">
                                <h2 className="title">{callToActionData.title}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="call-to-btn text-left text-lg-right mt_md--20 mt_sm--20">
                            <a className="btn-default" href="#">{callToActionData.btnText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionSix;