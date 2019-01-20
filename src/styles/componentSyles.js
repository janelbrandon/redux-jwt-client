import styled from 'styled-components'

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const ListContainer = styled(List)`
    align-items:center;
`
const Button = styled.button`
  font-size:1em;
  margin: 4px;
  border: 2px solid grey;
  background: transparent;
  color: dark-grey;
`

export {
    List,
    ListContainer,
    Button
}