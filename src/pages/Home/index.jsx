import { BarChart } from '@/components/BarChart';
import { useEffect, useState } from 'react';
import { getArticleListAPI } from '@/apis/article';

const Home = () => {
  const [reqData] = useState({
    status: '',
    channel_id: '',
    begin_pubdate: '',
    end_pubdate: '',
    page: 1,
    per_page: 50
  });

  const [typeCount, setTypeCount] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const res = await getArticleListAPI(reqData);
        const results = res.data.results;
        console.log(results)
        let arr = [...typeCount];
        results.forEach(element => {
          switch (element.cover.type) {
            case 0:
              arr[0] += 1;
              break;
            case 1:
              arr[1] += 1;
              break;
            case 2:
              arr[2] += 1;
              break;
            case 3:
              arr[3] += 1;
              break;
          }
        });
        setTypeCount(arr);
      } catch (error) {
        console.error("获取文章数据失败：", error);
      }
    };

    fetchArticleData();
  }, []);

  // 图表的标题
  const chartTitle = "文章封面类型统计";
  // 图表的x轴数据
  const xData = ["无图", "单图", "双图", "三图"];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop:'100px' }}>
      {/* 渲染柱状图 */}
      <BarChart title={chartTitle} xData={xData} sData={typeCount} />
    </div>
  );
};

export default Home;