import React, { Component } from 'react';
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import Button from '../../../components/Button';
import Block from '../../../components/Block';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться</p>
                </div>
                <Block>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item validateStatus="success" hasFeedback>
                            <Input
                                prefix={
                                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                            }
                            size="large"
                            placeholder="Имя"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                }
                                size="large"
                                type="password"
                                placeholder="Пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
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
                        <Link className="auth_register-link" to="/login">
                            Войти в аккаунт
                        </Link>
                    </Form>
                </Block>
            </div>
        );
    }
}

export default RegisterForm;