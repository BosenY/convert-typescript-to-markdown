/*
 * @Author: Boseny yxy43445@gmail.com
 * @Date: 2022-07-25 16:51:20
 * @LastEditors: Boseny yxy43445@gmail.com
 * @LastEditTime: 2022-07-25 16:51:59
 * @FilePath: /convert-typeScript-to-markdown/utils/transform.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { parse } from '@babel/parser';
import {
  isTSInterfaceDeclaration,
  TSInterfaceDeclaration,
  isTSPropertySignature,
  isTSMethodSignature,
  isIdentifier,
  isExportNamedDeclaration
} from '@babel/types';