import React from 'react'
import styled from 'styled-components'
import { bool, number, string } from 'prop-types'
import * as palette from '../../atoms/variables'

const Wrap = styled.div`
  padding-top: 10px;
`

const Label = styled.label`
  margin-bottom: 10px;
`

const StyledInput = styled.input`
  background: #fff;
  border: 0;
  margin: 0;
  border-radius: ${palette.borderRadius};
  padding: 5px;
`

const Input = ({ disabled, id, label, name, input, placeholder, type }) => (
  <Wrap>
    {
      label &&
      <Label htmlFor={id || name}>{label}</Label>
    }
    <StyledInput
      disabled={disabled}
      id={id || name}
      type={type || 'text'}
      {...input}
      placeholder={placeholder}
    />
  </Wrap>
)

Input.defaultProps = {
  disabled: false,
  id: '',
  label: '',
  name: '',
  input: '',
  placeholder: '',
  type: 'text',
}

Input.propTypes = {
  disabled: bool,
  id: number,
  label: string,
  name: string,
  input: string,
  placeholder: string,
  type: string,
}

export default Input
