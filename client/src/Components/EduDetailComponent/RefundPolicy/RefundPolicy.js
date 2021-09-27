import React from "react";
import styled from "styled-components";
import SubTitleLeftBar from "../SubTitleLeftBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Section = styled.div`
    padding: 5vh 13vw;
    width: 100%;
`;
const SubTitle = styled(SubTitleLeftBar)``;
const Main = styled.div`
    display: flex;
    flex-direction: column;
`;
const GridArea = styled.div`
    display: grid;
    margin: 20px auto;
    width: auto;
    grid-template-columns: 190px 170px;
    grid-template-rows: repeat(4, 50px);
    border-left: 1.5px solid rgba(0, 0, 0, 0.2);
    border-top: 1.5px solid rgba(0, 0, 0, 0.2);
    div {
        border-right: 1.5px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const ListArea = styled.div`
    margin: 50px auto;
`;
const Li = styled.div`
    margin: 30px;
    line-height: 20px;
    svg {
        color: #5c9e9e;
        font-size: 1.7rem;
    }
`;

const Br = styled.br``;
const RefundPolicy = () => (
    <Section>
        <SubTitle title={"취소 환불 규정"} />
        <Main>
            <GridArea>
                <div>
                    <>수업 15일 전 취소</>
                </div>
                <div>
                    <>100% 환불</>
                </div>
                <div>
                    <>수업 12일 전 취소</>
                </div>
                <div>
                    <>50% 환불</>
                </div>
                <div>
                    <>수업 10일 전 취소</>
                </div>
                <div>
                    <>30% 환불</>
                </div>
                <div>
                    <>수업 7일 이내</>
                </div>
                <div>
                    <>취소·환불 불가</>
                </div>
            </GridArea>
            <ListArea>
                <Li>
                    <FontAwesomeIcon icon="check-circle" />
                    &nbsp;&nbsp;&nbsp;환불 업무시간:평일 오전 10:00~오후 06:00
                    <Br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (점심시간:오후 12:00~13:00)
                </Li>
                <Li>
                    <div>
                        <FontAwesomeIcon icon="check-circle" />
                        &nbsp;&nbsp;&nbsp;토·일요일 및 국· 공휴일은 취소 및 변경신청이
                        접수 되지 않으며 취소 일수에서 제외됩니다.
                    </div>
                </Li>
                <Li>
                    <div>
                        <FontAwesomeIcon icon="check-circle" />
                        &nbsp;&nbsp;&nbsp;문의:070-8064-0829
                    </div>
                </Li>
            </ListArea>
        </Main>
    </Section>
);

export default RefundPolicy;
