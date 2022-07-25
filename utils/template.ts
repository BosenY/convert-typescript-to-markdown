/*
 * @Author: Boseny yxy43445@gmail.com
 * @Date: 2022-07-25 19:38:44
 * @LastEditors: Boseny yxy43445@gmail.com
 * @LastEditTime: 2022-07-25 19:51:32
 * @FilePath: /convert-typeScript-to-markdown/utils/template.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let template = `
<% schema.map(item => { %>
### <%- item.name %>

|参数|说明|类型|必须|
|--|--|--|--|
<% item.properties.map(property => { _%>
|<%= property.name %>|<%= property.description %>说明|<%- property.type.replace("|","\\\\|") %>|<%= property.required?"是":"否" %>|
<% }) _%>
<% }) _%>
`;

export const getTemplate = () => {
  return localStorage.getItem("ts_to_md_template") || template;
};

export const setTemplate = (str: string) => {
  template = str;
  localStorage.setItem("ts_to_md_template", str);
};
