import { Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import './f_section.css';
import EmailForm from '../../../email/Emailform';

function First_section() {
    return (
        <div>
            <div>
                <div>
                    여러 나라의 외국인들이
                </div>
                <div>
                    채용을 기다리고 있습니다.
                </div>
            </div>
            <div>
                <div>현재까지 온라인 신청서를 작성한 업체</div>
                <div>
                    <div>
                        17
                    </div>
                    <div>
                        업체
                    </div>
                </div>
                <div>
                    <a href="./form">
                        온라인 신청서 작성
                    </a>
                </div>
            </div>
        </div>
    )
}

export default First_section
