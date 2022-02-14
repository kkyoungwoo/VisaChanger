import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionJob = ({customStyle}) => {
    return (
        <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Q. 한국에 살고 있는 중입니다. 취업할 수 있을까요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>해외 거주자보다 한국 거주자의 취업이 훨씬 쉽습니다. 비자, 거주지, 한국어 능력, 선호하는 직업 등을 고려하여 비자 유형에 따라 일자리를 제공합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Q. 해외에 살고 있는 중입니다. 취업할 수 있을까요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>회사/기관에서 채용 제안을 받은 경우 빠르게 취업이 가능합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Q. 한국에서 공부하는 동안 직업을 가질 수 있나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>한국에 있는 외국인 학생은 아르바이트 허가가 있어야만 일할 수 있습니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Q. 취업 비자 E-7을 발급하는 전문직을 얻을 수 있을까요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>E-7 비자를 후원하는 회사를 찾아서 연결해 드립니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Q. 한국에서 영어 선생님이 되고 싶습니다.
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>미국, 영국, 캐나다, 호주, 뉴질랜드, 아일랜드, 남아프리카에서 국적을 가지고 있다면 E-2 비자를 받아 영어 선생님이 될 수 있습니다.</Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    Q. 외국인 구직자가 한국에서 빨리 취업하는 방법이 있나요?
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                    <Card.Body>이력서와 자기소개서를 작성해 주시면 빠른 취업이 가능합니다.</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
export default AccordionJob

