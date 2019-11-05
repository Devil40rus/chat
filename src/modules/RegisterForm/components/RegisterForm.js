import React from 'react';
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import Button from '../../../components/Button';
import Block from '../../../components/Block';

const RegisterForm = () => {
  return (
    <div>
        <div className="auth__top">
            <h2>Регистрация</h2>
            <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>
            <Form className="login-form">
                <Form.Item
                hasFeedback
                >
                <Input
                    id="email"
                    prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    size="large"
                    placeholder="E-Mail"
                />
                </Form.Item>
                <Form.Item>
                <Input
                    prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    size="large"
                    placeholder="Ваше имя"
                />
                </Form.Item>
                <Form.Item
                hasFeedback
                >
                <Input
                    id="password"
                    prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    size="large"
                    type="password"
                    placeholder="Пароль"
                />
                </Form.Item>
                <Form.Item>
                <Input
                    prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    size="large"
                    type="password"
                    placeholder="Повторите пароль"
                />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="large">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                <Link className="auth__register-link" to="/login">
                Войти в аккаунт
                </Link>
            </Form>
        </Block>
    </div>
  );
};

export default RegisterForm;