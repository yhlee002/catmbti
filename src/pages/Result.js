import React from 'react';
import styled from "styled-components";
import PangImage from '../assets/main-cat.jpg';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import ResultData from "../assets/data/resultdata";

const Result = () => {
  const navigate = useNavigate();

  return (
      <Wrapper>
        <Header>예비집사 판별기</Header>
        <Contents>
          <Title>결과 보기</Title>
          <LogoImage>
            <img className="rounded-pill" src={ResultData[0].image} height={520}/>
          </LogoImage>
          <Desc>예비 집사님과 찰떡 궁합인 고양이는 {ResultData[0].name}입니다.
            <div>{ResultData[0].desc}</div>
          </Desc>
          <Button style={{fontFamily: "GowunBatang-Regular"}} onClick={() => navigate("/")}>테스트 다시하기</Button>
        </Contents>
      </Wrapper>
  )
}

export default Result;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GangwonEdu_OTFBoldA";
`

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "GangwonEdu_OTFBoldA";
`

const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
  font-family: "GangwonEdu_OTFBoldA";
`

const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "GangwonEdu_OTFBoldA";
`