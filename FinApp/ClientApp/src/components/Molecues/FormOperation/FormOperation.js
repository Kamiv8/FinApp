import React from 'react';
import styled from 'styled-components';
import { Formik, Form as Forms } from 'formik';
import { connect } from 'react-redux';
import { AddOperationAction } from '../../../actions/actions';

import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';

const StyledForm = styled(Forms)`
  background-color: ${({ theme }) => theme.white};
  margin: 10%;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.16);
  padding: 5%;
  @media screen and (min-width: 960px) {
    margin: 0;
    height: 100%;
  }
`;

const StyledDescription = styled.textarea`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.purple};
  width: 100%;
  &::placeholder,
  &::-webkit-input-placeholder {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
  @media screen and (min-width: 960px) {
    width: 70%;
  }
`;

const FormOperation = ({ userId, addOperation, setAdd }) => {
  return (
    <Formik
      initialValues={{ title: '', price: '', date: '', description: '' }}
      onSubmit={({ title, date, price, description }, { resetForm }) => {
        addOperation(title, price, date, description, userId);
        resetForm();
        setAdd(false);
      }}
    >
      {({ handleChange, values, handleBlur }) => {
        return (
          <StyledForm>
            <Input
              second
              placeholder="Title"
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
              required
            />
            <Input
              second
              placeholder="Price"
              type="text"
              name="price"
              value={values.price}
              onBlur={handleBlur}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <Input
              second
              placeholder="Date"
              type="date"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
              autoComplete="off"
              required
            />
            <StyledDescription
              placeholder="Description"
              onChange={handleChange}
              onBlur={handleBlur}
              name="description"
              value={values.description}
            />
            <Button reverse type="submit">
              Add
            </Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

const mapStateToProps = ({ userId }) => ({
  userId,
});

const mapDispatchToProps = (dispatch) => ({
  addOperation: (title, price, date, description, userId) => {
    dispatch(AddOperationAction(title, price, date, description, userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormOperation);
