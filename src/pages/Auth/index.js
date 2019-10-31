import React from "react";
import Block from '../../components/Block';
import Button from '../../components/Button';

import { Form, Icon, Input } from 'antd';

import './Auth.css';

class Auth extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateStatus((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <section className="auth">
                <div className="auth__content">
                    <div className="auth__top">
                        <h2>Войти в аккаунт</h2>
                        <p>Пожалуйста, войдите в свой аккаунт</p>
                    </div>
                    <Block>
                        <Form.Item onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item validateStatus="success" hasFeedback>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }]
                                })(
                                    <Input
                                        prefix={
                                        <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    size="large"
                                    placeholder="Username"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                <Input
                                    prefix={
                                        <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    }
                                    size="large"
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" size="large">
                                    Войти в аккаунт
                                </Button>
                            </Form.Item>
                            <a className="auth_register-link" href="#">Зарегистироваться</a>
                        </Form.Item>
                    </Block>
                </div>
            </section>
        );
    };
};

const WrapperNormalLoginForm = Form.create({ name: "auth" })(Auth);

export default WrapperNormalLoginForm;
