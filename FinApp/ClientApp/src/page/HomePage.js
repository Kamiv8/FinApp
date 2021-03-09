import React,{useEffect, useState} from 'react';
import { connect} from 'react-redux';
import styled from 'styled-components';
import Title from '../components/Title';
import { FetchDataMoneyAction } from '../actions/actions';
import HomeTemplate from '../templates/HomeTemplate';
import SingleChart from '../components/SingleChart';
import Button from '../components/Button';
import FormOperation from '../components/FormOperation';
import { theme } from '../theme/MainTheme';


const StyledWrapper = styled.div`
  background-color: ${({theme}) => theme.white};
  margin-top: 5vh;
  padding: 5.5%;
  border-radius: 20px;
`;
const StyledChart = styled.div`
  height: 55vh;
  box-shadow: -10px 3px 20px rgba(0,0,0,0.16);
  border-radius: 20px;
  padding: 10px;
`;
const StyledButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0;
`;

const StyledTitleColor = styled(Title)`
  color: ${({allMoney}) => allMoney >= 0 ? theme.green : theme.red};
`;

const HomePage = ({allMoney,userId,getData}) => {
  const [add, setAdd] = useState(false);
  let [money,setMoeny] = useState(allMoney);
  useEffect(()=>{
    setMoeny(allMoney);
    money = getData(userId);

  })
  return(
  <>
    <HomeTemplate>
      <StyledWrapper>
        <Title>Your Budget:</Title>
        <StyledTitleColor big allMoney={allMoney} >{money} PLN </StyledTitleColor>
        <Title>Money Status</Title>
        <StyledChart>
          <SingleChart />
        </StyledChart>
        <StyledButtonWrapper>
          <Button reverse onClick={()=>{setAdd(!add)}} >Add operation</Button>
        </StyledButtonWrapper>
      </StyledWrapper>
    </HomeTemplate>
    <FormOperation add={add} setAdd={setAdd}/>
  </>
  )
}



const mapStateToProps = ({ username = null,allMoney,userId}) => ({
  username,
  allMoney,
  userId
});
const mapDispatchToProps = (dispatch) =>({
  getData: (userId)=>{
    dispatch(FetchDataMoneyAction(userId));
  }
}) 
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
