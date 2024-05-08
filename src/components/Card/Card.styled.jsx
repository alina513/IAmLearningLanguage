import styled from "styled-components";
export const Wrapper = styled.div`
max-width: 1184px;
  border-radius: 24px;
  background-color: #FFFFFF;
  padding: 24px;
`
export const ContainerPhoto = styled.div`
display: flex;
gap: 48px;
`
export const Photo = styled.img`
width: 120px;
  height: 120px;
  border-radius: 100px;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 3px solid #FBE9BA;
`
export const ContainerText = styled.div`
max-width: 968px;
`
export const ContainerLang = styled.div`
display: flex;
  gap: 192px;
`

export const TitleLang = styled.h3`
color: #8A8A89;
font-size: 16px;
font-weight: 500;
line-height: 150%;
`

export const ListLanguage = styled.ul`
display: flex;
`
export const ItemLanguage = styled.li`
height: 16px;
padding: 0 16px 0 16px;
border-right: solid 1px rgba(18, 20, 23, 0.2);
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 150%;
&:last-child {
  border-right: none;
}
`
export const Name = styled.h2`
color: #121417;
font-size: 24px;
font-weight: 500;
line-height: 100%;
margin-top: 8px;
margin-bottom: 32px;
`

export const TitleText = styled.h4`
color: #8A8A89;
font-size: 16px;
font-weight: 500;
line-height: 150%;
`
export const Text = styled.p`
color: #121417;
font-size: 16px;
font-weight: 500;
line-height: 100%;
`
export const ContainerItemText = styled.div`
display: flex;
text-align: center;
`
export const ReadMore = styled.button`
`
export const ListLevel = styled.ul`
`
export const ItemLevel = styled.li`
`