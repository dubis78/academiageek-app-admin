import React, { useEffect } from "react";
import { Button, message } from "antd";
import { Form, Input, Checkbox } from 'formik-antd'
import { Formik } from 'formik'
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { getMessageValidate } from "./../util/Messages"

import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn
} from "appRedux/actions/Auth";

import IntlMessages from "util/IntlMessages";
import CircularProgress from "components/CircularProgress/index";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";

const SignIn = () => {

  const dispatch = useDispatch();
  const { loader, alertMessage, showMessage, authUser } = useSelector(({ auth }) => auth);
  const { locale } = useSelector(({ settings }) => settings);

  //const [form] = Form.useForm();
  const history = useHistory();

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      history.push('/');
    }
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       dispatch(showAuthLoader());
  //       dispatch(userSignIn(values));
  //     }
  //   });
  // };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("finish", values)
    dispatch(showAuthLoader());
    values.locale = locale
    dispatch(userSignIn(values));
  };
  
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .required(getMessageValidate(locale, "contraseña", "valid.field.required")),
    email: Yup.string()
      .email(getMessageValidate(locale, "email", "valid.field.mail"))
      .required(getMessageValidate(locale, "email", "valid.field.required")),
  });

  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content">
            <div className="gx-app-logo-content-bg">

              <img src={"https://via.placeholder.com/272x395"} alt='Neature' />
            </div>
            <div className="gx-app-logo-wid">
              <h1><IntlMessages id="app.userAuth.signIn" /></h1>
              <p><IntlMessages id="app.userAuth.bySigning" /></p>
              <p><IntlMessages id="app.userAuth.getAccount" /></p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src={require("assets/images/logo.png")} />
            </div>
          </div>
          <div className="gx-app-login-content">

            <Formik
              onSubmit={onFinish}
              initialValues={{ email: 'demo@example.com', password: "demo#123", remember: false }}
              validationSchema={SignupSchema}
              render={({ errors, touched }) => (
                <Form
                  name="basic"
                  className="gx-signin-form gx-form-row0">
                  <Form.Item name='email'>
                    <Input type="email" name="email"/>
                  </Form.Item>
                  <Form.Item name='password'>
                    <Input.Password name="password"></Input.Password>
                  </Form.Item>
                  <div className="ant-row ant-form-item">
                    <div className="ant-col">
                    <Checkbox name="remember"><IntlMessages id="appModule.rememberMe" /></Checkbox>
                    <Link className="gx-login-form-forgot" to="/custom-views/user-auth/forgot-password"><IntlMessages id="app.userAuth.forgotPassword" /></Link>
                    </div>
                  </div>
                  <div className="ant-row ant-form-item">
                    <div className="ant-col">
                      <Button type="primary" className="gx-mb-0" htmlType="submit">
                        <IntlMessages id="app.userAuth.signIn" />
                      </Button>
                      <span><IntlMessages id="app.userAuth.or" /></span> <Link to="/signup"><IntlMessages
                        id="app.userAuth.signUp" /></Link>
                    </div>
                  </div>
                  <div className="gx-flex-row gx-justify-content-between">
                    <span><IntlMessages id="app.userAuth.orConnectWith" /></span>
                    <ul className="gx-social-link">
                      <li>
                        <GoogleOutlined onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userGoogleSignIn());
                        }} />
                      </li>
                      <li>
                        <FacebookOutlined onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userFacebookSignIn());
                        }} />
                      </li>
                      <li>
                        <GithubOutlined onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userGithubSignIn());
                        }} />
                      </li>
                     {/*} <li>
                        <TwitterOutlined onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userTwitterSignIn());
                        }} />
                      </li> {*/}
                    </ul>
                  </div>
                  <span
                    className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'</span>
                </Form>
              )}
            />
          </div>

          {loader ?
            <div className="gx-loader-view">
              <CircularProgress />
            </div> : null}
          {showMessage ?
            message.error(alertMessage.toString()) : null}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
