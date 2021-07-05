import React from 'react';
import { Field, Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import s from './form.module.css';
import cancel from '../../../../icons/cancel.png';
import star from '../../../../icons/star.png';

const GetForm = (props) => {
  const { setSettingData, loader } = props;
  const validationSchema = yup.object().shape({
    repoName: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле обязательно для заполнения'),
    buildCommand: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле обязательно для заполнения'),
    mainBranch: yup.string().typeError('Должно быть строкой'),
  });
  return (
    <div>
      <Formik
        initialValues={{
          repoName: '',
          buildCommand: '',
          mainBranch: 'master |',
          period: 0,
        }}
        onSubmit={() => { }}
        validationSchema={validationSchema}
        validateOnBlur
      >
        {({
          values, errors, touched, isValid, dirty, handleChange, handleBlur, setFieldValue,
        }) => (
          <Form>
            <div className={s.form_container}>
              <div className={s.form__title}>Settings</div>
              <div className={s.form__desc}>
                Configure repository connection and synchronization settings.
              </div>
              <div className={s.form__inputs}>
                <div className={s.input_container}>
                  {values.repoName !== '' ? (
                    <img
                      onClick={() => {
                        setFieldValue('repoName', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />
                  ) : null}
                  <div className={s.form__input_title}>
                    <div>GitHub repository</div>
                    <span className={s.form__star_icon}>
                      <img src={star} alt="star" />
                    </span>
                  </div>
                  <label className={s.form__price_input} htmlFor="repoName">
                    <Field
                      name="repoName"
                      type="text"
                      placeholder="user-name/repo-name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repoName}
                      className={
                        errors.repoName && touched.repoName ? s.form_input_error : s.form_input
                      }
                    />
                    {touched.repoName && errors.repoName && (
                      <div className={s.error}>{errors.repoName}</div>
                    )}
                  </label>
                </div>
                <div className={s.input_container}>
                  {values.buildCommand !== '' ? (
                    <img
                      onClick={() => {
                        setFieldValue('buildCommand', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />
                  ) : null}
                  <div className={s.form__input_title}>
                    <div>Build command</div>
                    <span className={s.form__star_icon}>
                      <img src={star} alt="star" />
                    </span>
                  </div>
                  <label className={s.form__price_input} htmlFor="buildCommand">
                    <Field
                      name="buildCommand"
                      type="text"
                      placeholder="npm ci && npm run build"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.buildCommand}
                      className={
                        errors.buildCommand && touched.buildCommand
                          ? s.form_input_error
                          : s.form_input
                      }
                    />
                    {touched.buildCommand && errors.buildCommand && (
                      <div className={s.error}>{errors.buildCommand}</div>
                    )}
                  </label>
                </div>
                <div className={s.input_container}>
                  {values.mainBranch !== '' ? (
                    <img
                      onClick={() => {
                        setFieldValue('mainBranch', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />
                  ) : null}
                  <div className={s.form__input_title}>Main branch</div>
                  <label className={s.form__price_input} htmlFor="mainBranch">
                    <Field
                      name="mainBranch"
                      type="text"
                      placeholder="master |"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mainBranch}
                      className={
                        errors.mainBranch && touched.mainBranch ? s.form_input_error : s.form_input
                      }
                    />
                    {touched.mainBranch && errors.mainBranch && (
                      <div className={s.error}>{errors.mainBranch}</div>
                    )}
                  </label>
                </div>

                <div className={s.input_container_time}>
                  <div className={s.form__input_title}>
                    <div>Synchronize every</div>
                  </div>
                  <label className={s.form__time_label} htmlFor="period">
                    <Field
                      name="period"
                      type="text"
                      placeholder="period"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.period}
                      className={errors.period && touched.period
                        ? s.form_input_error
                        : s.form_input}
                    />
                    {touched.period
                      && errors.period
                      && <div className={s.error}>{errors.period}</div>}
                  </label>
                  <div className={s.form__input_title}>minutes</div>
                </div>
              </div>
              <div className={s.form__buttons}>
                <div
                  onClick={
                    isValid && dirty
                      ? () => {
                        /* eslint-disable no-debugger, no-console */
                        setSettingData(values);
                      }
                      : null
                  }
                  className={(loader === true) || (!isValid || !dirty)
                    ? s.form__button : s.form__button_save}
                  role="presentation"
                >
                  Save
                </div>
                <NavLink to="/">
                  <div role="presentation" className={s.form__button_cansel}>Cansel</div>
                </NavLink>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GetForm;
