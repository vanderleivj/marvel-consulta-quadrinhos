import styled from "styled-components";

export const Containerbody = styled.div`
  display:flex;
  min-height: inherit;
`;

export const ContainerbodyOpacity = styled.div`
  display:flex;
  justify-content:center;
  align-content:center;
  flex-direction:column;
  align-items:center;
  padding:20px;
  width:100%;
  background:rgba(0,0,0,0.8);
  color:white;
  text-align:center;

  input {
    width:70%;
    padding:15px;
    border-radius:100px;
    border-width:0px;
    margin-top:20px;
  }

  h1 {
    font-size:2.4rem;
    color:white;
  }

  p{
    font-size:1.2rem;
  }
`;

export const ComicContainer = styled.div`
  height:180px;
  width:100%;
  background-size: cover !important;
  max-width:145px;
  cursor: pointer;

  div{
    height:100%;
    width:100%;
    background:rgba(0,0,0,0.5);
    padding:15px;
    display:flex;
    align-items:flex-end;
  }

  p{
    font-size:0.9rem
  }
`;

export const DialogBody = styled.div`
  display:flex;
  justify-content:flex-start;
  flex-direction:column;
  align-items:center;
  padding:15px 30px;

  div{
    display:flex;
    flex-direction:row;
  }

  h3{
    margin-bottom:20px;
  }
`;