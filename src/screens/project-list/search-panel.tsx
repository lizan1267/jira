import React from 'react';

export interface User{
  id:string;
  name:string;
  email:string;
  title:string;
  organization:string;
  token:string
}

interface SearchPanelProps{
  users:User[],
  param:{
    name:string,
    personId:string
  },
  setParam:(param:SearchPanelProps['param'])=>void;
}

export const SearchPanel=({users,param,setParam}:SearchPanelProps)=>{

  return (
    <form>
      <div>
          {/* 输入框，用来输入要搜索的关键词 */}
          <input type="text" value={param.name} 
            onChange={evt=>setParam({
                ...param,
                name:evt.target.value
            })}
          />

            {/* 单选框，可以选择负责人 */}
          <select value={param.personId} 
            onChange={evt=>setParam({
              ...param,
              personId:evt.target.value
          })}>

              <option value={''}>负责人</option>

              {/* 动态获取所有的负责人列表 */}
              {
                  users.map(user=><option key={user.id} value={user.id}>{user.name}</option>)
              }
          </select>
      </div>
    </form>
  );
}


