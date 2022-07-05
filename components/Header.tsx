/*
 * @Author: Boseny yxy43445@gmail.com
 * @Date: 2022-07-05 20:46:38
 * @LastEditors: Boseny yxy43445@gmail.com
 * @LastEditTime: 2022-07-06 01:54:28
 * @FilePath: /convert-typeScript-to-markdown/components/Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import xw from 'xwind'
const Header: React.FC = () => {
    return (<div css={xw`flex mt-20 p-5 text-2xl items-center justify-center`}>Convert TypeScript To Markdown</div>)
} 
export default Header