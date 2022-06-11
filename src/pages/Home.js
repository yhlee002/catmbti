import React from 'react';
import styled from "styled-components";
import PangImage from '../assets/main-cat.jpg';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // useNavigate()를 바로 사용해도 되지만 한번 더 변수로 사용
    const handleClickButton = () => {
        navigate("/question");
    }

  return (
      <Wrapper>
        <Header>예비집사 판별기</Header>
        <Contents>
          <Title>나에게 맞는 주인님은?</Title>
          <LogoImage>
            <img className="rounded-pill" src={PangImage} width={350} height={520}/>
          </LogoImage>
          <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기</Desc>
          <Button style={{fontFamily: "GowunBatang-Regular"}} onClick={handleClickButton}>테스트 시작하기</Button>
        </Contents>
      </Wrapper>
  )
}

export default Home;

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
  margin: 20px 0 30px 0;
`

const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
  font-family: "GangwonEdu_OTFBoldA";
`