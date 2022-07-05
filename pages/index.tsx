
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Editor from "@monaco-editor/react";
const DemoCode = `interface ResolveType {
  /**
   * return resolve
   */
  success: boolean;
  action: 'link' | 'modal' | 'easyShare' | 'toast' | 'subscribe' | 'addToHome';
  message?: any;
}`
export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}><Editor
        height="100%"
        theme="vs-dark"
        defaultLanguage="typescript"
        defaultValue={DemoCode}
      /></div>
    </Layout>
  );
}
