
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import dynamic from 'next/dynamic'
const DynamicEditor = dynamic(() => import('../components/Editor'), {
  ssr: false,
})
export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}><DynamicEditor /></div>
    </Layout>
  );
}
