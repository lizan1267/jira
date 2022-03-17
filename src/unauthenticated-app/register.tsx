import { useAuth } from 'context/auth-context';
import React,{FormEvent} from 'react';

const apiUrl=process.env.REACT_APP_API_URL;

export const RegisterScreen=()=>{

    const {register,user}=useAuth();

    //HTMLFormElement extends Element
    //表单提交
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();  //阻止默认提交动作
        const username=(event.currentTarget.elements[0] as HTMLInputElement).value;//获取用户名值
        const password=(event.currentTarget.elements[1] as HTMLInputElement).value;//获取密码值
        register({username,password}); //调用login函数，传参数
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id={'username'} />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="password" id={'password'} />
            </div>
            <button type={'submit'}>注册</button>
        </form>
    )
}

