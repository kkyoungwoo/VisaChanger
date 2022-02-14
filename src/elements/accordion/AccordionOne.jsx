import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionOne = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Q. 외국인등록을 누가 언제 해야 하나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>91일 이상 장기 체류하려는 외국인은 입국일로부터 90일 이내에 외국인등록을 해야 합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Q. 체류기간 연장신청을 해야 하는데 사무소에 꼭 방문해야 하나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>전자민원으로 신청 가능한 체류자격의 경우 온라인 신청이 가능합니다.
                        <br/>※ 자세한 사항은 ‘하이코리아 홈페이지-전자민원-민원사무안내’를 참고하시기 바랍니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Q. 체류기간 연장신청은 언제부터 할 수 있나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>체류기간 연장이 필요한 외국인은 체류 기간 만료 전 4개월 부터 신청가능하며 만료 당일（전자민원의 경우 만료일 전일）까지 신청해야 합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Q. 체류기간 연장 신청 시 필요한 서류를 알려주세요.
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>공통서류로 통합신청서 (별지 34호 서식), 여권, 외국인등록증, 체류지 입증서류가 필요합니다. 기타 체류자격에 따른 서류는 하이코리아 사이트 내「체류자격별 안내매뉴얼」또는 ' 1345 ' 외국인종합안내센터 전화 상담을 통해 확인 가능합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Q. 본인의 출입국 기록을 어떻게 확인할 수 있나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>‘출입국에 관한 사실증명’은 출입국, 외국인관서나 시, 군, 구청 및 주민 센터에서 발급 신청할 수 있으며 이를 통해 본인의 출입국 기록 확인이 가능합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    Q. 귀화 신청을 하려면 반드시 영주자격을 소지해야 하나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>2018.12.20.부터 국적법 제5조에 따라 일반귀화를 신청하는 경우에는 반드시 영주 (F-5) 자격을 소지해야 합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                    Q. 외국 시민권(국적)을 취득하면 어떻게 해야 하나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                    <Card.Body>외국 시민권(국적)을 자진하여 취득한 경우, 대한민국 ｢국적법｣에 따라 그 외국 시민권(국적)을 취득한 날에 대한민국 국적이 당연 상실되므로, 대한민국 재외공관 또는 출입국· 외국인관서에 ‘국적상실’ 신고를 하여야 합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                    Q. 영주권자도 비자연장 등 신청이 필요한가요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                    <Card.Body>영주자격을 가진 외국인에게 발급하는 외국인등록증 (영주증)의 유효기간은 10년이며, 유효기간이 끝나기 전까지 영주증을 재발급 받아야 합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="8">
                    Q. 이사를 하면 신고해야 하나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                    <Card.Body>등록외국인 또는 거소신고자(F-4)가 이사하면 전입한 날부터 15일 이내 (F-4는 14일 이내) 관할 출입국·외국인관서 또는 관할 시·군·구청이나 주민센터에 신고해야 합니다. 특히 외국인은 세대원으로 속해 있더라도 세대주와 함께 자동 변경되지 않기 때문에 반드시 개별적으로 외국인 본인이 체류지 변경신고를 해야 합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="9">
                    Q. 재외동포(F-4) 자격변경 신청 시 범죄경력증명서가 필요한가요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                    <Card.Body>재외동포(F-4) 자격 신청자는 해외 범죄경력증명서를 제출 해야 합니다. 신청일로부터 3개월 이내 발급된 것이어야 하며, 범죄경력증명서 원본과 공증된 번역본 제출이 원칙입니다. 공증된 번역본이란 번역자의 인적사항 및 연락처를 기재하고 번역자의 신분증 사본을 첨부하는 것을 의미합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="10">
                    Q. 출국기간연장 또는 출국기한유예를 받은 사람도 취업허가를 받을 수 있나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                    <Card.Body>기존에 취업활동이 가능한 자격을 소지하였더라도 이후에 출국기간연장 또는 출국기한유예를 받은 사람은 더 이상 취업이 가능하지 않습니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>
    )
}
export default AccordionOne

