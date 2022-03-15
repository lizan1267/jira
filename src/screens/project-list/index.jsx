import React from 'react';
import { useState, useEffect } from 'react';
import * as qs from 'qs';
import { cleanObject, useDebounce, useMount } from 'utils';
import { List } from './list';
import { SearchPanel } from './search-panel';


const apiUrl=process.env.REACT_APP_API_URL

export const ProjectListScreen=()=>{
    //负责人
    const [users, setUsers] = useState([]);

    //当用户输入关键词或者选择select框的时候，param变
    const [param, setParam] = useState({
        name:"",
        personId:""
    });

    const debounceParam=useDebounce(param,2000);

    //状态
    const [list, setList]=useState([]);

    //搜索的时候去请求数据,获取list值
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response=>{
            if(response.ok){ //请求成功
                setList(await response.json())
            }
        })
    }, [debounceParam]) //当param变化的时候去请求

    //初始化users
    useMount(()=>{
      fetch(`${apiUrl}/users`).then(async response=>{
        if(response.ok){
          setUsers(await response.json());
        }
      })
    })

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
}


