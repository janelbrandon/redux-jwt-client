import styled from 'styled-components'

const primaryColor = 'dark-grey'
const hoverColor = 'aqua'

const Button = styled.button`
  font-size:1em;
  margin: 4px;
  border: 2px solid ${primaryColor};
  background: transparent;
  color: ${primaryColor};

&:hover {
    background: ${props => (props.highlight) || (hoverColor)};
}
`

const Label = styled.label`
    padding: 1em;
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const ListContainer = styled(List)`
    align-items:center;
    margin-bottom: 1em;
`

export {
    List,
    ListContainer,
    Button,
    Label
}