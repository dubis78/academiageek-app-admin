import React, { useEffect } from "react";
import { Button } from "antd";
import { Form, Input, Checkbox, DatePicker } from 'formik-antd'
import esES from 'antd/lib/locale-provider/es_ES';
import 'moment/locale/es-mx';import { Formik } from 'formik'
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { getMessageValidate, getMessageByString, getMessageStringLengthValidate } from "./../util/Messages"
import { useDispatch, useSelector } from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn
} from "appRedux/actions/Auth";

import IntlMessages from "util/IntlMessages";
import { message } from "antd/lib/index";
import CircularProgress from "components/CircularProgress/index";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";

const FormItem = Form.Item;

const SignUp = (props) => {


  const dispatch = useDispatch();
  const history = useHistory();
  const { loader, alertMessage, showMessage, authUser } = useSelector(({ auth }) => auth);
  const { locale } = useSelector(({ settings }) => settings);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log("values", values);
      if (!err) {
        dispatch(showAuthLoader());
        dispatch(userSignUp(values));
      }
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    dispatch(showAuthLoader());
    dispatch(userSignUp(values));
  };

  const SignupSchema = Yup.object().shape({
    id : Yup.string()
    .required(getMessageValidate(locale, getMessageByString(locale, "app.userAuth.id"), "valid.field.required")), 
    password : Yup.string()
      .required(getMessageValidate(locale, getMessageByString(locale, "app.userAuth.password"), "valid.field.required"))
      .min(6, getMessageStringLengthValidate(locale, getMessageByString(locale, "app.userAuth.password"), 6, "valid.field.minlength")),
    name: Yup.string()
      .required(getMessageValidate(locale, getMessageByString(locale, "app.userAuth.name"), "valid.field.required")),
    dateBirth : Yup.date()
      .required(getMessageValidate(locale, getMessageByString(locale, "app.userAuth.dateBirth"), "valid.field.required"))
      ,
    lastName: Yup.string()
      .required(getMessageValidate(locale, getMessageByString(locale, "app.userAuth.lastName"), "valid.field.required")),
    email : Yup.string()
      .email(getMessageValidate(locale, getMessageByString(locale, "app.userAuth.mail"), "valid.field.mail"))
      .required(getMessageValidate(locale, getMessageByString(locale, "app.userAuth.mail"), "valid.field.required")),
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
              <h1><IntlMessages id="app.userAuth.signUp" /></h1>
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
              initialValues={{ id : '', email: '', password: '', name: '', lastName: '', dateBirth : '' }}
              validationSchema={SignupSchema}
              render={({ errors, touched }) => (
                <Form
                  name="basic"
                  className="gx-signin-form gx-form-row0">
                  
                  <FormItem name="id">
                    <Input name='id' type = "text" placeholder = { getMessageByString(locale, "app.userAuth.id") }/>
                  </FormItem>
                  
                  <FormItem name="name">
                    <Input name='name' type = "text" placeholder = { getMessageByString(locale, "app.userAuth.name") }/>
                  </FormItem>
                  
                  <FormItem name="lastName">
                    <Input name='lastName' type = "text" placeholder = { getMessageByString(locale, "app.userAuth.lastName") }/>
                  </FormItem>
                  
                  <FormItem name="dateBirth">
                    <DatePicker name="dateBirth" className="gx-mb-3 gx-w-100" locale={esES}/>
                  </FormItem>

                  <FormItem name="email">
                    <Input name="email" type="email" placeholder = { getMessageByString(locale, "app.userAuth.mail") }/>
                  </FormItem>
                  <FormItem name="password">
                    <Input type="password" name="password" placeholder = { getMessageByString(locale, "app.userAuth.password") }/>
                  </FormItem>
                  <FormItem name="remember" valuePropName="checked">
                  <Checkbox name="remember"><IntlMessages id="appModule.iAccept" /></Checkbox>
                      <span className="gx-signup-form-forgot gx-link"><IntlMessages
                        id="appModule.termAndCondition" /></span>
                  </FormItem>
                  <div className="ant-row ant-form-item">
                    <div className="ant-col">
                      <Button type="primary" className="gx-mb-0" htmlType="submit">
                        <IntlMessages id="app.userAuth.signUp" />
                      </Button>
                      <span><IntlMessages id="app.userAuth.or" /></span> <Link to="/signin"><IntlMessages
                        id="app.userAuth.signIn" /></Link>
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
                      <li>
                        <TwitterOutlined onClick={() => {
                          dispatch(showAuthLoader());
                          dispatch(userTwitterSignIn());
                        }} />
                      </li>
                    </ul>
                  </div>
                </Form>
              )}
            />
          </div>
          {loader &&
            <div className="gx-loader-view">
              <CircularProgress />
            </div>
          }
          {showMessage &&
            message.error(alertMessage)}
        </div>
      </div>
    </div>
  );
};


export default SignUp;
